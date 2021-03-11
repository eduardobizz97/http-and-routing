import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost"
import "./Blog.css";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="my-active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  activeClassName="my-active"
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
        {/* <Route path="/new-post" exact render={()=> <NewPost/>} /> */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default withRouter(Blog);
