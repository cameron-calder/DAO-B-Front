import TopTitle from '../../elements/TopTitle';
import Container from '../../elements/Container';
import WalletInfo from '../../components/Admin/AdminDashboard/WalletInfo';
import DropDownSelect from '../../elements/DropDownSelect';
import AdminDashboardTabs from '../../components/Admin/AdminDashboard/AdminDashboardTabs';

const options = [
    "All", "New", "Pending", "Approved", "Rejected"
]

export default function AdminDashboard() {
    const onSelect = (value) => {
        console.log(value.value);
    }

    return (
        <section className='py-8'>
            <Container>
                <div className='flex items-center justify-between mb-14'>
                    <TopTitle title="Company Bonuses" employees="7" />
                    <WalletInfo />
                </div>
                <DropDownSelect options={options} onSelect={onSelect} lebel="Specific days" />
                <AdminDashboardTabs />
            </Container>
        </section>
    )
}
