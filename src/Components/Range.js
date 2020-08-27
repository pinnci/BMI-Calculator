import React, { useEffect } from "react";

function Range(props) {
  useEffect(() => {
    const rangeHeight = document.getElementById("rangeHeight");
    const bubbleHeight = document.getElementById("bubbleHeight");

    const rangeWeight = document.getElementById("rangeWeight");
    const bubbleWeight = document.getElementById("bubbleWeight");

    const setValue = () => {
      const newValue = Number(
        ((rangeHeight.value - rangeHeight.min) * 100) / (rangeHeight.max - rangeHeight.min)
      );
      const newPositionHeight = 10 - newValue * 0.2;

      bubbleHeight.innerHTML = `<span>${rangeHeight.value}&nbsp;cm</span>`;
      bubbleHeight.style.left = `calc(${newValue}% + (${newPositionHeight}px))`;

      const newValue2 = Number(
        ((rangeWeight.value - rangeWeight.min) * 100) / (rangeWeight.max - rangeWeight.min)
      );
      const newPositionWeight = 10 - newValue2 * 0.2;
      
      bubbleWeight.innerHTML = `<span>${rangeWeight.value}&nbsp;kg</span>`;
      bubbleWeight.style.left = `calc(${newValue2}% + (${newPositionWeight}px))`;
    };

    document.addEventListener("DOMContentLoaded", setValue);
    rangeHeight.addEventListener("input", setValue);
    rangeWeight.addEventListener("input", setValue);

    //Set default value of both the inputs
    document.getElementById('rangeHeight').value = 165;
    document.getElementById('rangeWeight').value = 70;
  }, []);

  //Selected value effect for Height
  function selectedEffectHeight(e) {
    const val = (e.target.value - 120)*1.11;
    e.target.style.background =
      "linear-gradient(to right, #fff 0%, #fff " +
      val +
      "%, #f0959a " +
      val +
      "%, #f0959a 100%)";
  }

  //Selected value effect for Weight
  function selectedEffectWeight(e) {
    const val = (e.target.value - 30)*0.37;
    e.target.style.background =
      "linear-gradient(to right, #fff 0%, #fff " +
      val +
      "%, #f0959a " +
      val +
      "%, #f0959a 100%)";
  }

  return (
    <div className="range">
      <p className="heading">HEIGHT</p>
      <div className="range-wrap">
        <div className="range-value-height" id="bubbleHeight">
          <span>{props.Height}&nbsp;cm</span>
        </div>
        <input
          type="range"
          id="rangeHeight"
          min="120"
          max="210"
          onInput={selectedEffectHeight}
          onChange={props.getHeight}
        ></input>
      </div>

      <p className="heading">WEIGHT</p>
      <div className="range-wrap">
        <div className="range-value-weight" id="bubbleWeight">
          <span>{props.Weight}&nbsp;kg</span>
        </div>
        <input
          type="range"
          id="rangeWeight"
          min="30"
          max="300"
          onInput={selectedEffectWeight}
          onChange={props.getWeight}
        ></input>
      </div>
    </div>
  );
}


export default Range;