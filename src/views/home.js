import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Toast5 from '../components/toast5'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Presentation Page</title>
        <meta property="og:title" content="Presentation Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-container2">
            <div className="home-logo">
              <Link to="/" className="home-navlink10">
                <h1 className="home-heading1">Cubes</h1>
              </Link>
            </div>
          </div>
          <div className="home-links-container1">
            <Link to="/presale" className="home-link10 Anchor">
              Presale
            </Link>
            <a href="#services" className="home-link11 Anchor">
              services
            </a>
            <a href="#about-us" className="home-link12 Anchor">
              About Us
            </a>
            <a
              href="https://t.me/CubesMeter"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              telegram
            </a>
          </div>
          <div className="home-cta-container">
            <Link to="/" className="home-cta-btn1 button">
              CubeSwap Soon
            </Link>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img alt="image" src="/default-img.svg" className="home-image1" />
              <div data-role="CloseMobileMenu" className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container2">
                <Link to="/presale" className="home-link14 Anchor">
                  Presale
                </Link>
                <a href="#services" className="home-link15 Anchor">
                  services
                </a>
                <a href="#about-us" className="home-link16 Anchor">
                  About Us
                </a>
                <a href="#contact" className="home-link17 Anchor">
                  contact
                </a>
              </div>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="home-text10">
        CA:0xE9BE839f344DE462d926d39205E6146c3320eEEf
      </span>
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading2">Cubes on Meter</h1>
          <span className="home-text11">
            Cubes Token ($CUBES) is the native token of CubeSwap, a
            decentralized exchange built on the Meter Blockchain. It powers
            various functions like trading, liquidity provision, and more on the
            platform. CubeSwap leverages Meter&apos;s fast and scalable network
            to offer efficient and low-cost trading within the DeFi ecosystem.
          </span>
          <Link to="/presale" className="home-cta-btn2 button">
            <span>
              <span className="home-text13">$CUBE Presale</span>
              <br></br>
            </span>
          </Link>
        </div>
        <img alt="image" src="/cubeswap-300h.png" className="home-image2" />
      </div>
      <div className="home-section-separator1"></div>
      <Toast5
        bannerTitle={
          <Fragment>
            <h3 className="home-text15 thq-heading-3">Note!</h3>
          </Fragment>
        }
        bannerSubtitle={
          <Fragment>
            <span className="home-text16 thq-body-large">
              <span>
                This webpage is currently under development and will be updated
                regularly. Please refresh the page to see the latest changes as
                you navigate.
              </span>
              <br></br>
              <span> this page is subject to frequent updates.</span>
            </span>
          </Fragment>
        }
        logoSrc="/cubeswap-300h.png"
      ></Toast5>
      <div id="services" className="home-services">
        <div className="home-service-card1">
          <div className="home-card-content1">
            <h3 className="home-text20 BigCard-Heading">CubeSwap</h3>
            <span className="home-text21">
              Trade multiple assets on Meter, and seamlessly use one wallet to
              trade and send to another in a single transaction, along with many
              other features.
            </span>
            <Link to="/" className="home-navlink11 Anchor button">
              Soon
            </Link>
          </div>
        </div>
        <div className="home-service-card2">
          <div className="home-card-content2">
            <h3 className="home-text22 BigCard-Heading">CubeMart</h3>
            <span className="home-text23">
              Buy and sell NFTs on Meter, and enjoy various other features
              within the ecosystem.
            </span>
            <Link to="/" className="home-navlink12 button">
              <span>
                <span className="Anchor">Soon</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
        <div className="home-service-card3">
          <div className="home-card-content3">
            <h3 className="home-text27 BigCard-Heading">$CUBE Presale</h3>
            <span className="home-text28">
              Mint your $CUBE tokens here during our presale Phase.
            </span>
            <Link to="/presale" className="home-navlink13 Anchor button">
              Mint $CUBE
            </Link>
          </div>
        </div>
        <div className="home-service-card4">
          <div className="home-card-content4">
            <h3 className="home-text29 BigCard-Heading">
              Trade $CUBE on CubeSwap
            </h3>
            <span className="home-text30 Card-Text">
              Trade your $CUBE using CubeSwap
            </span>
            <Link to="/" className="home-navlink14 Anchor button">
              Soon
            </Link>
          </div>
        </div>
      </div>
      <div id="about-us" className="home-about-us">
        <div className="home-heading-container">
          <h2 className="home-text31 Section-Heading">
            What&apos;s the story behind Cubes
          </h2>
          <span className="home-secondary-text Section-Text">
            {' '}
            Cubes your Defi gateway on the Meter Blockchain
          </span>
          <Link to="/presale" className="home-cta-btn3 button Anchor">
            $CUBE Presale
          </Link>
        </div>
        <div className="home-text-container">
          <span className="home-text32">
            I&apos;m a 20-year-old developer with a deep passion for creating
            innovative blockchain solutions. This project became a reality
            thanks to the invaluable support from the Meter team, who provided
            us with a grant to begin development. Their assistance has been
            crucial in helping us build a platform that enhances the DeFi
            ecosystem, and we are excited to bring these cutting-edge tools to
            our community.
          </span>
        </div>
        <Link to="/presale" className="home-cta-btn4 button">
          $CUBE Presale
        </Link>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-testimonials">
        <h2 className="home-text33 Section-Heading">And who am i?</h2>
        <div className="home-cards-container">
          <div className="home-testimonial-card">
            <div className="home-container4"></div>
            <div className="home-card-heading">
              <img alt="image" src="/100911-200h.jpg" className="home-image3" />
              <div className="home-name-and-position">
                <div className="home-container5">
                  <span className="Card-Heading">Misael P.</span>
                </div>
                <span className="home-position Card-Text">Owner/CEO</span>
                <a
                  href="https://t.me/CubesDev"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <span className="home-text34">
              I&apos;m a 20-year-old Brazilian developer living in Great
              Britain. My journey in development began in 2018 when I discovered
              Shiba Inu, sparking my dream of building my own project and
              contributing to the blockchain revolution. Since then, I&apos;ve
              dedicated my life to development—it&apos;s all I do every day, and
              I have no plans of stopping anytime soon. My passion drives me to
              keep pushing boundaries and creating innovative solutions in the
              blockchain space.
            </span>
          </div>
        </div>
      </div>
      <div id="contact" className="home-contact">
        <div className="home-content-container">
          <div className="home-container6">
            <Link to="/" className="home-navlink15">
              <img
                alt="image"
                src="/cubeswap-300h.png"
                className="home-image4"
              />
            </Link>
            <Link to="/" className="home-navlink16">
              <h2 className="home-text35 Section-Heading">Cubes</h2>
            </Link>
          </div>
          <div className="home-locations-container">
            <div className="home-location-1">
              <div className="home-adress1">
                <Link to="/presale" className="home-navlink17">
                  Presale Active
                </Link>
              </div>
              <div className="home-email1">
                <Link to="/" className="home-navlink18">
                  CubeSwap Soon
                </Link>
              </div>
              <Link to="/" className="home-navlink19">
                CubeMart Soon
              </Link>
            </div>
            <div className="home-location-21">
              <div className="home-adress2">
                <a
                  href="https://scan.meter.io/address/0xE9BE839f344DE462d926d39205E6146c3320eEEf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19 Section-Text"
                >
                  Explorer
                </a>
              </div>
              <div className="home-email2">
                <a
                  href="https://meter.io/get-coins"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20 Section-Text"
                >
                  Buy MTR &amp; MTRG
                </a>
              </div>
              <div className="home-phone1">
                <a
                  href="https://meter.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21 Section-Text"
                >
                  Meter.io
                </a>
              </div>
            </div>
            <div className="home-location-22">
              <div className="home-adress3">
                <a
                  href="https://t.me/CubesMeter"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link22 Section-Text"
                >
                  Telegram
                </a>
              </div>
              <div className="home-email3">
                <a
                  href="https://x.com/CubesMeter"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link23 Section-Text"
                >
                  Twitter
                </a>
              </div>
              <div className="home-phone2">
                <Link to="/" className="home-navlink20 Section-Text">
                  Docs Soon
                </Link>
              </div>
            </div>
          </div>
          <div className="home-social-links-container2">
            <a
              href="https://x.com/CubesMeter"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link24"
            >
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon22">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://t.me/CubesMeter"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link25"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon24">
                <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
