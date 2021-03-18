import React from 'react'
import Button from './Button';

const Numbers = () => {
    const clickHandlerFunction = text => {
        console.log('desde app: ' + text)
    }

    return (
        <div className="numbers">
            <Button text='1' clickHandler={clickHandlerFunction} />
            <Button text='2' clickHandler={clickHandlerFunction} />
            <Button text='3' clickHandler={clickHandlerFunction} />
            <Button text='4' clickHandler={clickHandlerFunction} />
            <Button text='5' clickHandler={clickHandlerFunction} />
            <Button text='6' clickHandler={clickHandlerFunction} />
            <Button text='7' clickHandler={clickHandlerFunction} />
            <Button text='8' clickHandler={clickHandlerFunction} />
            <Button text='9' clickHandler={clickHandlerFunction} />
            <Button text='0' clickHandler={clickHandlerFunction} />
        </div>
    )
}

export default Numbers
