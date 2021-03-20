/* eslint no-eval: 0 */
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
            <Result value={result} />
            <Numbers
                onClickNumber={number => {
                    setResult(number)
                }}
            />
            <Functions
                onContentClear={clear =>
                    console.log('Clear: ', clear)
                }
                onDelete={deleteLast =>
                    console.log(deleteLast)
                }
            />
            <MathOperations
                onClickOperation={operation =>
                    console.log('Operation: ', operation)
                }
                onClickEqual={equal =>
                    console.log('Equal: ', equal)
                }
            />
        </main>
    )
}

export default App

