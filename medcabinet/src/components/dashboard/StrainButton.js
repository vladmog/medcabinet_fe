import React, {Component} from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.li`
    height: 100%;
    width: 100%;
    color: white;
    background-color: #0A2D04;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4% 4%;
    box-sizing: border-box;

    h4 {
        align-self: flex-start;
        margin: 0px;
        width: 50%;
        font-size: 18px;
    }

    span {
        align-self: flex-end;
        font-size: 48px;
        line-height: 80%;
    }
`

class StrainButton extends Component {
    state = {

    }

    render(){
        console.log("REC: ", this.props.recommendation)
        return (
            <S.Container onClick = {this.props.onClick}>
                {/* <h4>AK47</h4>
                <span>{this.props.iterator}</span> */}

                <h4>{this.props.recommendation.name}</h4>
                <span>{this.props.iterator}</span>
            </S.Container>
        )
    }
}

export default StrainButton;