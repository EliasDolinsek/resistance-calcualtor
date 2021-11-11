function OhmInput(props){
    return <div>
        <span className="me-2">{props.title}</span>
        <input  className="me-2" type="number" onChange={(value) => props.handleChange(value.target.value)}/>
        <span>Ohm</span>
    </div>
}

export default OhmInput