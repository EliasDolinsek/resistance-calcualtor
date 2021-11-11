import {Table} from "react-bootstrap";

function ResistorsCalculator(props) {
    if(props.result == null) return <div>

    </div>
    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>U[V]</th>
            <th>A[I]</th>
        </tr>
        </thead>
        <tbody>
        {Object.keys(props.result).map((key) => {
            return <tr>
                <td>{key}</td>
                <td>{props.result[key].toFixed(5)}</td>
            </tr>;
        })}
        </tbody>
    </Table>
}

export default ResistorsCalculator