import React from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { changeAddress } from "../action"

class Home  extends React.Component {
    render() {
        return (
            <div className="container m-5">
                <div className="row mb-4">
                    <div className="col">
                    <button onClick={()=>{this.props.changeAddress("addComment")}} type="button" className="btn btn-primary">Add Comment</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeAddress: changeAddress}, dispatch)
}

function mapStateToProps(){
    return {
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps )(Home);