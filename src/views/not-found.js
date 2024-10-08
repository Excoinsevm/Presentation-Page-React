import React from 'react'
import { Helmet } from 'react-helmet'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container1">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      {/* Add the image here */}
      <img
        src="/cubeswap-200h.png"
        alt="Cubeswap Logo"
        className="not-found-logo"
      />
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-container2">
        <h1 className="not-found-text2">404</h1>
      </div>
      <div className="not-found-container3">
        <h2 className="not-found-text3">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
