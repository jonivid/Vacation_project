import { ChangeEvent } from "react";
import { useState } from "react";
import "./left.css"

import { ActionType } from '../../redux/action-type';
import { useDispatch } from "react-redux";
 
const Left = () : JSX.Element =>{
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);    
    const dispatch = useDispatch();


    const onNum1Changed = (event: ChangeEvent<HTMLInputElement>) => {
        setNum1(+event.target.value);
    }
    
    const onNum2Changed = (event: ChangeEvent<HTMLInputElement>) => {
        setNum2(+event.target.value);
    }      

    const onMultClicked = () => {
        dispatch({type: ActionType.Mult, payload: {num1, num2}});
    }

    return (
        <div className="left">
            <input type="number" onChange={onNum1Changed} /><br />
            <input type="number" onChange={onNum2Changed} /><br />
            <input type="button" value="mult" onClick={()=>onMultClicked()} />
        </div>
    );
}

export default Left;