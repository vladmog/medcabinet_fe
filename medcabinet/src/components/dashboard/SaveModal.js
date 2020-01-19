import React, {Component} from "react";
import styled from "styled-components";

const S = {};

S.Container = styled.div`
    position: absolute;
    // border: solid red 10px;
    box-sizing: border-box;
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: blur(0);
    z-index: 10;
`

S.Message = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: #94A599;
//   background-color: black;
//   color: white;
  min-height: 30vh;
  width: 34%;
  padding: 4% 3% 4%;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lora', serif;
  font-size: 24px;



`

class SaveModal extends Component {
    state = {

    }

    render(){
        return (
            <S.Container>
                <S.Message>
                    {this.props.dispStrain.name} was saved
                </S.Message>
                
            </S.Container>
        )
    }
}

export default SaveModal