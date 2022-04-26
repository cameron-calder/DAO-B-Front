import CompanyBonus from "../../components/User/UserDashboard/CompanyBonus";
import Container from "../../elements/Container";
import EmployeesTable from '../../components/User/UserDashboard/EmployeesTable';

export default function UserDashboard() {
    return (
        <section className="font-light">
            <Container>
                <CompanyBonus />
                <EmployeesTable />
            </Container>
        </section>
    )
}
