import Cols from "./Cols";

const Rows=(props)=>{
    const arr = [...Array(props.noCols).keys()].map(x => x++);
    return (
        <>
            <tr className={`row ${props.rowNo}`}>
                {
                    arr.map((ele, index) => ( 
                        <Cols key={index} colNo={ele} rowNo={props.rowNo}></Cols>
                    )) 
                }
            </tr>
        </>
    )
}

export default Rows;