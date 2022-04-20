

import React from 'react'
import "./cardItems.scss"
import preview from "./../../images/preview.png"

const EmptyCard = () => {
  return (
    <div className='container empty-card'>
        <img src={preview} alt="empty cart image" />
    </div>
  )
}

export default EmptyCard