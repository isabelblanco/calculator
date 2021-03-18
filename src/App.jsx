/* eslint no-eval: 0 */
import React from 'react'
import './App.css'
import Numbers from './components/Numbers'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'

const App = () => {
    return (
        <main className='react-calculator'>
            <Result />
            <Numbers />
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

