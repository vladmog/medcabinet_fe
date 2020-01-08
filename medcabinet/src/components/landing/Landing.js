import React from "react";
import styled from "styled-components";
import jars from "../../img/jars.jpg"
import med from "../../img/med.jpg"
import science from "../../img/science.jpg"

const S = {};

S.Container = styled.div`
    // background-color: yellow;
    width: calc(100vw - (100vw - 100%));
    box-sizing: border-box;
    border: solid black 1px;

    
    `
    
S.TopHalf = styled.section`
    width: 100%;
    box-sizing: border-box;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Lora', serif;

`
    
S.Logo = styled.h1`
    // border: solid black 2px;
    width: 420px;
    font-size: 96px;
    box-sizing: border-box;
    margin: 0px;
    // margin-right: 200px;
    line-height: 84%;
`

S.Confirmation = styled.div`
    width: 50%;
    height: 20%;
    // border: solid red 1px;
    display: flex;
    align-items: center;
    font-size: 20px;

    strong {
        width: 170px;
        margin-right: 7%;
    }

    button {
        border: none;
        width: 149px;
        height: 53px;
        background-color: black;
        color: white;
        font-family: 'Lora', serif;
        font-size: 20px;
    }
`

S.BottomHalf = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    // border: solid red 1px;
    min-height: 50vh;

    div {
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // border: solid green 1px;
        height: 100%;
        img {
            width: 80%;
            border: solid black 1px;
        }

        h3 {
            font-size: 20px;
            font-family: 'Lora', serif;
            font-weight: 400;
            width: 80%;
            // margin: 0px;


        }
    }

`


function Landing(){
    return (
        <S.Container>
            <S.TopHalf>
                <S.Logo>
                    MED CABINET
                </S.Logo>
                <S.Confirmation>
                    <strong>
                        To enter, confirm age
                    </strong>
                    <button>
                        I AM 21+
                    </button>
                </S.Confirmation>
            </S.TopHalf>
            <S.BottomHalf>
                <div>
                    <img src = {science} alt = "" />
                    <h3>Comprehensive database of strains and their chemical makeups</h3>
                </div>

                <div>
                    <img src = {med} alt = "" />
                    <h3>Strain recommendations tailored to your goals</h3>
                </div>

                <div>
                    <img src = {jars} alt = "" />
                    <h3>Save strains with your notes attached</h3>
                </div>
            </S.BottomHalf>
            
        </S.Container>
    )
}

export default Landing;