import React from 'react'
import CountButton from './CountButton/CountButton.js'

const App = () => {
    return (
      <div>
        <CountButton increamentBy={1} background={"brown"}/>
        <CountButton increamentBy={5} background={"orange"}/>
        <CountButton increamentBy={10} background={"green"}/>
      </div>
    )
}

export default App