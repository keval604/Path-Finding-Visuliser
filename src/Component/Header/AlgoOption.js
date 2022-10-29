import { useRef } from "react";
import '../../bootstrap5/css/bootstrap.min.css';

const AlgoOption = (props) => {
    const selectRef=useRef();

    const changeAlgo=()=>{
        props.handler(selectRef.current.selectedOptions[0].value);
    }
    return (
        <select class= "form-select form-select-lg" ref={selectRef} onChange={changeAlgo} >
            {   props.optionType!="container" &&
                <>
                    <option value="none">Algorithm</option>
                    <option value="dijkstra">Dijkstra</option>
                    <option value="BFS">BFS</option>
                    <option value="DFS">DFS</option>
                    <option value="A*">A*</option>
                </>
            }
            {
                props.optionType==="container" &&
                <>
                    <option value="grid" selected={props.selection=="grid"}>Grid</option>
                    <option value="map" selected={props.selection=="map"}>Map</option>
                </>
            }
        </select>
    );
}

export default AlgoOption;