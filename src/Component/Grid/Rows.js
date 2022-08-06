import Cell from "./Cell";

const Rows=(props)=>{
    const arr = [...Array(props.noCols).keys()].map(x => x++);
    return (
        <>
            <tr className={`row ${props.rowNo}`}>
                {
                    arr.map((ele, index) => ( 
                        <Cell key={index} colNo={ele} rowNo={props.rowNo}></Cell>
                    )) 
                }
            </tr>
        </>
    )
}

export default Rows;