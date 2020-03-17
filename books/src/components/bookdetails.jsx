import React, { Component } from "react";
class BookDetails extends Component {
  state = {};
  handleBack = () => {
    //this.props.history.push("/movies");
    this.props.history.replace("/books");
  };
  render() {
    return (
      <div>
        <h1 className="text-center text-primary">Book Details</h1>
        <h4 className="text-center text-primary">
          Selected Book #{this.props.match.params.id}
        </h4>
        <h3 className="text-center text-primary">
          {this.props.location.state.book.title}
        </h3>
        <button className="btn btn-primary" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default BookDetails;
