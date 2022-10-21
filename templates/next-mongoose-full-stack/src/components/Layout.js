import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h2>Waifu</h2>
        <ul>
          <li>Home</li>
          <li></li>
        </ul>
      </header>
      <h1>Waifu List</h1>
      <main>{children}</main>
    </div>
  )
}

export default Layout
