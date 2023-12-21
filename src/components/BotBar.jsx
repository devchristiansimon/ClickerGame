import React from "react";
import { workerImg } from "../Contentlist";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function BotBar({
  workerList,
  setselectedImage,
  selectedImage,
  clickedIndex,
  setClickedIndex,
  income,
  setIncome,
  katharinaWork,
  setKatharinaWork,
  setWorkerList,
  setNathanielWork,
  nathanielWork,
}) {
  const handleImageClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };
  const handleWorkerClick = (index) => {
    setWorkerList((prevWorkerList) => {
      const updatedWorkerList = [...prevWorkerList];
      updatedWorkerList[index].active = true;
      return updatedWorkerList;
    });
  };
  return (
    <>
      {workerList.map((worker, index) => {
        if (worker.active === false && worker.hidden !== true) {
          return (
            <div className="avatarholder" key={worker.id}>
              <img
                className="worker-img"
                src={workerImg[12].workerImageUrl}
                alt={workerImg[12].name}
              />
              <button
                className="freebutton"
                onClick={() => {
                  if (income >= worker.cost) {
                    if (worker.extra === "startSearch") {
                      setKatharinaWork(!katharinaWork);
                    }
                    if (worker.extra === "startDevelop") {
                      setNathanielWork(!nathanielWork);
                    }
                    handleWorkerClick(index);
                    setIncome((i) => i - worker.cost);
                  }
                }}
              >
                {worker.cost}€
              </button>
            </div>
          );
        } else if (worker.hidden !== true) {
          return (
            <img
              className="worker-img"
              src={worker.workerImageUrl}
              alt={worker.name}
              id={worker.name}
              data-tooltip-content={worker.name}
              onClick={() => {
                handleImageClick(index);
              }}
              style={
                selectedImage === worker.name
                  ? { border: "3px solid red" }
                  : { border: "1px solid darkolivegreen" }
              }
              key={worker.id}
            />
          );
        } else <>""</>;
      })}
      <ReactTooltip anchorId="Hassan" />
      <ReactTooltip anchorId="Marius" />
      <ReactTooltip anchorId="Katharina" />
      <ReactTooltip anchorId="Nathaniel" />
      <ReactTooltip anchorId="Franz" />
      <ReactTooltip anchorId="Dave" />
      <ReactTooltip anchorId="Romeo" />
      <ReactTooltip anchorId="Mike" />
      <ReactTooltip anchorId="Cornelius" />
      <ReactTooltip anchorId="Nadia" />
      <ReactTooltip anchorId="Tony" />
      <ReactTooltip anchorId="Christopher" />
    </>
  );
}
