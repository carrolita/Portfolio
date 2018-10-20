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
              <a className="text-muted portfolio-text" href="mailto:granlundcaroline@gmail.com">granlundcaroline@gmail.com</a>
              <br/>
              <a className="text-muted portfolio-text" href="tel:+46738350555">+4673-835 05 55</a>
            </small></p>
          </div>
          <div className="col-md-9 col-sm-12">
            <h5 className="text-muted portfolio-text">Caroline Granlund</h5>
            <h1 className="display-4 portfolio-heading">Fronted Developer</h1>
            <p className="text-muted portfolio-text">Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde, till skillnad från "Text här, Text här", och ger intryck av att vara läsbar text.</p>
            <div>
              <a target="_blank" className="btn portfolio-btn" href="https://github.com/carrolita">See my Github</a>
            </div>
          </div>
        </div>


        <h1 className="mt-5 portfolio-heading">Tech</h1>
        <div className="row justify-content-center">
          <div className="col">
            <h4 className="text-muted portfolio-text">480 coding hours • 50+ individual tasks • HTML5, CSS, SASS, Flexbox, Javascript, ES6, JSX, React • 6 Sprints with demos together with companies like Volumental, Boniers and Comprend</h4>
          </div>
        </div>

        <div className="row mt-5">
          {
            assignments.map(item =>
              <div className="col-md-4 col-sm-12 mt-3">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text"><small className="text-muted portfolio-text">{item.description}</small></p>
                  </div>
                  <img className="card-img-bottom" src={item.image} alt={item.description} />
                </div>
              </div>
            )
          }
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted portfolio-heading">Code</h6>
            <p className="text-muted portfolio-text">
              HTML5<br/>
              CSS3<br/>
              JavaScript ES6<br/>
              React<br/>
              Github<br/>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted portfolio-heading">Toolbox</h6>
            <p className="text-muted portfolio-text">
              Atom<br/>
              Postman<br/>
              Slack<br/>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted portfolio-heading">More</h6>
            <p className="text-muted portfolio-text">
              Agile methodology<br/>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <h6 className="text-muted portfolio-heading">Upcoming</h6>
            <p className="text-muted portfolio-text">
              Redux<br/>
            </p>
          </div>
        </div>

        <h1 className="mt-5 portfolio-heading">Studies</h1>
        <div className="row justify-content-center">
          <div className="col">
            <h4 className="text-muted portfolio-heading">Frontend Developer</h4>
              <p className="text-muted portfolio-text">Full time 12 week bootcamp</p>
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
