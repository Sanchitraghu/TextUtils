import React from "react";
import PropTypes from 'prop-types';

function Nav(props){

 

    return (
        <>
        <nav className={`navbar navbar-${props.modes==="light"? "dark" : "light"} bg-${props.modes==="light"? "dark" : "light"} navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
        
          
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
       
          <div className={`form-check form-switch text-${props.modes==="dark"? "dark" : "light"}`}>
  <input className="form-check-input" onChange = {props.toggleCheck} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">{`Enable ${props.modes} Mode`}</label>
</div>
        </div>
      </div>
    </nav>
       </>
    );
}


// Agr number bhej diya string ki jagah to error milegi console main.
Nav.propTypes = {
  title: PropTypes.string
};

//Agr props nhi mile to by dafault ye value chli jayegi
Nav.defaultProps = {
  title: "Hare krishna"
};

export default Nav;