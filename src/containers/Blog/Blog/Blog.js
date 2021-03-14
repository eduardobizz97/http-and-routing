import React, { Component } from "react";
import { Route, NavLink, withRouter, Switch, Redirect} from "react-router-dom";

import "./Blog.css";

import asyncComponent from '../../../hoc/asyncComponent';
import Posts from "./Posts/Posts";

const AsyncNewPost = asyncComponent(()=>{
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    console.log(this.props);
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="my-active">
                  Posts
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
        <Switch>
          {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={()=><h1>Not found</h1>}/>
          {/* <Redirect from="/" to="/posts"/> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>

        {/* <Route path="/new-post" exact render={()=> <NewPost/>} /> */}
      </div>
    );
  }
}

export default withRouter(Blog);
