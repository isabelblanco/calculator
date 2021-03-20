import React from 'react'
import Button from './Button';
import PropTypes from 'prop-types';

const Numbers = ({ onClickNumber }) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const buttonList = numbers.map((number) =>
        <Button
            key={number}
            text={number.toString()}
            clickHandler={onClickNumber}
        />
    );
    return (
        <section className="numbers">
            {buttonList}
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers
