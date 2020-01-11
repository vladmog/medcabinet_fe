import React, { Component } from 'react';
import {connect} from "react-redux";
import { deleteReview } from '../actions/actions';

class RevCard extends Component {
    state = {

    }

    deleteReview = e => {
        this.props.deleteReview(this.props.recommendation.id, this.props.user.id)
    }
    

    render(){
        return (
            <div>
                <h1>RevCard</h1>
                <div>{this.props.recommendation.name}</div>
                <button onClick = {this.deleteReview}>Delete</button>
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

export default connect(mapStateToProps, { deleteReview })(RevCard);