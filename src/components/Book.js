import React from "react";
import "./style.css";

const Book = (props) => {
  console.log(props.bookProp);
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={props.bookProp.imageURL} />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{props.bookProp.title}</div>
            <div className="portfolio-caption-subheading text-muted">
            {props.bookProp.author}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
