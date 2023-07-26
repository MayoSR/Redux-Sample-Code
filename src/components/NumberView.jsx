import React from 'react'
import { useSelector } from 'react-redux'

export default function NumberView(props) {

    const num = useSelector(state => state.number)

  return (
    <div>
        <p>{num}</p>
    </div>
  )
}
