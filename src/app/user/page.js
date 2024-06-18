"use client"
import { useState } from "react";
function page() {
    const [h2Style,setH2style]=useState();
  return (
    <div>

        <h1 style={{backgroundColor:"yellow"}}>User page</h1>
        <h2 style={h2Style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aperiam.</h2>

        <button onClick={()=>setH2style({backgroundColor:'red'})}> update style</button>
    </div>
  )
}

export default page;