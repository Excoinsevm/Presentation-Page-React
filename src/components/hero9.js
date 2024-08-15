import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero9-text2 thq-heading-1">
                  Build Your Dream Website Today
                </h1>
              </Fragment>
            )}
          </h1>
          <div className="hero9-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: undefined,
  image1Alt: 'Website Building Services',
  image1Src:
    'https://images.unsplash.com/photo-1526056977829-85c7379c851f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzY2MDQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero9.propTypes = {
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero9
