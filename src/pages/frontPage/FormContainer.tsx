import React from 'react'
import Logo from '../../assets/svgComponents/Logo'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
export default function FormContainer() {
  const [signIn, setForm] = React.useState(true)
  return (
    <div>
      <Logo/>
{signIn ?       <SignInForm setForm = {setForm}/> :
      <SignUpForm setForm = {setForm}/>}
    </div>
  )
}
