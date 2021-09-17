import 'regenerator-runtime/runtime'

import { loadData } from '../api/handle'

const development = process.env.NODE_ENV !== 'production'
type StaticPropsReturn = {
  props: { html?: string; css?: string }
}

const getStaticProps = async (): Promise<StaticPropsReturn> => {
  if (development) {
    return { props: {} }
  } else {
    const data = await loadData()
    const template = data.find((c) => c.filename === 'default.json')
    if (template) {
      const content = JSON.parse(template.content)
      return { props: { html: content.html, css: content.css } }
    } else {
      return { props: {} }
    }
  }
}
export { getStaticProps }
