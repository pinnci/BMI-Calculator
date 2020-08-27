import React, { useState } from 'react';

//Icons
import { ReactComponent as Arrow } from "../Icons/arrow.svg";
import { ReactComponent as Refresh } from '../Icons/refresh.svg'; 

function Button(props){
    const [refresh,setRefresh] = useState(false);

    //Change icons on click
    function changeIcon(){
        if(!refresh){
            return <Arrow className="arrow-icon" onClick={showResult} />
        }else{
            return <Refresh className="arrow-icon" onClick={showResult} />
        }
    }

    //showResult
    function showResult(){
        if(!refresh){
            setRefresh(true);
            props.showResult();

            //Disable inputs when result is displayed
            document.getElementById('rangeHeight').disabled = true;
            document.getElementById('rangeWeight').disabled = true;
        }else{
            props.reset();
            setRefresh(false);

            //Enable inputs when reset button is clicked
            document.getElementById('rangeHeight').disabled = false;
            document.getElementById('rangeWeight').disabled = false;
        }
    }

    return(
        <div>
            <div className="buttonContainer">
                {changeIcon()}
            </div> 
        </div>
  
    );
}

export default Button;