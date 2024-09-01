import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      This is homepage i have you links more
     <div>
     <Link to={"home1"}>home1</Link>
     <Link to={"home2"}>home2</Link>
     <div>
      {
        arr.map((item)=>{
          return <Link to={`${item}`}>home {item}</Link>
        })
      }
     </div>
     </div>
     
 <Outlet/>
    </div>
  )
}

export default Home