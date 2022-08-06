import { useRef } from "react";

const AlgoOption=(props)=>{
    const selectRef=useRef();

    const changeAlgo=()=>{
        props.algoHandler(selectRef.current.selectedOptions[0].value);
    }
    return (
        <select ref={selectRef} onChange={changeAlgo}>
            <option value="none">Algorithm</option>
            <option value="dijkstra" selected={props.algo=="dijkstra"?"selected":''}>Dijkstra</option>
            <option value="BFS">BFS</option>
            <option value="DFS">DFS</option>
            <option value="A*">A* </option>
        </select>
    );
}

export default AlgoOption;