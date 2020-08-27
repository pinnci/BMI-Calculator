import React from 'react';

function Result(props){
    let height = props.height / 100;
    let weight = props.weight;

    let result = weight / (height * height);
    let resultBmi = result.toFixed(2);

    function resultMessage(){
        //Result messages for male
        if(props.gender === 'male'){
            if(resultBmi <= 20){
                return <h4 className="underweight">You have underweight.</h4>
            }
    
            if(resultBmi > 20 && resultBmi <= 25){
                return <h4 className="normal">You have normal body weight. Great job!</h4>
            }
    
            if(resultBmi > 25 && resultBmi <= 30){
                return <h4 className="light-overweight">You have light overweight.</h4>
            }
    
            if(resultBmi > 30 && resultBmi <= 40){
                return <h4 className="obesity">You have obesity.</h4>
            }
    
            if(resultBmi > 40){
                return <h4 className="morbit-obesity">You have morbit obesity.</h4>
            }
        }

        //Result messages for female
        if(props.gender === 'female'){
            if(resultBmi <= 19){
                return <h4 className="underweight">You have underweight.</h4>
            }
    
            if(resultBmi > 19 && resultBmi <= 24){
                return <h4 className="normal">You have normal body weight. Great job!</h4>
            }
    
            if(resultBmi > 24 && resultBmi <= 29){
                return <h4 className="light-overweight">You have light overweight.</h4>
            }
    
            if(resultBmi > 29 && resultBmi <= 39){
                return <h4 className="obesity">You have obesity.</h4>
            }
    
            if(resultBmi > 39){
                return <h4 className="morbit-obesity">You have morbit obesity.</h4>
            }
        }

    }

    return(
        <div className="result">
            <h1>YOUR BMI</h1>
            <h3>{resultBmi}</h3>
            {resultMessage()}
        </div>
    );
}

export default Result;