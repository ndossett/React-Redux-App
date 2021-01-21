import React from 'react';
import { connect } from 'react-redux';
import { getCards } from './../actions';

const Cards = ({ isFetching, error, getCards }) => {
    const handleClick = () => {
        getCards();
    };

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2> Fetching your cards!</h2>;
    }

    return (
        <>
        <form>
            <h2>Select Color</h2>
            <h2>Select CMC</h2>
        </form>
        <button onclick={handleClick}>Get Cards!</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
    }
}
export default connect(mapStateToProps, { getCards })(Cards);
