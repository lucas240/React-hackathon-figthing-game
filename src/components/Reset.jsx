import React from 'react'

const Reset = () => {
    return(
        <button type="button" className="btn btn-danger btn-lg btn-block" value="Refresh Page" onClick={()=>{window.location.reload()}}>RESET</button>
    )
}

export default Reset