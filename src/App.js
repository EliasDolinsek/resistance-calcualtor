import './App.sass';
import {Button, ButtonGroup, ButtonToolbar, Container} from "react-bootstrap";
import OhmInput from "./components/OhmInput";
import ResistorsCalculator from "./components/ResistorsCalculator";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resistorOne: 0,
            resistorTwo: 0,
            resistorThree: 0,
            resultValue: null
        }
    }


    calculateParallelOhmResult() {
        return (this.state.resistorOne * this.state.resistorTwo * this.state.resistorThree) / (this.state.resistorOne + this.state.resistorTwo + this.state.resistorThree)
    }

    calculateSerialOhmResult() {
        return this.state.resistorOne + this.state.resistorTwo + this.state.resistorThree
    }

    calculateCurrentForVolts(volts, ohms) {
        return volts / ohms
    }

    calculateParallelResultsPerOhm() {
        const ohms = this.calculateParallelOhmResult()
        let result = {}
        for (let i = 0; i < 10; i++) {
            result[i] = this.calculateCurrentForVolts(i, ohms)
        }

        this.setState({resultValue: result})
    }

    calculateSerialResultsPerOhm() {
        const ohms = this.calculateSerialOhmResult()
        let result = {}
        for (let i = 0; i < 10; i++) {
            result[i] = this.calculateCurrentForVolts(i, ohms)
        }

        this.setState({resultValue: result})
    }


    render() {
        return <Container>
            <h1>Resistance Calculator</h1>
            <form>
                <OhmInput title="R1" handleInput={(value) => this.setState({resistorOne: parseInt(value)})}/>
                <OhmInput title="R2" handleInput={(value) => this.setState({resistorTwo: parseInt(value)})}/>
                <OhmInput title="R3" handleInput={(value) => this.setState({resistorThree: parseInt(value)})}/>
                <ButtonToolbar>
                    <ButtonGroup className="me-2">
                        <Button onClick={this.calculateSerialResultsPerOhm}>Serienschaltung</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button onClick={this.calculateParallelResultsPerOhm}>Parallellschaltung</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </form>
            <ResistorsCalculator result={this.state.resultValue}/>
        </Container>
    }
}

export default App;
