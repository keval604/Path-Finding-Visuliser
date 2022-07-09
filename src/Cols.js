import { useContext } from 'react';
// import VisContext from './Context/vis-context';
import { VisitContext } from './App';
import './Cols.css';


const Cols=(props)=>{
    const ctx=useContext(VisitContext);

    let isTerminal="";
    let row=props.rowNo,col=props.colNo;
    if((ctx.cor.start.x===row && ctx.cor.start.y===col) || 
        (ctx.cor.end.x===row && ctx.cor.end.y===col )){
        isTerminal="terminal"
    }

    let color='';
    if(ctx.visited[row][col]===1) color="yellow";
    else if(ctx.visited[row][col]===-1) color="blue";
    else if(ctx.visited[row][col]===2) color="selmon";
    else if(ctx.visited[row][col]===3) color="green";
    return (
        <>
            <td     
                className={`col ${row}_${col} ${isTerminal}`} 
                onClick={()=>ctx.setVisited(row,col,-1)}
              
                style={{
                    backgroundColor: color,
                }}
                
            />
                
        </>
    )
}

export default Cols;