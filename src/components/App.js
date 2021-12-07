import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [fourMeals, setfourMeals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSushi(data);
        setfourMeals([...data.slice(0, 4)]);
        setCurrentIndex(currentIndex + 4);
      });
  }, []);

  function showMoreSushi() {
    setCurrentIndex(currentIndex + 4);
    setfourMeals(sushi.slice(currentIndex, currentIndex + 4));
  }

  function eatDatSushi(image) {
    console.log('click')
    console.log(image)
    // console.log(fourMeals)
    image="http://www.clker.com/cliparts/9/9/f/0/1194984076762834840small_plate.svg.hi.png"

    // const removeMeal = fourMeals.filter((oneSushiImage) => oneSushiImage.img_url !== image);
    // setfourMeals(removeMeal);
  }

  return (
    <div className="app">
      <SushiContainer
        sushi={fourMeals}
        showMoreSushi={showMoreSushi}
        eatDatSushi={eatDatSushi}
      />
      <Table />
    </div>
  );
}

export default App;
