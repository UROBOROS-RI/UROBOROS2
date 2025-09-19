import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div
      id={props.contact10Id}
      className="contact10-container1 thq-section-padding"
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text7">
                    <span>{/*locale-text_Cd2mNA*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact10-container2">
          <div className="contact10-container3">
            <h3 className="contact10-text2 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text4">
                    <span>{/*locale-text_2ZZE4z*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="contact10-text3 thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text5">
                    <span>{/*locale-text_tqKoJh*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container4">
              <img
                alt="Headquarters Image"
                src="/istockphoto-494254150-612x612-400h.jpg"
                className="contact10-image thq-img-ratio-16-9"
              />
              <a
                href="mailto:contac@uroboros.ee?subject="
                className="contact10email"
              >
                {props.eMAIL1 ?? (
                  <Fragment>
                    <span className="contact10-text6">
                      <span>{/*locale-text_H0PJh4*/}</span>
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location1Description: undefined,
  eMAIL1: undefined,
  contact10Id: '',
  heading1: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  eMAIL1: PropTypes.element,
  contact10Id: PropTypes.string,
  heading1: PropTypes.element,
}

export default Contact10
