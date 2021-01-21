import axios from 'axios';

export const FETCH_CARDS_START = 'FETCH-CARD-START';
export const FETCH_CARDS_SUCCESS = 'FETCH-CARD-SUCCESS';
export const FETCH_CARDS_FAIL = 'FETCH-CARD-FAIL';

export const getCards = (selectors) => dispatch => {
    dispatch({type: FETCH_CARDS_START});
    console.log(selectors)
    axios
        .get(`https://api.magicthegathering.io/v1/cards/?colors=${selectors.colors}&cmc=${selectors.cmc}&pageSize=4`)
        .then(res => {
            
            dispatch({type:FETCH_CARDS_SUCCESS,
            payload: res.data.cards})
        })
        .catch(err => {
            console.log(err.message)
            dispatch({ type: FETCH_CARDS_FAIL,
            payload: err})
        })
}