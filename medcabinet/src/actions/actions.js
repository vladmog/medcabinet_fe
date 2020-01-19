import axios from 'axios';
import axiosAuth from '../utils/axiosAuth.js';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const POSTREVIEW_START = 'POSTREVIEW_START';
export const POSTREVIEW_SUCCESS = 'POSTREVIEW_SUCCESS';
export const POSTREVIEW_FAILURE = 'POSTREVIEW_FAILURE';

export const DELETEREVIEW_START = 'DELETEREVIEW_START';
export const DELETEREVIEW_SUCCESS = 'DELETEREVIEW_SUCCESS';
export const DELETEREVIEW_FAILURE = 'DELETEREVIEW_FAILURE';

export const UPDATEUSER_START = 'UPDATEUSER_START';
export const UPDATEUSER_SUCCESS = 'UPDATEUSER_SUCCESS';
export const UPDATEUSER_FAILURE = 'UPDATEUSER_FAILURE';

export const CHANGEDISPSTRAIN = "UPDATEDISPSTRAIN";

export const MODALTOGGLE = "MODALTOGGLE"


let local = true;
// local = false;

let url = "https://med-cabinet-temp.herokuapp.com"
if (local){
  url = "http://localhost:8420"
}

console.log(url)


export const login = creds => dispatch => {
    console.log("login creds", creds)
    dispatch({ 
      type: LOGIN_START 
    });
    return axios
      .post(`${url}/api/users/login`, creds)
      .then(res => {
        console.log("LOGIN_RES: ", res)
        localStorage.setItem('token', res.data.token);
        // localStorage.setItem('user_id', res.data.user.id);
        // localStorage.setItem('username', res.data.user.username);
        dispatch({ 
          type: LOGIN_SUCCESS, 
          payload: res.data 
        });
      })
      .catch(err => {
        console.log("LOGIN ERR: ", err)
        dispatch({ 
          type: LOGIN_FAILURE, 
          payload: err.response.message 
        });
      });
  };

  export const register = creds => dispatch => {
    console.log("register creds", creds)
    dispatch({ 
      type: REGISTER_START 
    });
    return axios
      .post(`${url}/api/users/register`, creds)
      .then(res => {
        console.log("REGISTER RES: ", res)
        dispatch({ 
          type: REGISTER_SUCCESS
        });
      })
      .catch(err => {
        console.log("REGISTER ERR: ", err)
        dispatch({ 
          type: REGISTER_FAILURE
        });
      });
  };

  export const saveStrain = (review, user_id) => dispatch => {
    console.log("review obj", {strain_id: review.id})
    console.log("user_id: ", user_id)
    dispatch({ 
      type: POSTREVIEW_START 
    });
    return axiosAuth()
      .post(`${url}/api/saved/${user_id}`, {strain_id: review.id})
      .then(res => {
        console.log("POSTREVIEW_RES: ", res)
        dispatch({ 
          type: POSTREVIEW_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("POSTREVIEW_ERR: ", err)
        dispatch({ 
          type: POSTREVIEW_FAILURE
        });
      });
  };

  export const deleteReview = (strain_id, user_id) => dispatch => {
    dispatch({
      type: DELETEREVIEW_START
    });
    return axiosAuth()
      .delete(`${url}/api/saved/${strain_id}/${user_id}`)
      .then(res => {
        console.log("DELETE REVIEW RES:", res)
        dispatch({
          type: DELETEREVIEW_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("DELETE REVIEW ERR", err)
        dispatch({
          type: DELETEREVIEW_FAILURE
        })
      })
  }

  export const updateUser = (user, desiredEffect) => dispatch => {
    dispatch({
      type: UPDATEUSER_START
    });
    user.goal = `${desiredEffect}`

    return axiosAuth()
      .patch(`${url}/api/users/${user.id}`, user)
      .then(res => {
        console.log("UPDATEUSER RES: ", res)
        dispatch({
          type: UPDATEUSER_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log("UPDATEUSER ERR:", err)
        dispatch({
          type: UPDATEUSER_FAILURE
        })
      })
  }


  export const changeDispStrain = (strain, iterator) => dispatch => {
  
    dispatch({
      type: CHANGEDISPSTRAIN,
      payload: {
        strain: strain,
        iterator: iterator
      }
    })
  }

  export const modalToggle = () => dispatch => {

    dispatch({
      type: MODALTOGGLE
    })
  }

