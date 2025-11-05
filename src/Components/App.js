import React from 'react'
import CountButton from './CountButton'

const App = () => {
    return (
      <div>
        <CountButton increamentBy={1} background={"brown"} fontSize={"12px"}/>
        <CountButton increamentBy={5} background={"orange"} fontSize={"14px"}/>
        <CountButton increamentBy={10} background={"green"} fontSize={"16px"}/>
      </div>
    )
}

export default App