import React, {Component} from "react";
import "./LandingPage.css";
import assignments from '../../assignments.json';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-12 profile-image-container order-md-0 order-sm-2">
            <img className="rounded img-fluid" src="images/carrolita-small.jpg" alt="Caroline Granlund"/>
            <p><small>
              <a className="text-muted" href="mailto:granlundcaroline@gmail.com">granlundcaroline@gmail.com</a>
              <br/>
              <a className="text-muted" href="tel:+46738350555">+4673-835 05 55</a>
            </small></p>
          </div>
          <div className="col-md-9 col-sm-12">
            <h5 className="text-muted">Caroline Granlund</h5>
            <h1 className="display-4">Fronted Developer</h1>
            <p className="text-muted">Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde, till skillnad från "Text här, Text här", och ger intryck av att vara läsbar text.</p>
            <div>
              <a target="_blank" className="btn portfolio-btn" href="https://github.com/carrolita">See my Github</a>
            </div>
          </div>
        </div>


        <h1 className="mt-5">Tech</h1>
        <div className="row justify-content-center">
          <div className="col">
            content goes here...
          </div>
        </div>

        <div className="row mt-5">
          {
            assignments.map(item =>
              <div className="col-md-4 col-sm-12 mt-3">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text"><small className="text-muted">{item.description}</small></p>
                  </div>
                  <img className="card-img-bottom" src={item.image} alt={item.description} />
                </div>
              </div>
            )
          }
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted">Code</h6>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted">Toolbox</h6>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted">More</h6>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted">Upcoming</h6>
          </div>
        </div>

        <h1 className="mt-5">Studies</h1>
        <div className="row justify-content-center">
          <div className="col">
            <h4 className="text-muted">Frontend Developer</h4>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <a target="_blank" href="https://www.linkedin.com/in/caroline-granlund-17b521162" className="btn portfolio-btn">See My Linkedin</a>
          </div>
        </div>

      </>
    );
  }
}

export default LandingPage;
