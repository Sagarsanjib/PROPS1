import React from 'react'

const DisplayCard = (props) => {
   
    return (
        <>
        <h1>Colors & ColorCode</h1>
        <hr />

            {props.colors.map((e, idx) => {
                return (
                    <div className = "displays" style={{ height:290, width:230, textAlign:"center"}}>
                        <p style={{height:220, width:230, backgroundColor:`${e.color_code}`}}> </p>
                        <p className="text" key={idx} >{e.color_code}</p>
                        <span className="text"  style={{color:`${e.color_code}`, fontSize:20}} >{e.color_name}</span>

                    </div>
                )
            })}
        </>
    )
}

export default DisplayCard;