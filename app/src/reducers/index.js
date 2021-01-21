import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAIL} from './../actions';

const initialState = {
    cards: [],
    isFetching: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_CARDS_START):
            return({
                ...state,
                isFetching: true,
            })
        case(FETCH_CARDS_SUCCESS):
            return({
                ...state,
                cards: action.payload,
                isFetching:false,
            })
        default:
            return state;
    }
}