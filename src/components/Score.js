import React, { useState } from 'react'

const Score = ({ count }) => {

return (
  <div className='displayScore'>
    <p>Your score : OK {count.ok} ~ KO {count.ko}</p>
  </div>
  )
}

export default Score