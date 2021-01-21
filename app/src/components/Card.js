import React from 'react'

const Card = ({ name, imageUrl, text, originalText }) => {
   
    return (
        <div>
            <h3>{name}</h3>
            <img src={imageUrl} alt={originalText} />
            <p>{text}</p>
        </div>
    )
}

export default Card
