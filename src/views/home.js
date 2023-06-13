import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Paradigm Analyst</title>
        <meta property="og:title" content="Lead Paradigm Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
