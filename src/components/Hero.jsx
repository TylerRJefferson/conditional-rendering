import { useState } from "react";

function Hero() {
  const [user, setUser] = useState()
  console.log({user})
  const handleLogin = () => {
    setUser({ firstName: 'Tyler', email: 'Tyler@email.com', admin: true })
  }
  const handleLogOut = () => {
    setUser()
  }
  if(!user) { //if no user
    return <button onClick={handleLogin}>Login</button>
  }
  return(
    <>
      <h1>Hello {user.firstName}</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  )
}

export default Hero;