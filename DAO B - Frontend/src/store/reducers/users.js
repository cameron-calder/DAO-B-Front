import { ADD_BONUS, CREATE_USER, GET_ALL_USERS, GET_USER, SET_APPROVED, UPDATE_USER, UPDATE_VOTE } from "../actions/actionTypes";


const users = [
    {
        id: 1,
        name: 'Kareem Mostafa',
        email: 'kmostafa@gmail.com',
        business: 'DogeCoinCo',
        image: '',
        position: 'Developer',
        team: 'Development',
        phone: '+20 0102423514',
        city: 'Cairo',
        address: 'Cairo,Egypt',
        wallet:
        {
            name: "NewWallet",
            walletNumber: '124x3WORIFJOIQEQ'
        },
        userBonuses: [{
            id: 1, date: "2019-01-01", time: "12:00", wallet: "0x22bD...BA4B",
            summary: "£240",
            bonus: "30%"
        }, {
            id: 2, date: "2019-01-01", time: "12:00", wallet: "0x22bD...BA4B",
            summary: "£240",
            bonus: "30%"
        }, {
            id: 3, date: "2019-01-01", time: "12:00", wallet: "0x22bD...BA4B",
            summary: "£240",
            bonus: "30%"
        }, {
            id: 4, date: "2019-01-01", time: "12:00", wallet: "0x22bD...BA4B",
            summary: "£240",
            bonus: "30%"
        }],
        suggestedProposal: {
            bonus: 20,
            votes: 1,
        },
        Notifications: [1]
    },
    {
        id: 2,
        name: 'Hassan Mostafa',
        email: 'hmostafa@gmail.com',
        business: 'DEFI-CO',
        image: '',
        position: 'Developer',
        team: 'Testing',
        phone: '+20 23940823490',
        city: 'Giza',
        address: 'Giza,Egypt',
        wallet:
        {
            name: "Wallet-2",
            walletNumber: '234xOAFJKLSDFJWEO'
        },
        userBonuses: [{
            id: 7, date: "2019-01-01", time: "12:00", wallet: "0x22bD...BA4B",
            summary: "£240",
            bonus: "30%"
        }, {
            id: 8, date: "2019-01-01", time: "12:00", wallet: "0x22bD...BA4B",
            summary: "£240",
            bonus: "30%"
        }],
        SuggestedProposal: {
            bonus: 10,
            votes: { vote: "yes", userId: 1 },
        },
        Notifications: [3]
    },
]

const UserReducer = (state = users, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
        case GET_USER:
        case UPDATE_VOTE:
        case UPDATE_USER:
        case CREATE_USER:
        case ADD_BONUS:
        case SET_APPROVED:      
        case DELETE_NOTIFICATION:  
            return action.payload

        default:
            return state
    }
}
export default UserReducer // const users = state.map(user =>{
    //     if(user.id === action.payload.user ){
    //         console.log("hello")
    //         console.log({...user,userBonus:{...user.userBonus,votes:[...user.userBonus.votes,{userVoted:action.payload.userVoted,vote:action.payload.vote}]}})
    //         return {...user, userBonus:{...user.userBonus,votes:[...user.userBonus.votes,{userVoted:action.payload.userVoted,vote:action.payload.vote}]}}
    //     }
    //     return user
    // })