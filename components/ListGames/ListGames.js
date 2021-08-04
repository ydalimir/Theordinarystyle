import React from "react";
import { Image, Grid } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";
import useWindowSize from "../../hooks/useWindowSize";
import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from "../../utils/breakpoint";

export default function ListGames(props) {
  const { games } = props;
  const { width } = useWindowSize();

  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpLg:
        return 5;
      case width > breakpointUpMd:
        return 3;
      case width > breakpointUpSm:
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="w-full"  >
      <div>
        <div className="
    lg:my-8 lg:grid-cols-4
    grid-cols-1
    grid gap-4 my-4 
  " >
          {map(games, (game) => (
            <Game game={game} />
          ))}
          
        </div>
        <div className="
    lg:my-8 lg:grid-cols-4
    grid-cols-1
    grid gap-4 my-4 
  " >
          {map(games, (game) => (
            <Gamest game={game} />
          ))}
          
        </div>
      </div>
     
    </div>

    
  );
}




function Game(props) {
  const { game } = props;

  return (
    <div className="
    mb-4 lg:mb-0
    bg-light p-8 pb-0 hover:bg-light-200">
      <Link href={`/${game.url}`}>
        <a aria-label={game.title}>
          <div className="flex flex-column justify-center items-center h-56">
            <Image src={game.poster.url} alt={game.title}  className="w-3/5" />
          </div>
          <div className="mb-8">
            <p className="text-3xl font-semibold mb-1">{game.title}</p>
            <p className="text-2xs text-gray-700">{game.price} mxn  </p>
            <p className="text-2xs text-gray-700">{game.discount} mxn  </p>
          </div>
        </a>
      </Link>
    </div>
  );
}


function Gamest(props) {
  const { game } = props;

  return (
    <div className="lg:w-flex-fourth bg-light
  px-6 pt-10 pb-2 lg:p-6 lg:pb-0
  hover:bg-light-200 lg:mb-0 mb-4">
    <Link  href={`/${game.url}`}>
      <a aria-label={game.title}>
        <div className="flex flex-column justify-center items-center h-32">
          <Image src={game.poster.url} alt={game.title}  className="w-3/5" />
        </div>
        <div className="">
          <p className="text-xl font-semibold mb-1">{game.title}</p>
          <p className="text-xs text-gray-700 mb-4">{game.price} mxn </p>
        </div>
      </a>
    </Link>
  </div>
  );
}
