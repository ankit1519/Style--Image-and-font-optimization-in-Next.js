"use client"
import outside from "@/styles/outside.module.css"
import { useState } from "react";

function page() {
    const [color,setColor]=useState("red");
  return (
    <div>
        <h1 className={color=="red"?outside.red:outside.green}>style with condition</h1>
        <button onClick={()=>setColor("green")}>update</button>
        <p id={outside.orange}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio officiis vel ab ea non excepturi ullam cupiditate porro? Ut aspernatur excepturi nisi accusamus libero nesciunt ipsam eos quam quia recusandae.</p>
    </div>
  )
}

export default page;