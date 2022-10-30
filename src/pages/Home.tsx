import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/svgComponents/Logo';


export default function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/SignIn">SignIn</Link>
      <Link to="/SignUp">SignUp</Link>
      <Logo/>
    </div>
  )
}
