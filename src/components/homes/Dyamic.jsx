import React from 'react'
import { useParams } from 'react-router-dom'

const Dyamic = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>Dyamic {params.id}</div>
  )
}

export default Dyamic