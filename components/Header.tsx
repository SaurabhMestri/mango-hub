import React from 'react'

type Props = {}

const Header = (props: Props) => {

    // javascript
  return (
    <div style={{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        padding : '10px'

    }} >
        <div className="logo">Logo</div>
        <nav style={{
             display : 'flex',
             alignItems : 'center',
             justifyContent : 'space-between',
     
        }} >
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
        </nav>
        <div className="button-container">
            <button>Login</button>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Header