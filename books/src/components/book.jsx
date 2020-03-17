import React from "react";

const Book = props => {
  return (
    <div>
      <div className="row shadow mb-3 mt-5">
        <div className="col-2 pl-0">
          <img src="https://picsum.photos/75" />
        </div>
        <div className="col">
          <h4 className="text-primary">{props.book.title}</h4>
          PageCount:{props.book.pageCount} | Categories:{props.book.categories}|
          Published Date:{props.book.publishedDate} | Authors:
          {props.book.authors}
        </div>
      </div>
    </div>
  );
};

export default Book;
