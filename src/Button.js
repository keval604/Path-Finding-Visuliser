import './Button.css';
const Button=(props)=>{
    const cor=props.cor;

    // const [dis,setDis]=useState(disArray);
    let dis=[];
    for (let i = 0; i < props.noRows; i++) {
        dis.push([]);
        for (let j = 0; j < props.noCols; j++) {
            dis[i].push(Number.MAX_SAFE_INTEGER);
        }
    }

    let parent = (new Array(props.noRows)).fill().map(function(){ return new Array(props.noCols).fill([-1,-1]);});
  
    function isInRange(curr){
        return curr.x>=0 && curr.y>=0 && curr.x<props.noRows && curr.y<props.noCols;
    }

    function findMinVertex(){
        let minDis=Number.MAX_SAFE_INTEGER,minVer=null;
        for(let i=0;i<props.noRows;i++){
            for(let j=0;j<props.noCols;j++){
                if(!props.visited[i][j] && dis[i][j]<minDis){
             
                    minDis=dis[i][j];
                    minVer={x:i,y:j};
                }
            }   
        }
        return minVer;
    }

    const karoPrint=()=>{
        let curr=parent[cor.end.x][cor.end.y];
        while(curr[0]!==cor.start.x || curr[1]!==cor.start.y){
            props.setVisit(curr[0],curr[1],3);
            curr=parent[curr[0]][curr[1]];
       
        }
    }

    const hakavoDijkstra=()=>{
        dis[cor.start.x][cor.start.y]=0;
        while(true){
            let u=findMinVertex();
            
            if(u==null) return;
            props.setVisit(u.x,u.y,1);

            let change=[[-1,0],[0,-1],[1,0],[0,1]];
            let isEnd=false;
           
            for(let i=0;i<change.length;i++){
                let ele=change[i];
                let newCorr={x:ele[0]+u.x,y:u.y+ele[1]};
             
                
                if(isInRange(newCorr) && !props.visited[newCorr.x][newCorr.y] && (dis[u.x][u.y]+1)<dis[newCorr.x][newCorr.y]){
                    parent[newCorr.x][newCorr.y]=[u.x,u.y];
                    dis[newCorr.x][newCorr.y]=dis[u.x][u.y]+1;
                    if(newCorr.x===cor.end.x && newCorr.y===cor.end.y){
                        props.setVisit(cor.start.x,cor.start.y,2);
                      
                        karoPrint();
                        isEnd=true;
                        return;
                    }
                }
            }
           
            if(isEnd) return;
        }
    }
    
    return(
        <>
            <button onClick={hakavoDijkstra} class="button">Start</button>
    
        </>
    );
}

export default Button;