import React, { Component } from 'react';
import {connect} from "react-redux";
import {postReview} from '../actions/actions';

class RecCard extends Component {
    state = {

    }

    postReview = e => {
        this.props.postReview(this.props.recommendation, this.props.user.id)
    }
    

    render(){
        return (
            <div>
                <h1>RecCard</h1>
                <div>{this.props.recommendation.name}</div>
                <button onClick = {this.postReview}>Review</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        recommendations: state.recommendations
    }
}     

export default connect(mapStateToProps, {postReview})(RecCard);