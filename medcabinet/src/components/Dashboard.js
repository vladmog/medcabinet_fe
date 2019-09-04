import React, { Component } from 'react';
import {connect} from "react-redux";
import RecCard from './RecCard.js';
import Reviewed from './Reviewed.js';
import styled from 'styled-components';


const DashContainer = styled.div`
  height: 100vh;
  font-family: 'Merriweather', serif;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
//   border: solid black 1px;
`;

const SideBar = styled.div`
    height: 100vh;
    width: 2%;
    background: rgb(58,30,78);
    background: linear-gradient(0deg, rgba(58,30,78,1) 0%, rgba(2,111,95,1) 100%);    
`

const DashDividerLR = styled.div`
    height: 100%;
    width: 47.5%;
    box-sizing: border-box;
    // border: solid black 1px;
`;

    const DashDividerR = styled(DashDividerLR)`
        display: flex;
        justify-content: center;
        align-items: center;
    `;

// *****************Q U A D R A N T S********************

const DashQuadrant = styled.div`
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    // border: solid black 1px;
`
const QuadrantBL = styled(DashQuadrant)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

    const OneSixthStripe = styled.div`
        height: 16.5%;
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        // border: solid black 1px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0px;
        left: 2%;
    `
        const RecButton = styled.div`
            height: 8.3vw;
            width: 8.3vw;
            // border: solid black 1px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        `
const QuadrantTL = styled(DashQuadrant)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const QuadrantBR = styled(DashQuadrant)`

`


// *****************************************************

const Image = styled.img`
    max-height: 95%;
    max-width: 95%;
    box-shadow: 15px 15px 8px grey;
`
const H1 = styled.h1`
    font-size: 100px;
`


class Dashboard extends Component {
    state = {
        dispStrain:{}
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

    changeDispStrain(strain){
        this.setState({
            ...this.state,
            dispStrain: strain
        })
    }



    render(){
        console.log(this.state.dispStrain.name)
        let iterator = 0;
        return (
            <DashContainer>
                <SideBar />
                {/* L E F T   H A L F  */}
                <DashDividerLR>
                         <H1>{this.state.dispStrain.name}   {this.state.dispStrain.type}</H1>
                         <h3>Description</h3>
                         <span>{this.state.dispStrain.description}</span>
                         <h3>Flavors</h3>
                         <span>{this.state.dispStrain.flavors}</span>
                         <h3>Parents</h3>
                         <span>{this.state.dispStrain.parents}</span>
                         <button onClick = {this.logOut}>Log out</button>
                        <OneSixthStripe>
                            {   
                                this.props.recommendations.map((recommendation) => {
                                    iterator++
                                    return(
                                        <RecButton onClick = {() => this.changeDispStrain(recommendation)}>
                                            <div>{iterator}</div>
                                        </RecButton>
                                    )
                                })
                            }
                        </OneSixthStripe>
                </DashDividerLR> 

                {/*  R I G H T   H A L F  */}
                <DashDividerR>
                   
                     
                         {/* <Image src = "https://singularityhub.com/wp-content/uploads/2019/04/3D-black-box-artificial-intelligence-interviews-shutterstock-489987685-1068x601.jpg"/> */}
                         <Image src = {this.state.dispStrain.imgUrl}/>
                   
                   
                    
                </DashDividerR>

            </DashContainer>
        )
    }
}

                {/* {this.props.recommendations.map((recommendation) => {
                    return(
                       <RecCard key = {Math.random()} recommendation = {recommendation} />
                    )
                })}
                <Reviewed /> */}


function mapStateToProps(state){
    return {
        user: state.user,
        recommendations: state.recommendations
    }
}     

export default connect(mapStateToProps, {})(Dashboard);