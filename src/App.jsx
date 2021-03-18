/* eslint no-eval: 0 */
import React from 'react'
import './App.css'
import Button from './components/Button'
import Result from './components/Result'

const App = () => {
    const clickHandlerFunction = text => {
        console.log('desde app: ' + text)
    }
    return (
        <main className='react-calculator'>
            <Result></Result>
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
            <div className="functions">
                <Button text='clear' clickHandler={clickHandlerFunction} />
                <Button text='remove' clickHandler={clickHandlerFunction} />
            </div>
            <div className="math-operations">
                <Button text='+' clickHandler={clickHandlerFunction} />
                <Button text='-' clickHandler={clickHandlerFunction} />
                <Button text='*' clickHandler={clickHandlerFunction} />
                <Button text='/' clickHandler={clickHandlerFunction} />
                <Button text='=' clickHandler={clickHandlerFunction} />
            </div>
        </main>
    )
}

export default App

