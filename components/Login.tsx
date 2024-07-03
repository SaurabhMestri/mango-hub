import React, { useState } from 'react'


type Props = {}

const Login = (props: Props) => {
    const [isLoggedIn ,setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

  return (
    <main >
        {isLoggedIn  ? (
            <button onClick={handleLogout}>Logout</button>

        ) : (

            <button onClick={handleLogin} >Login</button>
        )}
      </main>
  )
}

export default Login