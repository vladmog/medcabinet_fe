import React, { Component } from 'react';
import {connect} from "react-redux";
import RevCard from './RevCard';

class Reviewed extends Component {
    state = {

    }



    render(){
        return (
            <div>
                <h1>Reviewed</h1>
                {this.props.reviewed.map((review) => {
                    return(
                       <RevCard key = {Math.random()} recommendation = {review} />
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts,
        user_id: state.user_id,
        username: state.username,
        recommendations: state.recommendations,
        reviewed: state.reviewedStrains
    }
}     

export default connect(mapStateToProps, {})(Reviewed);