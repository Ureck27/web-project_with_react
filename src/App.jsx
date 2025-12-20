import { useState } from 'react'

function App() {

  return (
         <>
          <Text display="hello world!"/>
          <Text display="Hello world!"/>
         </>
  )
}

function Text({display}){
  return(
    <div>
      <h1>{display}</h1>
    </div>
  )
}

export default App
