import React, { Component } from "react";
//import axios from "axios";
import PostTable from "./posts-table";
import _ from "lodash";
//import Pagination from "./pagination";
import { Link } from "react-router-dom";
import http from "../services/httpservice";
import { toast } from "react-toastify";
import Spinner from "./spinner";
import Pagination from "react-js-pagination";

const baseUrl = "http://jsonplaceholder.typicode.com";

class Posts extends Component {
  constructor() {
    super();
    console.log("inside constructor");
  }

  state = {
    posts: [],
    loading: true,
    pageSize: 10,
    activePage: 1,
    post: {
      id: "",
      title: "",
      body: ""
    }
  };

  handlePageSelect = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  paginate = (items, activePage, pageSize) => {
    const startIndex = (activePage - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  /*component lifecycle methods
    constructor()-instance clientInformation
    render()
    componentDidMount-component loading
    componentDidUpdate-updating component
    componnetWillUnmount-component close*/

  componentWillUnmount() {
    console.log("inside componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("inside componentDidUpdate");
  }

  async componentDidMount() {
    console.log("inside componentDidMount");
    const promise = await http.get(baseUrl + "/posts");
    console.log(promise);
    this.setState({ posts: promise.data, loading: false });
  }

  addPost = async () => {
    console.log("inside addpost");
    //const obj = { title: "New Title", body: "sdsffff" };
    // const response = await http.post(baseUrl + "/posts", obj);
    const response = await http.post(baseUrl + "/posts", this.state.post);
    console.log(response);
    const posts = [this.state.post, ...this.state.posts];
    this.setState({ posts });
    //this.setState({ posts: {} });
  };

  deletePost = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    console.log(posts);
    // http.delete(baseUrl + "/posts/" + post.id);
    try {
      await http.delete(baseUrl + "/posts/" + post.id);
    } catch (err) {
      console.log("Error:", err);
      if (err.response && err.response.status === 404) {
        alert("post has been deleted");
      } else {
        //alert("Failed to delete due to Network issue");
        this.setState({ posts: originalPosts });
      }
    }

    //this.setState({ posts: originalPosts });
  };

  getInfo = async id => {
    // const post = this.state.posts.filter(post => post.id == id);
    // this.setState({ post: post[0] });
    //console.log(post);
    const response = await http.get(baseUrl + "/posts/" + id);
    this.setState({ post: response.data });
  };

  updateInfo = event => {
    const pos = this.state.post;
    const posts = this.state.posts;
    const indx = this.state.posts.indexOf(pos);
    posts[indx] = pos;
    this.setState({ posts });
    console.log(indx);
  };

  updatePost = async post => {
    //post.title = "New Title";
    const response = http.put(baseUrl + "/posts/" + post.id, post);
    //await axios.patch(baseUrl + "posts/" + post.id, {title: "New Title"});
    console.log(response);
    const indx = this.state.posts.indexOf(post);
    const posts = this.state.posts;
    posts[indx] = (await response).data;
    this.setState({ posts });
    console.log(posts);
  };

  handleInputField = event => {
    console.log("Inside handleInputField");
    const post = this.state.post;
    const { name, value } = event.currentTarget;
    post[name] = value;
    console.log("post", post);
    this.setState({ post });
  };

  render() {
    console.log("inside render");
    const paginatedPosts = this.paginate(
      this.state.posts,
      this.state.activePage,
      this.state.pageSize
    );
    return (
      <div>
        {this.state.loading && <Spinner />}
        <PostTable
          pposts={paginatedPosts}
          posts={this.state.posts}
          addPost={this.addPost}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
          getInfo={this.getInfo}
          post={this.state.post}
          handleInputField={this.handleInputField}
          updateInfo={this.updateInfo}
        />

        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageSelect.bind(this)}
        />
      </div>
    );
  }
}

export default Posts;
