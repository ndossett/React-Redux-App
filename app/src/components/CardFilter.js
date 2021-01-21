import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCards } from './../actions';
import Card from './Card';


const Cards = ({ isFetching, error, getCards, cards }) => {
    const [cardColor, setCardColor ] = useState({
        colors: '',
        cmc: '',
    })
    const [disabledButton, setDisabledButton ] = useState(true)
    console.log(cards)
    
    useEffect(() => {
        if(cardColor.colors !== '' && cardColor.cmc !== '' ){
            setDisabledButton(false)
        }
    }, [cardColor]);

    const cardSubmit = () => {
        getCards(cardColor)
        setDisabledButton(true)
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2> Fetching your cards!</h2>;
    }

    const onChange = (e) => {
        setCardColor({
            ...cardColor, [e.target.name]: e.target.value
        })
    }
 console.log(cardColor)
    return (
        <>
        <div>
            <label>Choose a color: </label>
            <select name="colors" onChange={onChange}>
                <option >Please Select One</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="white">White</option>
                <option value="green">Green</option>
                <option value='null'>Colorless</option>
            </select>
        </div>
        <div>
        <label>
            Select CMC: 
        </label>
            <select name="cmc" onChange={onChange}>
                <option >Please Select One</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>
        </div>
        <button onClick={cardSubmit} disabled={disabledButton}>Get Cards!</button>
        <div>
            {cards.map(card => <Card key={card.id} {...card} /> )} 
        </div>
        </>
    )
}
//...card spreads object into individual props
const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        cards: state.cards,
    }
}
export default connect(mapStateToProps, { getCards })(Cards);
