import React, { Component } from "react";
import "./header.css";
import { withRouter } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: ["SOE Files", "Teams", "APIs"],
      clicked: "SOE Files"
    };
    this.switchTab = this.switchTab.bind(this);
  }
  switchTab = each => {
    this.setState({
      clicked: each
    });
    switch (each) {
      case "SOE Files":
        this.props.history.push("/soefiles");
        break;
      case "Teams":
        this.props.history.push("/teams");
        break;
      case "APIs":
        this.props.history.push("/apis");
        break;

      default:
        break;
    }
  };

  render() {
    console.log(this.state.clicked);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            companyname
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.state.nav
                ? this.state.nav.map(each => {
                    return (
                      <li
                        className="nav-item"
                        onClick={() => {
                          this.switchTab(each);
                        }}
                      >
                        <a
                          className={`nav-link ${
                            this.state.clicked == each ? "active" : null
                          }`}
                          aria-current="page"
                          // href="#"
                        >
                          {each}
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
            <form className="d-flex">
              <span>WKND</span>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
