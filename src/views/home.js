import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner3 from '../components/banner3'
import Features24 from '../components/features24'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Entire Foolhardy Hummingbird</title>
        <meta property="og:title" content="Entire Foolhardy Hummingbird" />
      </Helmet>
      <Banner3
        content1={
          <Fragment>
            <span className="home-text10">
              <span>{/*locale-text_iBrGse*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="banner3root-class-name"
        locale={props?.locale ?? ''}
      ></Banner3>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text11">
              <span>{/*locale-text_pN4Nuz*/}</span>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text12">
              <span>{/*locale-text_5p3Pfh*/}</span>
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text13">
              <span>{/*locale-text_BCFgVl*/}</span>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text14">
              <span>{/*locale-text_hp-0kr*/}</span>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text15">
              <span>{/*locale-text__oawNV*/}</span>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text16">
              <span>{/*locale-text_9_blVz*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Features24>
      <Contact10
        eMAIL="contac@uroboros.ee"
        eMAIL1={
          <Fragment>
            <span className="home-text17">
              <span>{/*locale-text_kNZS7R*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text18">
              <span>{/*locale-text_KrosFC*/}</span>
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text19">
              <span>{/*locale-text_GmaIu5*/}</span>
            </span>
          </Fragment>
        }
        contact10Id="Contact10"
        location1Description={
          <Fragment>
            <span className="home-text20">
              <span>{/*locale-text_L87DmH*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Contact10>
      <Footer4
        link2={
          <Fragment>
            <span className="home-text21">
              <span>{/*locale-text_oGe6uA*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text22">
              <span>{/*locale-text_qRhXSG*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text23">
              <span>{/*locale-text_22MOOM*/}</span>
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text24">
              <span>{/*locale-text_UUVWiD*/}</span>
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text25">
              <span>{/*locale-text_W-smK5*/}</span>
            </span>
          </Fragment>
        }
        locale={props?.locale ?? ''}
      ></Footer4>
    </div>
  )
}

export default Home
