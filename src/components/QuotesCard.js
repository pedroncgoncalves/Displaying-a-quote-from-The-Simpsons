import React from "react"

function QuoteCard (props){
    return (
        <div>
            <p>{props.quote}</p>
            <p>{props.character}</p>
            <img src={props.image}/>
        </div>
    )
}

export default QuoteCard