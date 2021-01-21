import { FETCH_CARDS_START, FETCH_CARD_SUCCESS, FETCH_CARDS_FAIL} from './../actions';

const initialState = {
    cards: [],
    isFetching: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}