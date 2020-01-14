import React, { Component } from 'react';
import {connect} from "react-redux";
import RecCard from '../RecCard.js';
import Reviewed from '../Reviewed.js';
import styled from 'styled-components';
import {updateUser} from '../../actions/actions';

import StrainButton from "./StrainButton";


const S = {};

S.Container = styled.div`
    width: calc(100vw - (100vw - 100%));
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 80px;
    font-family: 'Lora', serif;
    box-sizing: border-box;
`

S.Logo = styled.h1`
    align-self: flex-start;
    // border: solid red 2px;
    font-size: 48px;
    box-sizing: border-box;
    margin: 0px;
    // margin-right: 200px;
    margin-top: 20px;
    line-height: 84%;
    width: 240px;
    height: 90px;

`

S.LeftAndRight = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    // border: solid grey 2px;
    // height: calc(100vh - 90px);
`

S.Left = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding: 0px 2vw;
    // border: solid yellow 1px;
    height: 100%;
    // background-color: purple;
    // display: none;
    // border: solid black 2px;
    display: flex;
    flex-direction: column;
    align-items: center;


`

S.Selector = styled.div`
    box-sizing: border-box;
    display: flex;
    border: solid white 1px;
    width: 100%;
    height: 11vh;
    align-items: center;
    justify-content: center;
    

    h3 {
        margin-right: 5%;
        font-size: 22px;
    }

    select {
        width: 249px;
        height: 46px;
        font-family: 'Lora', serif;
        background-color: transparent;
        border: solid black 1px;
        font-size: 18px;

    }


`

S.Grid = styled.ol`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2vw;
    // border: solid black 1px;
    padding: 0px;
    justify-items: center;
    align-items: center;
    width: calc(13vw * 3);
    height: calc(13vw * 2);
    margin: 0px;

`

S.Links = styled.section`
    box-sizing: border-box;

`

S.Right = styled.div`
    box-sizing: border-box;
    height: 100%;
    // background-color: red;
    width: 50%;
    align-self: flex-end;
    padding: 0px 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        align-self: flex-end;
        color: white;
        background-color: black;
        border: none;
        font-size: 24px;
        width: 227px;
        height: 58px;
        font-family: 'Lora', serif;
        align-self: flex-start;
        margin-top: 30px;
        margin-bottom: 30px;

    }


`

S.Image = styled.div`

    height: calc(13vw * 2);
    margin-top: 11vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: solid black 1px;
    width: 100%;


    
    img {
        box-sizing: border-box;
        max-width: 100%;
        max-height: 100%;
        border: solid black 10px;
        object-fit: fill;
    }

`

S.Body = styled.div`
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100px;

        h2 {
            font-size: 48px;
        }
        h4 {
            font-size: 24px;
            color: #11361B;
        }
        body {
            font-size: 24px;
        }
    }

`

class Dashboard extends Component {
    state = {
        dispStrain:{
            name: "",
            type: "",
            description: ""
        },
        iterator: 1,
    }

    componentDidMount(){
        console.log("CDU")
        this.setState({
            dispStrain: this.props.recommendations[0]
        })
    }


    logOut = e => {
        e.preventDefault()
        localStorage.clear();
        window.location.reload();
    }

    changeDispStrain = (strain, iterator) => {
        console.log("changeDispStrain trigger", strain)
        this.setState({
            ...this.state,
            dispStrain: strain,
            iterator: iterator + 1
        })
    }

    changeRecommendation = (e) => {
        let desiredEffect = e.target.value;
        let user = this.props.user
        console.log("Change recommendation trigger, desiredEffect: ", desiredEffect)
        this.props.updateUser(user, desiredEffect)
    }



    render(){
        console.log(this.state.dispStrain.name)
        let iterator = 0;
        let arrayOfSix = [1, 2, 3, 4, 5, 6]

        return (
            <S.Container>
                <S.Logo>MED CABINET</S.Logo>
                <S.LeftAndRight>
                    <S.Left>
                        <S.Selector>
                            {/* header */}
                            <h3 onClick = {() => this.changeDispStrain()}>Best strains for</h3>
                            <select 
                                onChange = {this.changeRecommendation}
                                name = "effects"
                            >
                                <option value = "happy">happy</option>
                                <option value = "euphoric">euphoric</option>
                                <option value = "relaxed">relaxed</option>
                                <option value = "giggly">giggly</option>
                                <option value = "creative">creative</option>
                                <option value = "uplifted">uplifted</option>
                                <option value = "sleepy">sleepy</option>
                                <option value = "energetic">energetic</option>
                                <option value = "aroused">aroused</option>
                                <option value = "focused">focused</option>
                                <option value = "talkative">talkative</option>
                                <option value = "hungry">hungry</option>
                                <option value = "tingly">tingly</option>

                                <option value = "stress">stress</option>
                                <option value = "pain">pain</option>
                                <option value = "nausea">nausea</option>
                                <option value = "insomnia">insomnia</option>
                                <option value = "depression">depression</option>
                                <option value = "lackOfAppetite">lackOfAppetite</option>
                                <option value = "muscleSpasms">muscleSpasms</option>
                                <option value = "seizures">seizures</option>
                                <option value = "fatigue">fatigue</option>
                                <option value = "inflammation">inflammation</option>
                                <option value = "spasticity">spasticity</option>
                                <option value = "eyePressure">eyePressure</option>
                                <option value = "cramps">cramps</option>
                                <option value = "headaches">headaches</option>
                                <option value = "dryMouth">dryMouth</option>
                                <option value = "dizzy">dizzy</option>
                                <option value = "anxious">anxious</option>
                                <option value = "paranoid">paranoid</option>
                                <option value = "headache">headache</option>
                            </select>
                        </S.Selector>
                        <S.Grid>
                            {/* map */}  
                            {/* {arrayOfSix.map((recommendation) => {
                                    iterator++
                                    return(
                                        <StrainButton iterator = {recommendation} recommendation = {recommendation}/>
                                    )
                                })
                            } */}
                            {this.props.recommendations.map((recommendation, i) => {
                                    iterator++
                                    return(
                                        <StrainButton onClick = {() => this.changeDispStrain(recommendation, i)} iterator = {iterator} recommendation = {recommendation}/>
                                    )
                                })
                            }
                        </S.Grid>
                        <S.Links>
                            {/* recommendations */}
                            {/* saved strains */}
                        </S.Links>
                    </S.Left>

                    <S.Right>
                        <S.Image>
                            <img src = {this.state.dispStrain.imgUrl} />
                        </S.Image>
                        <S.Body>
                            <div>
                                <h2>{this.state.iterator}: {this.state.dispStrain.name.toUpperCase()}</h2>
                                <h4>{this.state.dispStrain.type.toUpperCase()}</h4>
                            </div>
                            <body>{this.state.dispStrain.description}</body>
                        </S.Body>
                        <button>SAVE</button>
                        

                    </S.Right>
                </S.LeftAndRight>

            </S.Container>
        )
    }
}

  

function mapStateToProps(state){
    return {
        user: state.user,
        recommendations: state.recommendations
    }
}     

export default connect(mapStateToProps, {updateUser})(Dashboard);

// let iterator = 0;
        // {   
        //     this.props.recommendations.map((recommendation) => {
        //         iterator++
        //         return(
        //             <RecButton onClick = {() => this.changeDispStrain(recommendation)}>
        //                 <div>{iterator}</div>
        //             </RecButton>
        //         )
        //     })
        // }


