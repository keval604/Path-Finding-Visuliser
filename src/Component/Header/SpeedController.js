import { useRef } from "react";
import { useContext } from 'react';
import { VisitContext } from '../Grid/GridContainer';
import './SpeedController.css';


const SpeedController = (props) => {
    const ctx = useContext(VisitContext);
    const selectRef=useRef();
    const changeSpeed = () => {
        // props.speedHandler(selectRef.current.value);
        
        console.log("assasdfsdfsd",selectRef.current.value);
        ctx.setSpeed(selectRef.current.value);
    }
    return (
        <div class="slidecontainer row">
            <div class="col-auto" ><label class="form-label text-white fs-4 " >Speed </label></div>
            <div class="col-auto align-items-center"><input type="range" class="form-range slider" min="1" max="500" value={ctx.speed} id="myRange" ref={selectRef} onChange={changeSpeed}/></div>
        </div>
    );
}

export default SpeedController;