import axios from 'axios';

export const FETCH_CARDS_START = 'FETCH-CARD-START';
export const FETCH_CARDS_SUCCESS = 'FETCH-CARD-SUCCESS';
export const FETCH_CARDS_FAIL = 'FETCH-CARD-FAIL';

export const getCards = () => dispatch => {
    dispatch({type: FETCH_CARDS_START});
    axios
        .get('https://api.magicthegathering.io/v1/cards')
        .then(res => {
            dispatch({type:FETCH_CARDS_SUCCESS,
            payload: res.data.cards})
        })
        .catch(err => {
            dispatch({ type: FETCH_CARDS_FAIL,
            payload: err.res.status})
        })
}