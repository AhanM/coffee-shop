
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    Button
} from "reactstrap";

function createData(
    name: string,
    neighborhood: string,
    tableSize: string,
    wifi: string,
    outlets: string,
    hours: string,
    upvotes: string,
) {
    return { name, neighborhood, tableSize, wifi, outlets, hours, upvotes };
}

/*
Data: Name, table size, wifi, outlets, rating, hours, rating (as %)
*/

const rows = [
    createData('Atlas Cafe', 'Mission', 'Large', 'Yes', 'Yes', '9am - 5pm', "121"),
    createData('Four Barrel', 'Mission', 'Small', 'No', 'No', '10am - 3pm', "62"),
    createData('The Social Study', 'NOPA', 'Small', 'Yes', 'No', '9am - 4pm', "43"),
    createData('The Mill', 'NOPA', 'Large', 'Yes', 'No', '8am - 6pm', "91"),
    createData('Matching Half', 'NOPA', 'Small', 'No', 'Yes', 'N/A', "87"),
    createData('Cafe International', 'Lower Haight', 'Large', 'No', 'No', '7am-5pm', "31"),
];

import BootstrapImage from "../assets/img/theme/bootstrap.jpg";

const ArgonTable = () => {
    return (
        <>
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Dark table */}
                <Row className="mt-5">
                    <div className="col">
                        <Card className="bg-default shadow">
                            <CardHeader className="bg-transparent border-0">
                                <h3 className="text-white mb-0">SF Study Spots</h3>
                            </CardHeader>
                            <Table
                                className="align-items-center table-dark table-flush"
                                responsive
                            >
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Neighborhood</th>
                                        <th scope="col">Wifi</th>
                                        <th scope="col">Table Size</th>
                                        <th scope="col">Outlets</th>
                                        <th scope="col">Hours</th>
                                        <th scope="col">Upvotes</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row) => (
                                        <tr key={row.name}>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                {row.name}
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>{row.neighborhood}</td>
                                                <td>
                                                    <Badge color="" className="badge-dot mr-4">
                                                        <i className="bg-warning" />
                                                        {row.outlets}
                                                    </Badge>
                                                </td>
                                                <td>
                                                    {row.tableSize}
                                                </td>
                                                
                                                <td>
                                                    {row.outlets}
                                                </td>
                                                <td>
                                                    {row.hours}
                                                </td>
                                                <td>
                                                    <Button color="info" type="button">
                                                        {row.upvotes}
                                                    </Button>
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default ArgonTable;