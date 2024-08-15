import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Hero9 from '../components/hero9'
import CTA26 from '../components/cta26'
import './presale.css'

const Presale = (props) => {
  return (
    <div className="presale-container1">
      <Helmet>
        <title>Presale - Presentation Page</title>
        <meta property="og:title" content="Presale - Presentation Page" />
      </Helmet>
      <div className="presale-navbar">
        <div className="presale-container2">
          <div className="presale-logo">
            <Link to="/" className="presale-navlink1">
              <h1 className="presale-heading">Cubes</h1>
            </Link>
          </div>
        </div>
        <div className="presale-cta-container">
          <div data-role="BurgerMenu" className="presale-burger-menu">
            <svg viewBox="0 0 1024 1024" className="presale-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
        <div data-role="MobileMenu" className="presale-mobile-menu">
          <div className="presale-top">
            <img
              alt="image"
              src="/default-img.svg"
              className="presale-image1"
            />
            <div data-role="CloseMobileMenu" className="presale-container3">
              <svg viewBox="0 0 1024 1024" className="presale-icon12">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="presale-mid">
            <div className="presale-links-container">
              <a href="#features" className="presale-link10 Anchor">
                features
              </a>
              <a href="#services" className="presale-link11 Anchor">
                services
              </a>
              <a href="#about-us" className="presale-link12 Anchor">
                About Us
              </a>
              <a href="#contact" className="presale-link13 Anchor">
                contact
              </a>
            </div>
            <button className="presale-cta-btn Anchor button">
              sTART BUILDING
            </button>
          </div>
          <div className="presale-bot">
            <div className="presale-social-links-container1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="presale-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="presale-icon16"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="presale-icon18"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Hero9
        heading1={
          <Fragment>
            <h1 className="presale-text10 thq-heading-1">
              Our journey starts here!
            </h1>
          </Fragment>
        }
      ></Hero9>
      <div className="presale-container4">
        <div className="presale-container5">
          <Script
            html={`<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0xE9BE839f344DE462d926d39205E6146c3320eEEf&chain=%7B%22name%22%3A%22Meter+Mainnet%22%2C%22chain%22%3A%22METER%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F82.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Meter%22%2C%22symbol%22%3A%22MTR%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22Meter%22%2C%22chainId%22%3A82%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22meter%22%7D&clientId=50cf68934011061c9d7e570da2886adb&theme=light&primaryColor=purple"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
></iframe>`}
          ></Script>
        </div>
      </div>
      <CTA26
        content1={
          <Fragment>
            <p className="presale-text11 thq-body-large">
              <span>
                The funds raised during the presale will be used to add
                liquidity to the PopSwap DEX, ensuring a stable trading
                environment for $CUBE tokens.
              </span>
              <br></br>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="presale-text14 thq-heading-2">
              <span>How will the funds from the presale be used?</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="cta26-root-class-name"
      ></CTA26>
      <CTA26
        content1={
          <Fragment>
            <p className="presale-text17 thq-body-large">
              <span>
                The funds raised during the presale will be used to add
                liquidity to the PopSwap DEX, ensuring a stable trading
                environment for $CUBE tokens.
              </span>
              <br></br>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="presale-text20 thq-heading-2">
              <span>What is the default price and purchase limit?</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="cta26-root-class-name1"
      ></CTA26>
      <div className="presale-content-container">
        <div className="presale-container6">
          <img
            alt="image"
            src="/cubeswap-200h.png"
            className="presale-image2"
          />
          <h2 className="presale-text23 Section-Heading">Cubes</h2>
        </div>
        <div className="presale-locations-container">
          <div className="presale-location-1">
            <div className="presale-adress1">
              <Link to="/presale" className="presale-navlink2">
                Presale Active
              </Link>
            </div>
            <div className="presale-email1">
              <span>CubeSwap Soon</span>
            </div>
            <span>CubeMart Soon</span>
          </div>
          <div className="presale-location-21">
            <div className="presale-adress2">
              <a
                href="https://scan.meter.io/address/0xE9BE839f344DE462d926d39205E6146c3320eEEf"
                target="_blank"
                rel="noreferrer noopener"
                className="presale-link14 Section-Text"
              >
                Explorer
              </a>
            </div>
            <div className="presale-email2">
              <a
                href="https://meter.io/get-coins"
                target="_blank"
                rel="noreferrer noopener"
                className="presale-link15 Section-Text"
              >
                Buy MTR &amp; MTRG
              </a>
            </div>
            <div className="presale-phone1">
              <a
                href="https://meter.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="presale-link16 Section-Text"
              >
                Meter.io
              </a>
            </div>
          </div>
          <div className="presale-location-22">
            <div className="presale-adress3">
              <a
                href="https://t.me/CubesMeter"
                target="_blank"
                rel="noreferrer noopener"
                className="presale-link17 Section-Text"
              >
                Telegram
              </a>
            </div>
            <div className="presale-email3">
              <a
                href="https://x.com/CubesMeter"
                target="_blank"
                rel="noreferrer noopener"
                className="presale-link18 Section-Text"
              >
                Twitter
              </a>
            </div>
            <div className="presale-phone2">
              <span className="Section-Text">Medium</span>
            </div>
          </div>
        </div>
        <div className="presale-social-links-container2">
          <a
            href="https://x.com/CubesMeter"
            target="_blank"
            rel="noreferrer noopener"
            className="presale-link19"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="presale-icon20"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://t.me/CubesMeter"
            target="_blank"
            rel="noreferrer noopener"
            className="presale-link20"
          >
            <svg viewBox="0 0 1024 1024" className="presale-icon22">
              <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Presale
