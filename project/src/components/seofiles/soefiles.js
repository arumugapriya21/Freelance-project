import React, { Component } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

class Soefiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <div className="content">
          <h1>seofiles</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Soefiles;
