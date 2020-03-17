import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-center text-danger mt-5">HomePage</h1>
        <h3 className="text-center text-primary">
          Books are important to gain knowledge. In this website there are some
          books which increases technical knowledge. Hope you gain your
          knowledge by refering these books.
        </h3>
      </div>
    );
  }
}

export default Home;
