import React, { Component } from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import {updateUser, changeDispStrain, saveStrain, modalToggle, deleteStrain} from '../../actions/actions';

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
    filter: blur(${props => props.filter}rem);
    transition-duration: .5s;
    transition-timing-function: linear;
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
    justify-content: flex-start;
    

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

S.SavedHeader = styled(S.Selector)`
    justify-content: flex-start
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
    min-height: calc(13vw * 2);
    margin: 0px;

`

S.Links = styled.section`
    box-sizing: border-box;
    // border: solid black 1px;
    width: 100%;
    font-size: 22px;
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
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
        min-height: 100px;

        h2 {
            font-size: 48px;
        }
        h4 {
            font-size: 24px;
            color: #11361B;
        }
        div {
            font-size: 24px;
        }
    }

`

S.SavedContainer = styled.div`
    height: 11vh;
    margin: 0px;
    display: flex;
    align-items: center;
`

class Dashboard extends Component {
    state = {
        dispStrain:{
            name: "",
            type: "",
            description: ""
        },
        iterator: 1,
        isModalOn: false,
        filter: 0,
        isDisplayingSaved: false
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
        this.props.changeDispStrain(strain, iterator + 1)
    }

    changeRecommendations = (e) => {
        let desiredEffect = e.target.value;
        let user = this.props.user
        console.log("Change recommendation trigger, desiredEffect: ", desiredEffect)
        this.props.updateUser(user, desiredEffect)
    }


    saveStrain = () => {
        this.props.saveStrain(this.props.dispStrain, this.props.user.id)
        this.setState({
            ...this.state,
            filter: .2
        })
        this.props.modalToggle()
        setTimeout(() => {
            this.setState({
                ...this.state,
                filter: 0
            })
            this.props.modalToggle()
        }, 2000)
    }

    toggleSaved = () => {
        console.log("Toggling")
        if (this.state.isDisplayingSaved){
            console.log("Toggling to display recommendation one")
            this.changeDispStrain(this.props.recommendations[0], 0)
        }
        else {
            console.log("Toggling to display saved")
            this.changeDispStrain(this.props.savedStrains[0], 0)
        }
        this.setState({
            ...this.state,
            isDisplayingSaved: !this.state.isDisplayingSaved
        })
    }

    deleteStrain = () => {
        this.props.deleteStrain(this.props.dispStrain.id, this.props.user.id)
        this.changeDispStrain(this.props.savedStrains[0], 0)
    }
    
    



    render(){

        console.log(this.state.isDisplayingSaved)
        let iterator = 0;

        return (
            <S.Container filter = {this.state.filter}>
                <S.Logo onClick = {() => this.props.history.push("/")}>MED CABINET</S.Logo>
                <S.LeftAndRight>
                    <S.Left>
                        {this.state.isDisplayingSaved
                        ?(
                            // S A V E D   S T R A I N S   V I E W 
                            <div>
                                <S.SavedHeader>
                                    <h3>Your saved strains</h3>
                                </S.SavedHeader>
                                <S.Grid>
                                    {this.props.savedStrains.map((savedStrain, i) => {
                                            iterator++
                                            return(
                                                <StrainButton key = {savedStrain.id} onClick = {() => this.changeDispStrain(savedStrain, i)} iterator = {iterator} recommendation = {savedStrain}/>
                                            )
                                        })
                                    }
                                </S.Grid>

                            </div>
                        )
                        :(
                            // R E C O M M E N D A T I O N S   V I E W 
                            <div>
                                <S.Selector>
                                    {/* header */}
                                    <h3>Best strains for</h3>
                                    <select 
                                        onChange = {this.changeRecommendations}
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
                                    {this.props.recommendations.map((recommendation, i) => {
                                            iterator++
                                            return(
                                                <StrainButton key = {recommendation.id} onClick = {() => this.changeDispStrain(recommendation, i)} iterator = {iterator} recommendation = {recommendation}/>
                                            )
                                        })
                                    }
                                </S.Grid>
                            </div>
                        )}
                        <S.Links>
                            {/* recommendations */}
                            <span onClick = {this.state.isDisplayingSaved ? this.toggleSaved : this.toggleSaved
                            }>recommendations</span>
                            {/* saved strains */}
                            <span onClick = {this.state.isDisplayingSaved ? this.toggleSaved : this.toggleSaved
                            }>saved strains</span>
                        </S.Links>
                    </S.Left>

                    <S.Right>
                        {/* D I S P L A Y */}
                        <S.Image>
                            <img src = {this.props.dispStrain.imgUrl} />
                        </S.Image>
                        <S.Body>
                            <div>
                                <h2>{this.props.iterator}: {this.props.dispStrain.name.toUpperCase()}</h2>
                                <h4>{this.props.dispStrain.type.toUpperCase()}</h4>
                            </div>
                            <div>{this.props.dispStrain.description}</div>
                        </S.Body>
                        
                        {this.state.isDisplayingSaved
                            ? <button onClick = {this.deleteStrain}>DELETE</button>
                            : <button onClick = {this.saveStrain}>SAVE</button>
                        }
                        

                    </S.Right>
                </S.LeftAndRight>

            </S.Container>
        )
    }
}

  

function mapStateToProps(state){
    return {
        user: state.user,
        recommendations: state.recommendations,
        dispStrain: state.dispStrain,
        iterator: state.iterator,
        isModalOn: state.isModalOn,
        savedStrains: state.savedStrains
    }
}     

export default connect(mapStateToProps, {updateUser, changeDispStrain, saveStrain, modalToggle, deleteStrain})(Dashboard);

