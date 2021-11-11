function OhmInput(props){
    return <div>
        <span>{props.title}</span>
        <input type="number" onChange={props.handleChange}/>
        <span>Ohm</span>
    </div>
}

export default OhmInput