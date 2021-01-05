import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-hd"> Some text here</div>
        <span>add some text here with respect to your company</span>
      </div>
    );
  }
}

export default Footer;
