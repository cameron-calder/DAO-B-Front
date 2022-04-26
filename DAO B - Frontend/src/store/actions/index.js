import { ADD_BONUS, CREATE_USER, DELETE_NOTIFICATION, GET_ALL_USERS, GET_INITIAL_DATA, GET_TOTAL_BONUS, GET_USER, SET_APPROVED, SET_TOTAL_BONUS, UPDATE_USER, UPDATE_VOTE } from "./actionTypes"
import * as api from '../../config/'


// export const getInitialData = () => async (dispatch) => {
//     try {
//         const response = await api.getData()
//         // console.log(response)
//         dispatch({ type: GET_INITIAL_DATA , payload: response.data })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
export const getAllUsers = () => async (dispatch) => {
    try {
        const response = await api.getAllUsers()
        // console.log(response)
        dispatch({ type: GET_ALL_USERS , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const getUser = (userId) => async (dispatch) => {
    try {
        const response = await api.getUser(userId)
        // console.log(response)
        dispatch({ type: GET_USER , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const getTotalBonus = () => async (dispatch) => {
    try {
        const response = await api.getTotalBonus()
        // console.log(response)
        dispatch({ type: GET_TOTAL_BONUS , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const setTotalBonus = (newTotal) => async (dispatch) => {
    try {
        const response = await api.setTotalBonus(newTotal)
        // console.log(response)
        dispatch({ type: SET_TOTAL_BONUS , payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const updateUser =(editedUser) => async(dispatch) =>{
    try{
        const response = await api.updateUser()
        console.log(response)
        dispatch({type: UPDATE_USER, payload:response.data})
    }catch(error){
        console.log(error)
    }
}
export const createUser = (user) => async(dispatch) =>{
    try{
        const response = await api.createUser()
        console.log(response)
        dispatch({type: CREATE_USER, payload:response.data})
    }catch(error){
        console.log(error)
    }
}
export const updateVote = (proposalId,vote,userVoted) => async (dispatch)=>{
    try{
        const response = await api.updateVote(proposalId,vote,userVoted)
        dispatch ({type:UPDATE_VOTE,payload:response.data})
    }catch(err){
        console.log(err)
    }
    
}

export const addBonus = (userId,value) => async (dispatch) =>{
    console.log(value)
    try{
        const response = await api.addBonus(userId,value)
        dispatch ({type:ADD_BONUS,payload:response.data})

    }catch(err){
        console.log(err)
    }
   
}

export const setApproved = (userId,status) => async (dispatch) =>{
    console.log(status)
    try{
        const response = await api.setApproved(userId,status)
        dispatch ({type:SET_APPROVED,payload:response.data})

    }catch(err){
        console.log(err)
    }
   
}
export const deleteNotification = (userId,notificationId) => async (dispatch) =>{
    console.log({userId,notificationId})
    try{
        const response = await api.deleteNotification(userId,notificationId)
        dispatch ({type:DELETE_NOTIFICATION,payload:response.data})

    }catch(err){
        console.log(err)
    }
   
}
