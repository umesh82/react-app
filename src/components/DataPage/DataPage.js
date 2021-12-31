import React, {useState} from 'react'
import './data.css';

const DataPage = () => {
    let DataValue = localStorage.getItem('dataValue');
    const [show, setShow] = useState(true);

    const resultHandlerv = () => {
        setShow(false);
    }
    return (
        <div className="data" >
           {show && <p>{DataValue}</p>}
           <div >
             <button className="btn" onClick={resultHandlerv}>Click To Clear</button>
           </div>
        </div>
    )
}

export default DataPage
