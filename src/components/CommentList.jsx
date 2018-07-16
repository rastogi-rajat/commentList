import React from "react";

export default class CommentList  extends React.Component {
    renderList = (list) =>{
        if(list && list.length > 0) {
            return list.map((item, index) => {
                return (<div className="row mb-4" key={`${item.userName}-${index}`}>
                <div className="col">
                <div className="card">
                    <h6 className="card-header">{item.userName}</h6>
                    <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.comment}</p>
                    </div>
                </div>
                </div>
            </div>)
            })
        }
        return;
    }
    render() {
        let {list} = this.props;
         
        return (
            <div className="container m-5">
                {this.renderList(list)}
            </div>
        )
    }
}