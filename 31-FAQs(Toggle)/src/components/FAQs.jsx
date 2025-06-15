import React from 'react'
import data from "../data/data.json"

import FAQ from './FAQ'
const FAQs = () => {
  return (
    <div>
        {data.map((singleData)=><FAQ singleData={singleData}></FAQ>)}
    </div>
  )
}

export default FAQs