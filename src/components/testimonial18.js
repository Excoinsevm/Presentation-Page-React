import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial18.css'

const Testimonial18 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial18-max-width thq-section-max-width">
        <div className="testimonial18-container1 thq-grid-2">
          <div className="testimonial18-section-title">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="testimonial18-text35 thq-heading-2">
                    Customer Testimonials
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="testimonial18-text23 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="testimonial18-container2">
              <button
                type="button"
                className="thq-button-filled testimonial18-button1"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="testimonial18-text37">
                        Primary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button
                type="button"
                className="thq-button-outline testimonial18-button2"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="testimonial18-text33">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="testimonial18-content">
            <div className="testimonial18-column1 thq-card">
              <div className="testimonial18-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review1 ?? (
                  <Fragment>
                    <span className="testimonial18-text29 thq-body-small">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Suspendisse varius enim in eros elementum tristique.
                      Duis cursus, mi quis viverra ornare.&quot;
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar1">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial18-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content1">
                  <span>
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="testimonial18-text30 thq-body-small">
                          John Doe
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.author1Position ?? (
                      <Fragment>
                        <span className="testimonial18-text25 thq-body-small">
                          CEO, Company ABC
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column2 thq-card">
              <div className="testimonial18-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review2 ?? (
                  <Fragment>
                    <span className="testimonial18-text28 thq-body-small">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar2">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial18-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content2">
                  <span>
                    {props.author2 ?? (
                      <Fragment>
                        <span className="testimonial18-text22 thq-body-small">
                          Jane Smith
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="testimonial18-text24 thq-body-small">
                          Marketing Manager, XYZ Inc.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column3 thq-card">
              <div className="testimonial18-stars3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review3 ?? (
                  <Fragment>
                    <span className="testimonial18-text36 thq-body-small">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar3">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial18-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content3">
                  <span>
                    {props.author3 ?? (
                      <Fragment>
                        <span className="testimonial18-text27 thq-body-small">
                          Alice Johnson
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.author3Position ?? (
                      <Fragment>
                        <span className="testimonial18-text32 thq-body-small">
                          Founder, Startup123
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column4 thq-card">
              <div className="testimonial18-stars4">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review4 ?? (
                  <Fragment>
                    <span className="testimonial18-text26 thq-body-small">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="testimonial18-avatar4">
                <img
                  alt={props.author4Alt}
                  src={props.author4Src}
                  className="testimonial18-author41 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial18-avatar-content4">
                  <span>
                    {props.author4 ?? (
                      <Fragment>
                        <span className="testimonial18-text31 thq-body-small">
                          Michael Brown
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span>
                    {props.author4Position ?? (
                      <Fragment>
                        <span className="testimonial18-text34 thq-body-small">
                          CTO, Tech Solutions Ltd.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial18.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1616570993271-d9d56f8933a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzY2MDQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2: undefined,
  content1: undefined,
  author4Alt: 'Impressed Partner',
  author2Position: undefined,
  author1Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1508440767412-59ce0b206bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzY2MDQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  author2Alt: 'Satisfied Client',
  author3: undefined,
  review2: undefined,
  review1: undefined,
  author1Name: undefined,
  author4: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1527819620507-e25c505e3ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzY2MDQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  action2: undefined,
  author3Alt: 'Delighted User',
  author4Position: undefined,
  heading1: undefined,
  author1Alt: 'Happy Customer',
  review3: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1504834636679-cd3acd047c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzY2MDQ0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
}

Testimonial18.propTypes = {
  author3Src: PropTypes.string,
  author2: PropTypes.element,
  content1: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  review4: PropTypes.element,
  author2Alt: PropTypes.string,
  author3: PropTypes.element,
  review2: PropTypes.element,
  review1: PropTypes.element,
  author1Name: PropTypes.element,
  author4: PropTypes.element,
  author1Src: PropTypes.string,
  author3Position: PropTypes.element,
  action2: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Position: PropTypes.element,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  review3: PropTypes.element,
  author2Src: PropTypes.string,
  action1: PropTypes.element,
}

export default Testimonial18
