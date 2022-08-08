import { useRef } from "react";
import '../../bootstrap5/css/bootstrap.min.css';

const AlgoOption = (props) => {
    const selectRef=useRef();

    const changeAlgo=()=>{
        props.algoHandler(selectRef.current.selectedOptions[0].value);
    }
    return (
        <select class= "form-select form-select-lg" ref={selectRef} onChange={changeAlgo}>
            <option value="none">Algorithm</option>
            <option value="dijkstra">Dijkstra</option>
            <option value="BFS">BFS</option>
            <option value="DFS">DFS</option>
            <option value="A*">A*</option>
        </select>
    );
}

export default AlgoOption;