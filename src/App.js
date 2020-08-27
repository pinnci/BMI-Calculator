import React, { useState } from 'react';
import Gender from './Components/Gender';
import Range from './Components/Range';
import Button from './Components/Button';
import Result from './Components/Result';

//Wave Background
import { ReactComponent as Waves } from './Icons/waves.svg';


function App() {
  const [bmi,setBmi] = useState({
    gender:'male',
    height:'165',
    weight:'70',
    result:false
  });
  
  //Change gender
  function changeGender(e){
    let gender = e.target.id;

    setBmi(prevState => ({
      ...prevState,
      gender:gender
    }))
  }

  //Get information about person
  function getHeight(e){
    let height = e.target.value;
    
    setBmi(prevState => ({
      ...prevState,
      height : height
    }))
  }

  function getWeight(e){
    let weight = e.target.value;

    setBmi(prevState => ({
      ...prevState,
      weight : weight
    }))
  }

  //Switch between introduction text and result
  function switchContent(){
    if(bmi.result === false){
      return (
        <div className="introduction">
          <p>Body mass index, or BMI, is used to determine whether you are in a healthy weight range for your height.</p>
          <small><i>* This calculator shouldn't be used for pregnant women or children.</i></small>
        </div>
      );
    }else{
      return  <Result height={bmi.height} weight={bmi.weight} gender={bmi.gender} />
    }
  }

  //Show result
  function showResult(){
    setBmi(prevState=>({
      ...prevState,
      result:true
    }))
  }

  //Reset
  function reset(){
    setBmi(prevState=>({
      ...prevState,
      result:false
    }))
  }

  return (
    <div className="app">
      <div className="container">
      <Gender 
        changeGender={changeGender}/>

      <Range 
        getHeight={getHeight}
        getWeight={getWeight} 
        Height={bmi.height}
        Weight={bmi.weight}/>
      </div>
      
      <Waves className="waves" />

      <Button 
        showResult={showResult}
        reset={reset}  />

      {switchContent()}
    </div>
  );
}

export default App;
