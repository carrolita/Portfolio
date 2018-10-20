import React, {Component} from "react"
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <nav className="footer nav justify-content-center">
        <div className="Footer-text portfolio-text">
          <h6>Caroline Granlund</h6>
          <p><small>
            <a href="mailto:granlundcaroline@gmail.com">granlundcaroline@gmail.com</a>
            <br/>
            <a href="tel:+46738350555">+4673-835 05 55</a>
          </small></p>
        </div>
      </nav>
    );


  }
}

export default Footer
