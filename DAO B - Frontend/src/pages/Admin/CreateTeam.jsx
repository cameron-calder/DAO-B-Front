import Container from '../../elements/Container';
import Button from '../../elements/Button';
import TopTitle from '../../elements/TopTitle';
import Input from '../../elements/Input';
import CreateTeamTable from '../../components/Admin/Teams/CreateTeamTable';
import { Link } from 'react-router-dom';


const team = [
    {
        id: 1,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "30%",
        amount: 512

    },
    {
        id: 2,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "30%",
        amount: 512
    },
    {
        id: 3,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        amount: 512
    },
    {
        id: 4,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        amount: 512
    },
    {
        id: 5,
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        team: 'Optimization',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        bonus: "50%",
        amount: 512
    }
]

export default function CreateTeam() {
    return (
        <section className='py-10'>
            <Container>
                <div className='flex items-center justify-between'>
                    <TopTitle title="Create Team" />
                    <div className='action_buttons flex gap-2'>
                        <Button>
                            <i className="fa fa-solid fa-trash"></i>
                            <span className="md:inline-block hidden">Delete</span>
                        </Button>
                        <Link to="user/create">
                            <Button>
                                <i className="fa fa-solid fa-pencil-alt"></i>
                                <span className="md:inline-block hidden">Add Users</span>
                            </Button>
                        </Link>
                        <Button>
                            <i className="fa fa-solid fa-xmark"></i>
                            <span className="md:inline-block hidden">Cancel</span>
                        </Button>
                        <Button>
                            <i className="fa fa-solid fa-check"></i>
                            <span className="md:inline-block hidden">Save</span>
                        </Button>
                    </div>
                </div>
                <div className='flex items-center gap-4 flex-wrap my-14'>
                    <Input label="Team Name" type="text" name="teamName" icons="fa fa-solid fa-trash" placeholder="Sales" />
                    <Input label="Set Team Budget (%)" type="text" name="budget" icons="fa fa-solid fa-euro" placeholder="Budget (%)" />
                </div>
                <CreateTeamTable team={team} />
            </Container>
        </section >
    )
}
