import React, { Component } from "react";
import AddPostc from "./addpostc";
import Posts from "./posts";
import FormInfoPost from "./forminfopost";
const PostTable = props => {
  //console.log(post);
  return (
    <div>
      {props.posts.length > 0 && (
        <button
          className="btn btn-primary mt-2"
          data-toggle="modal"
          data-target="#example"
        >
          Add Post
        </button>
      )}
      <div
        class="modal fade"
        id="example"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalScrollableTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <AddPostc
                post={props.post}
                handleInputField={props.handleInputField}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                //onClick={props.updateInfo}
                onClick={props.addPost}
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        {props.posts.length > 0 && (
          <thead className="bg-success">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody className="bg-info">
          {props.pposts.map(poste => (
            <tr key={poste.id}>
              <td>{poste.id}</td>
              <td>{poste.title}</td>
              <td>{poste.body}</td>
              <td>
                <button
                  onClick={() => props.getInfo(poste.id)}
                  data-toggle="modal"
                  data-target="#exampleModalScrollable"
                  className="btn btn-primary"
                >
                  Update
                </button>
                <div
                  class="modal fade"
                  id="exampleModalScrollable"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalScrollableTitle"
                        >
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <FormInfoPost
                          post={props.post}
                          handleInputField={props.handleInputField}
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={props.updateInfo}
                          class="btn btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button
                  onClick={() => props.deletePost(poste)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
