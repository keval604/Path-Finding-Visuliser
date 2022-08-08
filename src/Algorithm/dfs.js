
export const dfs=(visitCtx,gridCtx,speed)=>{
    const cor=gridCtx.cor; //terminal cordinate;
    const noRows=gridCtx.noRows.rows;       //total no of rows and cols;
    const noCols=gridCtx.noCols.cols;

    let parent = (new Array(noRows)).fill().map(function(){ return new Array(noCols).fill([-1,-1]);});  
    
    const isInRange=(curr)=>{         
        return curr.ni>=0 && curr.nj>=0 && curr.ni<noRows && curr.nj<noCols;
    }

    const printPath=()=>{
        let curr=parent[cor.end.x][cor.end.y];
        var timer=setInterval(()=>{
            
            if(curr[0] === cor.start.x && curr[1] === cor.start.y){ 
                visitCtx.setVisited(curr[0],curr[1],-1);
                clearInterval(timer);
                return;
            }
            visitCtx.setVisited(curr[0],curr[1],-4);
            curr=parent[curr[0]][curr[1]];
        },speed);
    }

    function relax(curr){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // const curr = queue.shift();
                const dir=[[-1,0],[1,0],[0,-1],[0,1]];

                for(let j=0; j<4; j++){
                    let ni=curr[0]+dir[j][0],nj=curr[1]+dir[j][1];
                    // console.log(ni,nj);
                    if(isInRange({ni,nj})){
                        if(visitCtx.visited[ni][nj]==-1 && ni!=cor.start.x && nj!=cor.start.y){
                            parent[ni][nj]=[curr[0],curr[1]];
                            reject(true);
                            return;
                        }else if(visitCtx.visited[ni][nj]>=0){
                            parent[ni][nj]=[curr[0],curr[1]];
                            visitCtx.setVisited(ni,nj,-3);                            
                            // relax([ni,nj]);
                        }
                    }
                }
                resolve(true);
            },speed);
        });
    }
    const executedfs=async()=>{
        // let queue=[];
        // queue.unshift(0,[cor.start.x,cor.start.y]);
        // console.log(queue);
        let i = cor.start.x, j = cor.start.y;
        while(true){
            try{
                const y = await relax([i,j]);
            }
            catch(err){
                printPath();
                return;
            }
        }
        
    }
    executedfs();
}

