import React from 'react'

export const CardButton = ({text, color}) => {
  return (<>
    <button className={`px-3 py-2 ${color} text-xs rounded m-2`}>{text}</button>
  </>
  )
}

export default CardButton;

import React from 'react';
import { CardButton } from './Components/cardbutton';

export const App = () => {

  return (
    <>
    <CardButton text="clik here" color="bg-red-300"/>
    <CardButton text="Download" color=""/>
    </>
  )}
export default App;