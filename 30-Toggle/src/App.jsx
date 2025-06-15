import { useState } from 'react'



import Toggle from './assets/components/Toggle';
import ToggleUsingOneBtn from './assets/components/ToggleUsingOneBtn';

function App() {

  return (
    <>
      <h1>Using only Two Buttons</h1>
      <Toggle></Toggle>
      <h1>Using only One Button</h1>
      <ToggleUsingOneBtn></ToggleUsingOneBtn>
    </>
  )
}

export default App
