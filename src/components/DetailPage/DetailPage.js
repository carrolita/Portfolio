import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './DetailPage.scss';


class DetailPage extends Component {

  render() {
    const {
      image,
      link,
      description,
      longDescription = description,
      title = 'Empty Title',
      liveLink,
      githubLink,
      code = [],
      toolBox = [],
      more = []
    } = this.props.data;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to={'/'}><i className="fas fa-chevron-left" /> Back</Link>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col image-container">
            <img className="w-100" src={image}/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-8">
            <h1 className="display-4 mt-5 portfolio-heading text-left text-center text-md-left">{title}</h1>
            <p className="text-muted portfolio-text text-center text-md-left">{longDescription}</p>
            {
              liveLink &&
               <a target="_blank" className="btn portfolio-btn" href={liveLink}>See it live</a>
            }
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h1 className="h1 mt-5 portfolio-heading text-left text-center text-md-left">Tech Specs</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 flex-column d-flex">
            <h6 className="text-muted portfolio-heading">Code</h6>
            {
              code.map(item => <span className="text-muted portfolio-text">{item}</span>)
            }
          </div>
          <div className="col-sm-12 col-md-4 flex-column d-flex">
            <h6 className="text-muted portfolio-heading">Toolbox</h6>
            {
              toolBox.map(item => <span className="text-muted portfolio-text">{item}</span>)
            }

          </div>
          <div className="col-sm-12 col-md-4 flex-column d-flex">
            <h6 className="text-muted portfolio-heading">More</h6>
            {
              more.map(item => <span className="text-muted portfolio-text">{item}</span>)
            }
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 d-flex justify-content-center">
            <a target="_blank" className="btn portfolio-btn" href={githubLink}>View the code</a>
          </div>
        </div>
      </div>
    );
  }

}

export default DetailPage;
