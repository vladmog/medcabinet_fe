import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    POSTREVIEW_START, POSTREVIEW_SUCCESS, POSTREVIEW_FAILURE,
    DELETEREVIEW_START, DELETEREVIEW_SUCCESS, DELETEREVIEW_FAILURE,    
    UPDATEUSER_START, UPDATEUSER_SUCCESS, UPDATEUSER_FAILURE, 
    CHANGEDISPSTRAIN,
    MODALTOGGLE

} from '../actions/actions';
    

let defaultState = {
    user: {},
    recommendations: [{}],
    savedStrains: [],

    loggingIn: false,
    registering: false,
    registered: false,

    postingReview: false,
    reviewPosted: false,

    dispStrain: {
        name: "",
        type: ""
    },
    iterator: 1,
    isModalOn: false
}


export default function reducer (state = defaultState, action) {
    switch(action.type){
        case LOGIN_START:
           return {
               ...state,
               loggingIn: true

           }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                savedStrains: action.payload.savedStrains,
                recommendations: action.payload.recommendations,
                loggingIn: false,
                loggingInError: "",
                dispStrain: action.payload.recommendations[0],
                iterator: 1
            }           
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingInError: "Login failed",
                loggingIn: false
            }  

    //################################
        case REGISTER_START:
            return {
                ...state,
                registering: true,
            }           
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true
            }           
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                registeringError: "Register error!"
            }     
    //################################
        case POSTREVIEW_START:
            return {
                ...state,
                postingReview: true

            }           
        case POSTREVIEW_SUCCESS:
            return {
                ...state,
                postingReview: false,
                reviewPosted: true,
                savedStrains: action.payload
            }           
        case POSTREVIEW_FAILURE:
            return {
                ...state,
                postingReview: false
            }     
    //################################
        case DELETEREVIEW_START:
            return {
                ...state,
                postingReview: true

            }           
        case DELETEREVIEW_SUCCESS:
            return {
                ...state,
                postingReview: false,
                reviewPosted: true,
                savedStrains: action.payload
            }           
        case DELETEREVIEW_FAILURE:
            return {
                ...state,
                postingReview: false
            }     
    //################################
        case UPDATEUSER_START: 
            return {
                ...state,

            }           
        case UPDATEUSER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                recommendations: action.payload.recommendations,
                savedStrains: action.payload.savedStrains,
                dispStrain: action.payload.recommendations[0],
                iterator: 1

            }           
        case UPDATEUSER_FAILURE:
            return {
                ...state,
            }     
    //################################
        case CHANGEDISPSTRAIN:
            return {
                ...state,
                dispStrain: action.payload.strain,
                iterator: action.payload.iterator
            }     
    //################################
        case MODALTOGGLE:
            return {
                ...state,
                isModalOn: !state.isModalOn
            }     
    //################################
        default:
            return state;
    }
    
        
}