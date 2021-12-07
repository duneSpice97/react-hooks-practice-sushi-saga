import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({sushi, showMoreSushi, eatDatSushi}) {
  
    const renderEachSushi = sushi.map((eachSushi) => {
      return (
        <Sushi
          key={eachSushi.id}
          image={eachSushi.img_url}
          name={eachSushi.name}
          price={eachSushi.price}
          eatDatSushi={eatDatSushi}
        />
      );
    });

  return (
    <div className="belt">
      {renderEachSushi}
      <MoreButton showMoreSushi={showMoreSushi} />
    </div>
  );
}

export default SushiContainer;