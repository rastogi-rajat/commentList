import React from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { addComment, changeAddress, setError } from "../action"

class AddComment  extends React.Component {
    constructor(){
        super();
        this.state = {
            userName: "",
            title: "",
            comment:""
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.state.userName && this.state.title && this.state.comment) {
            this.props.addComment({
                userName:this.state.userName,
                title:this.state.title,
                comment:this.state.comment
            })
            this.props.changeAddress("home")
            this.props.setError(false)
        } else {
            this.props.setError(true)
        }
    }
    render() {
        let {error} = this.props;
        return (
            <div className="container m-5">
                <div className="row">
                    <div className="col">

                    {error && <div className="alert alert-danger" role="alert">
                        All fields are required.
                    </div>}
                    
                    <form>
                        <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={(event)=>{
                            this.setState({
                                userName: event.target.value.trim()
                            })
                        }} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter user name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={(event)=>{
                            this.setState({
                                title: event.target.value.trim()
                            })
                        }} className="form-control" id="title" placeholder="Enter comment title" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea onChange={(event)=>{
                            this.setState({
                                comment: event.target.value.trim()
                            })
                        }} className="form-control" id="comment" placeholder="Enter comment" />
                        </div>

                        <div className="text-right">
                        <button type="button" onClick={()=>{this.props.changeAddress("home")}} className="btn btn-secondary">Cancel</button>
                        &nbsp;
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addComment: addComment,
        changeAddress: changeAddress,
        setError: setError
    }, dispatch)
}

function mapStateToProps(state){
    return {
        error: state.commentReducer.error
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps )(AddComment);