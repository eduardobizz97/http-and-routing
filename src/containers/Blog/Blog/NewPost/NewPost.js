import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    dataLoaded: "",
    submitted: false,
  };

  componentDidUpdate() {
    //if user auth => this.props.history.replace('/posts');
  }

  postDataHandler = () => {
    this.setState({ dataLoaded: "Loading..." });
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", post).then((response) => {
      if (response.status === 201) {
        this.setState({
          dataLoaded: "Data was sent",
          
        });

        setTimeout(() => {
          this.props.history.replace('/posts')
        }, 1000);
      }
    });
  };

  render() {
    let dataInfo;
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    if (this.state.dataLoaded) {
      dataInfo = <p style={{ fontSize: 30 }}>{this.state.dataLoaded}</p>;
    }

    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
        {dataInfo}
      </div>
    );
  }
}

export default NewPost;
