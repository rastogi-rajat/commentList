import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

import Home from "./components/Home";
import CommentList from "./components/CommentList"
import AddComment from "./components/AddComment";


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {address} = this.props;
    let renderComponent = address ==="addComment" ? <AddComment />: <React.Fragment><Home /><CommentList list={this.props.commentList} /></React.Fragment>;
    return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Post Comments</h1>
          </header>
          {renderComponent}
        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    address: state.addressReducer.address,
    commentList: state.commentReducer.commentList
  }
}

export default connect( mapStateToProps )(App);
