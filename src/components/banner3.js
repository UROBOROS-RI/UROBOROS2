import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner3-container2"></div>
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container3"></div>
        <h3 className="banner3-heading thq-heading-3">
          {props.content1 ?? (
            <Fragment>
              <span className="banner3-text">
                <span>{/*locale-text_7vI0xz*/}</span>
              </span>
            </Fragment>
          )}
        </h3>
      </div>
      <img
        alt={props.imageAlt5}
        src={props.imageSrc5}
        className="banner3-image"
      />
    </div>
  )
}

Banner3.defaultProps = {
  imageAlt5: 'image',
  content1: undefined,
  rootClassName: '',
  imageSrc5: '/definitiva%20logo%20uro%20(1)-600h.png',
}

Banner3.propTypes = {
  imageAlt5: PropTypes.string,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc5: PropTypes.string,
}

export default Banner3
