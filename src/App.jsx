import React, { useState } from 'react'
import './App.css'
import Numbers from './components/Numbers'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'

const App = () => {
    // const arrayTextandFunction = useState('hola');
    // const text = arrayTextandFunction[0];
    // const modifyText = arrayTextandFunction[1]
    // las tres líneas anteriores se pueden simplificar en la siguiente:
    const [result, setResult] = useState('');

    return (
        <main className='react-calculator'>
            <Result value={result.toString()} />
            <Numbers
                onClickNumber={number => {
                    setResult(`${result}${number}`)
                }}
            />
            <Functions
                onContentClear={clear =>
                    setResult('')
                }
                onDelete={deleteLast =>
                    setResult(result.slice(0, -1))
                }
            />
            <MathOperations
                onClickOperation={operation =>
                    setResult(`${result}${operation}`)
                }
                onClickEqual={equal =>
                    setResult(eval(result))
                }
            />
        </main>
    )
}

export default App

