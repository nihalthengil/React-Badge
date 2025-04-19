import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard Page</h2>
        <Link to="/product">Product</Link>
        <br />
      <button>Logout</button>
    </div>
  )
}

export default Dashboard
