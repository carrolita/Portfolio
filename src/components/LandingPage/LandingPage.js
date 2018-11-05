import React, {Component} from "react";
import "./LandingPage.css";
import assignments from '../../assignments.json';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-12 profile-image-container order-2 order-sm-2 order-md-0">
            <img className="rounded img-fluid" src="images/carrolita-small.jpg" alt="Caroline Granlund"/>
            <p><small>
              <a className="text-muted portfolio-text" href="mailto:granlundcaroline@gmail.com">granlundcaroline@gmail.com</a>
              <br/>
              <a className="text-muted portfolio-text" href="tel:+46738350555">+4673-835 05 55</a>
            </small></p>
          </div>
          <div className="col-md-9 col-sm-12">
            <h5 className="text-muted portfolio-text">Caroline Granlund</h5>
            <h1 className="display-4 portfolio-heading">Frontend Developer</h1>
            <p className="text-muted portfolio-text">Hi,<br/>
              My name is Caroline and I have been working as a
              Pre-school teacher for many years. Over the years
              I got interested in programming because I got inspired
              from my family members who works with programming. I started
              to play Code Combat and later I started to write some
              lines of code.
             </p>
             <p className="text-muted portfolio-text">
                Everything started with HTML and CSS. Adding
                text and colors was like magic for me. Anyways,
                I got challenged to try it, and I did. During
                the bootcamp I really grew to like it! With programming you can
                learn new stuff all the time and it’s really really fun!
                From pre-school teacher to frontend developer, crazy huh?
                I also have a lot of experience of working in groups with
                differente kinds of people and in both stressful and calm situations.
                Try me!
             </p>
            <div>
              <a target="_blank" className="btn portfolio-btn" href="https://github.com/carrolita">See my Github</a>
            </div>
          </div>
        </div>


        <h1 className="mt-5 portfolio-heading">Tech</h1>
        <div className="row justify-content-center">
          <div className="col">
            <h4 className="text-muted portfolio-text">480 coding hours • 50+ individual tasks • HTML5, CSS, SASS, Flexbox, Javascript, ES6, JSX, React • 6 Sprints with demos together with companies like Volumental, Bonniers and Comprend</h4>
          </div>
        </div>

        <div className="row mt-5">
          {
            assignments.map(item =>
              <div className="col-md-4 col-sm-12 mt-3 assignments-col">
                <div className="card assignments-card">
                  <div className="card-body">
                    <p className="card-text"><small className="text-muted portfolio-text">{item.description}</small></p>
                  </div>
                  <img className="card-img-bottom img-fluid" src={item.image} alt={item.description} />
                </div>
              </div>
            )
          }
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 mt-3 text-center text-md-left">
            <h6 className="text-muted portfolio-heading">Code</h6>
            <p className="text-muted portfolio-text">
              HTML5<br/>
              CSS3<br/>
              JavaScript ES6<br/>
              React<br/>
              Github<br/>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 text-center text-md-left">
            <h6 className="text-muted portfolio-heading">Toolbox</h6>
            <p className="text-muted portfolio-text">
              Atom<br/>
              Postman<br/>
              Slack<br/>
              Bootstrap
            </p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 text-center text-md-left">
            <h6 className="text-muted portfolio-heading">More</h6>
            <p className="text-muted portfolio-text">
              Agile methodology<br/>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 text-center text-md-left">
            <h6 className="text-muted portfolio-heading">Upcoming</h6>
            <p className="text-muted portfolio-text">
              Redux<br/>
            </p>
          </div>
        </div>

        <h1 className="mt-5 portfolio-heading text-left">Studies</h1>
        <div className="row justify-content-left mt-3">
          <div className="col-4">
            <h4 className="text-muted portfolio-heading">Frontend Developer</h4>
              <p className="text-muted portfolio-text text-center text-md-left">Full time 12 week bootcamp / <br />
                intenstiv program. Covering
                everything from basic of
                programming to how to
                structure and build bigger web
                projects. Focuse on JavaScript.
                Total 480 coding hours, 50 +
                individual tasks (in HTML, CSS,
                JavaScript, JSX, Node.js)
                and 6 sprints with companies like
                Svenska spel and Fyndiq
                Sthlm Sep-Nov 2018</p>
          </div>
          <div className="col-4">
            <h4 className="text-muted portfolio-heading">Banyan Center</h4>
              <p className="text-muted portfolio-text text-center text-md-left">2 years austism work/ educaction <br />
                BanyanCenter is a psychologist's reception for small children with autism spectrum diagnosis. BanyanCenter works with early intensive behavioral interventions (eibi) for children with autism. I worked with children with autism for 2 years.
                Sthlm 2014-2016</p>
          </div>
          <div className="col-4">
            <h4 className="text-muted portfolio-heading">Vackstanas gymnasiet</h4>
              <p className="text-muted portfolio-text text-center text-md-left">3 years at (gymnasiet) <br />
                 I learned Textile Shape and Design. We created our own clothes collection
                 and had fashion shows.
                  Sthlm, 2008-2011.</p>

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
