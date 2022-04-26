import axios from 'axios'



export const API = axios.create({ baseURL: 'http://localhost:7070' })
//get all users
export const getAllUsers = () => {
    return API.get('/users')
}
// get user by id
export const getUser = (userId) => {
    return API.get(`/users/${userId}`)
}

//get total bonus
export const getTotalBonus = () => {
    return API.get('/users/totalBonus')
}

//set total bonus
export const setTotalBonus = (newTotal) => {
    return API.post('/users/totalBonus/set',newTotal)
}

//register user req body: user object
export const createUser = (user) =>{
    return API.post('/users/register', user)
} 

//add bonus to suggestedProposal object in user object
export const addBonus = (userId, bonus) => {
    return API.post(`/users/bonus/add/${userId}`, { userId, bonus })
} 
// push notificaitons to notidications array in user object
export const addNotifications = (userId) => {
    return API.post(`/users/notification/add/${userId}`, userId)
}

//add status to suggestedProposal object in user object
export const setApproved = (userId, status) => {
    return API.post('/users/suggestedProposal/status', { userId, status })
} 

// update user data by userId req body: editedUser Object, userId
export const updateUser = (editedUser, userId) => {
    return API.put('/users/update', { editedUser, userId })
}  
//add vote to votes array in suggestedProposal object in user Object
export const updateVote = (proposalId, vote, userVoted) => {
    return API.put(`/users/add/${proposalId}`, { proposalId, userVoted, vote })
} 



export const deleteNotification = (userId,notificationId) => ('/users/notification/delete',{userId,notificationId}) 
// export const login = (email:string,password:string) => API.post('/auth/login',{email,password})//token
// export const getUser = (token:string) => API.get('/auth/me',{headers:{authorization:token}})

