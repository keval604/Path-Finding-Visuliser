import { useContext } from 'react';
import { VisitContext } from '../../App';
import './Cell.css';


const Cell=(props)=>{
    const ctx=useContext(VisitContext);

    let isTerminal="";
    let row = props.rowNo, col = props.colNo;

    if((ctx.cor.start.x===row && ctx.cor.start.y===col) || 
        (ctx.cor.end.x===row && ctx.cor.end.y===col )){
        isTerminal="terminal"
    }

    let color='';
    let colorArray=["#c6f7f1","#b6fcf3","#9bfaed","#81fcec","#54ebd7","#48dbc8","#2eab9a","#09695d"];
    let vis="";
    if(ctx.visited[row][col]===-3){ //visited 
        color="yellow";
        vis="anime";
    }
    else if(ctx.visited[row][col]===-2) color="#1f0914";  //block
    else if(ctx.visited[row][col]===-1) color="selmon"; //end point
    else if(ctx.visited[row][col]===-4) color="green";  //path
    else if(ctx.weight[row][col]>1) color=colorArray[ctx.weight[row][col]-1];

    return (
        <>
            <td     
                className={`col ${row}_${col} ${isTerminal} `} 
                onMouseDown={()=>ctx.mouseHandler(true)}
                onMouseUp={()=>ctx.mouseHandler(false)}
                onMouseOver={()=>ctx.down?ctx.setVisited(row,col,-2):ctx.down}
                onClick={(()=>ctx.setVisited(row,col,-2))}
                
                style={{
                    backgroundColor: color,
                }}
                
            >
            <div className={`${vis}`}></div></td>
        </>
    )
}

export default Cell;