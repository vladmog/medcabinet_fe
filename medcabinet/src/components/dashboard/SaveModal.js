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
`

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: black;
  min-height: 70vh;
  width: 34%;
  padding: 4% 3% 4%;
  box-sizing: border-box;

  div {
    width: 100%;
    // border: solid black 1px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 18px;
      align-self: center;
      margin-top: 14px;
    }
  }

`

class SaveModal extends Component {
    state = {

    }

    render(){
        return (
            <S.Container>
                <S.Form>

                </S.Form>
                
            </S.Container>
        )
    }
}

export default SaveModal