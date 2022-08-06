import { useRef } from "react";
import './SpeedController.css';

const SpeedController=(props)=>{
    const selectRef=useRef();

    const changeSpeed=()=>{
        props.speedHandler(selectRef.current.value);
    }
    return (
        <div class="slidecontainer">
            <input type="range" min="1" max="1000" value={props.speed} class="slider" id="myRange" ref={selectRef} onChange={changeSpeed}/>
        </div>
    );
}

export default SpeedController;