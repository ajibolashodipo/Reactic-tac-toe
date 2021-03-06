import React, { Component } from "react"
import "./Footer.css"
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="">
          <p>
            By Ajibola with <i className="fas fa-heart"></i> & React
          </p>
        </div>
        <div className="social-media">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.twitter.com/sho_rendipity"
            >
              <i className="fab fa-twitter "></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ahmed-ajibola-shodipo/"
            >
              <i className="fab fa-linkedin fa-spin"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ajibolashodipo"
            >
              <i className="fab fa-github "></i>
            </a>
          </li>
        </div>
      </div>
    )
  }
}

export default Footer
