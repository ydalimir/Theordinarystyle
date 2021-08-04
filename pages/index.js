import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import { getLastGamesApi } from "../api/game";
import ListGames from "../components/ListGames";
import Seo from "../components/Seo";

export default function Home() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      if (size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, []);

  return (
    <>

<div className="
    lg:my-8 lg:grid-cols-4
    grid-cols-1
    grid gap-4 my-4 
  " >
      
      <ListGames games={games} />
    </div>
    
     
     
    </>
    
    
    
  );
}
