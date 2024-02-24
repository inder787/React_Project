import React from "react";
import PropTypes from "prop-types";




export default function Navbar(props) {
  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}"
      }
    >
      <div className="container" >
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="Navbar-toggler"
          type="Button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about"> About
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
          

            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          <div className={"form-check form-switch text-${props.mode==='light'?'dark':'light'}"}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />

            <label className="form-check-label" htmlFor="flexCheckDefault">
              Dark Mode
            </label>
          </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
// Navbar.PropTypes = {
//     title: propTypes.string.isRequired,
//     aboutText: propTypes.string
// };

// Navbar.defaultProps = {
//     title: 'Set title here'
//     aboutText: 'About text here'
// };
