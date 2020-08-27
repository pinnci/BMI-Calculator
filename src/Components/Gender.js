import React from 'react';

//Icons
import {ReactComponent as Male} from '../Icons/male.svg';
import {ReactComponent as Female} from '../Icons/woman.svg';

function Gender(props){
    //Change Gender
    function changeGender(e){
        props.changeGender(e);
    }

    //Active / Unactive effect
    function changeActive(e){
        let bubbles = document.querySelectorAll('.choose');
        bubbles.forEach((bubble)=>{
            bubble.classList='choose unactive'
        })

        if(e.target.className === 'choose unactive'){
            e.target.classList='choose active';
        }
        
        changeGender(e);
    }

    return(
        <div className="gender">
            <p className="heading">GENDER</p>
            <div className="flex">
                <div id="male" className="choose active" onClick={changeActive}>
                    <Male className="male-icon"/>
                    <p id="male" >Male</p>
                </div>

                <div id="female" className="choose unactive" onClick={changeActive}>
                    <Female className="female-icon"/>
                    <p id="female" >Female</p>
                </div>
            </div>
        </div>
    )
}

export default Gender;