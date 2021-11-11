import {Table} from "react-bootstrap";

function ResistorsCalculator(props) {
    return <div>Wait</div>
    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>U[V]</th>
            <th>A[I]</th>
        </tr>
        </thead>
        <tbody>
        {props.result.keys().map((key) => {
            return <tr>
                <td>{key}</td>
                <td>{props.result[key]}</td>
            </tr>;
        })}
        </tbody>
    </Table>
}

export default ResistorsCalculator