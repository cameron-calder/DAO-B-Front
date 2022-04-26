import Button from "../../elements/Button";
import Container from "../../elements/Container";
import TopTitle from "../../elements/TopTitle";
import PersonInfo from "../../components/PersonInfo";
import BonusHistoryTable from "../../components/BonusHistoryTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../context/AuthContext";

// const info = {
//     business: "SaaS Supreme",
//     position: "CEO",
//     team: "Development",
//     email: "alma.lawson@example.com",
//     phone: "(44) 555-0115-0202",
//     city: "Swansea",
//     address: "32 Swansea road, Swansea, SA1 4774",
//     wallet: "0x22bD...BA4B"
// }

const people = [
    {
        id: 1,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 2,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 3,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 4,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    },
    {
        id: 5,
        date: "2019-01-01",
        time: "12:00",
        wallet: "0x22bD...BA4B",
        summary: "£240",
        bonus: "30%",
    }
]

export default function Profile() {
    const users = useSelector(state=>state.users)
    const {authedUser} = useAuth()
    const user = users.filter(p => p.id === authedUser.id)
    const handleDelete = () =>{
        
    }
    return (
        <section className="py-8">
            <Container>
                <article className="flex items-center justify-between flex-wrap">
                    <TopTitle title="Cameron Calder" />
                    <div className="flex items-center gap-4">
                        <Link to="suggest">
                            <Button>
                                <i className="fa fa-solid fa-briefcase"></i>
                                <span className="sm:inline-block hidden">Suggest Bonus</span>
                            </Button>
                        </Link>
                        <Link to="edit">
                            <Button>
                                <i className="fa fa-solid fa-pencil-alt"></i>
                                <span className="sm:inline-block hidden">Edit Account</span>
                            </Button>
                        </Link>
                        <Link to="/profile/bonus">
                            <Button onClick={handleDelete}>
                                <i className="fa fa-solid fa-trash"></i>
                                <span className="sm:inline-block hidden">Delete</span>

                            </Button>
                        </Link>
                    </div>
                </article>

                <div className="flex items-center gap-6 mt-14 mb-24">
                    <div className="flex flex-col justify-center sm:w-[400px] w-[250px] py-[.5rem] px-[14px] text-sm border border-input rounded-md">
                        <label htmlFor="email" className="pb-1 capitalize text-[#B5B8BB]">Suggest Bonus</label>
                        <div className="flex items-center">
                            <i className="fa fa-solid fa-euro-sign pr-2"></i>
                            <input type="text" id="bonus" name="bonus" placeholder="Bonus"
                                required
                                className="border-0 outline-0 transition-colors p-1 w-full focus:bg-gray-100 rounded-md placeholder-gray-400" />
                        </div>
                    </div>
                    <Link to="bonus">
                        <Button>
                            <i className="fa fa-solid fa-wallet"></i>
                            <span className="sm:inline-block hidden py-2 px-2">Suggest My bonus</span>
                        </Button>
                    </Link>

                </div>
                <PersonInfo user={user} />
                <BonusHistoryTable user={user} title="My bonuses" />
            </Container>
        </section>
    )
}
