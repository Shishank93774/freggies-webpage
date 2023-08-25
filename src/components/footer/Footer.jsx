import React from "react";
import styled from "styled-components";
import "./Footer.css";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Freggies</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a href="#">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="grid-two-column ">
              <p>@{new Date().getFullYear()} Freggies. All Rights Reserved</p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`


  .iSIFGq {
    margin: 0;
  }
  
  
  
  .grid-four-column {
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
  }
  .grid {
    display: grid;
    gap: 7rem;
  }
  .container {
    max-width: 100rem;
    margin: 0 auto;
    padding: 0rem 20rem 0rem 20rem;
    
  }
  footer {
    height:560px;
    padding: 10rem 50rem 50rem 20rem;
    background-color: DarkSlateGrey;
    h3 {
      color: white;
      margin-bottom: 2.4rem;
    }
    p {
       color: white;
    }
    .footer-social--icons {
      display: flex;
      flex-direction: row;
      gap: 2rem;
  
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid white;
  
        .icons {
          color: white;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  
  input, textarea {
    max-width: 30rem;
    color: #212529;
    padding: 1.6rem 2.4rem;
    border: 1px solid rgba(98,84,243,0.5);
    text-transform: uppercase;
    box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
    height:3rem;
  }
  input[type="submit"] {
    max-width: 10rem;
    margin-top: 1.4rem;
    background-color: rgb(98 84 243);
    color: #fff;
    padding: 1.0rem 1.4rem;
    border-style: solid;
    border-width: 0.1rem;
    text-transform: uppercase;
    font-size: 1.0rem;
    cursor: pointer;
    height:3rem;
  }
  .footer-bottom--section {
    
    
    
    hr {
      margin-bottom: 2rem;
      color: red;
      height: 0.1px;
    }
  }
  .grid-two-column {
    grid-template-columns: repeat(2,1fr);
    display: grid;
    gap: 9rem;
    max-width: 120rem;
    margin: 0 auto;
    padding-top:0rem;
    
    padding-left:20rem;
    padding-right:20rem;
    
    
  }  
  
  /* @media (max-width: { */
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
  
      .grid div:last-child {
        justify-self: center;
      }
    }
  
    footer {
      padding: 9rem 0 9rem 0;
    }
  
    .footer-bottom--section {
      padding-top: 5.8rem;
    }
}
`;

export default Footer;
