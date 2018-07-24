import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios"


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },

    checkbox: {
        marginBottom: 16,
    },
};


const names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Whenesday',
    'Thueresday',
    'Friday',
    'Saturesday',
];

const items = [
    <MenuItem key={1} value={"Primary"} primaryText="Primary" />,
    <MenuItem key={2} value={"Accent"} primaryText="Accent" />,
    <MenuItem key={3} value={"Warn"} primaryText="Warn" />,
];

class TextFieldExampleSimple extends Component {

    constructor() {
        super()
        this.state = {
            Days: [],
            checked: false,
            TitleVal: "",
            DiscriptionVal: "",
            classType: "",
            Recurring_status: "",
            // howManyDays: "",
            feeVal: "",
            SubjectVal: "",
            startTime: null,
            EndTime: null,

        };
        this.TextFieldChangeHandler = this.TextFieldChangeHandler.bind(this)
        this.startTime = this.startTime.bind(this);
        this.endTime = this.endTime.bind(this);
        this.createClassHandler = this.createClassHandler.bind(this)

    }


    startTime(event, time) {
        this.setState({ startTime: time })
    }

    endTime(event, time) {
        this.setState({ EndTime: time })
    }


    daysHandleChange = (event, index, Days) => {
        this.setState({ Days });
        // console.log(values,"==========")
    }

    subjectHandleChange = (event, index, value) => {
        this.setState({ SubjectVal: value })
        console.log(value, "==========")

    };

    menuItems(values) {
        return names.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
        ));
    }






    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }


    TextFieldChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    _onChange(event, value) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }


    createClassHandler() {
        let aouthToken = "Bearer"+localStorage.getItem("aouthToken")
        console.log(aouthToken)
        let obj = {
            TitleVal: this.state.TitleVal,
            Days: this.state.Days,
            DiscriptionVal: this.state.DiscriptionVal,
            classType: this.state.classType,
            Recurring_status: this.state.Recurring_status,
            howManyDays: this.state.howManyDays,
            feeVal: this.state.feeVal,
            SubjectVal: this.state.SubjectVal,
            startTime: this.state.startTime,
            EndTime: this.state.EndTime,
        }
        axios.post("http://localhost:8000/user/createPost",
            obj,
            {
                headers: { aouthToken },
            },
        )
            .then((res) => {
                console.log(res, "================")
            }).catch((err) => {
                alert(err)
                console.log(err)
            })
    }

    render() {
        const { Days } = this.state;
        return (
            <div>
                <div className="TextField">
                    <TextField
                        hintText="Title"
                        fullWidth={true}
                        value={this.state.TitleVal}
                        onChange={this.TextFieldChangeHandler}
                        name="TitleVal"

                    />
                </div>
                <br />
                <div className="TextField" >
                    <TextField
                        hintText="Discription"
                        fullWidth={true}
                        value={this.state.DiscriptionVal}
                        onChange={this.TextFieldChangeHandler}
                        name="DiscriptionVal"
                    />
                </div>
                <div className="TextField"  >
                    <div className="radioButtonDiv" >

                        <div style={{ width: "50%" }}>
                            <div>
                                <p>Your class is ?:</p>
                                <RadioButtonGroup
                                    className="radioButton"
                                    name="classType"
                                    onChange={this._onChange.bind(this)}
                                    labelPosition="right" >
                                    <RadioButton
                                        value="public"
                                        label="Public" />
                                    <RadioButton
                                        value="private"
                                        label="Private" />
                                </RadioButtonGroup>
                            </div>
                        </div>
                        <div style={{ width: "50%" }} >
                            <div >
                                <p>Recurring status:</p>
                                <RadioButtonGroup
                                    className="radioButton"
                                    onChange={this._onChange.bind(this)}
                                    name="Recurring_status"
                                    labelPosition="right" >
                                    <RadioButton

                                        value="recurring"
                                        label="Recurring" />

                                    <RadioButton
                                        style={{ marginLeft: 20 }}
                                        value="onetime"
                                        label="One.time" />
                                </RadioButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="TextField" >
                    <SelectField
                        multiple={true}
                        hintText="How many days ?"
                        value={Days}
                        onChange={this.daysHandleChange}
                        fullWidth={true}
                    >
                        {this.menuItems(Days)}
                    </SelectField>
                </div>
                <div className="TextField" >
                    <TextField
                        hintText="Fee"
                        fullWidth={true}
                        type="number"
                        value={this.state.feeVal}
                        onChange={this.TextFieldChangeHandler}
                        name="feeVal"
                    />
                </div>
                <div className="TextField" >
                    <div>
                        <SelectField
                            value={this.state.SubjectVal}
                            onChange={this.subjectHandleChange}
                            floatingLabelText="Subject"
                            fullWidth={true}>
                            {items}
                        </SelectField>
                    </div>
                </div>
                <div className="TextField" style={{ margin: "auto" }} >
                    <div style={{ display: "flex", flexWrap: "nowrap", }} >
                        <TimePicker
                            onChange={this.startTime}
                            value={this.state.startTime}
                            hintText="Start Time"
                            style={{ display: "inline-block", width: "100%", margin: 5 }}
                            textFieldStyle={{ width: "101%" }}
                        />
                        <TimePicker
                            onChange={this.endTime} value={this.state.EndTime}
                            hintText="End time"
                            style={{ display: "inline-block", width: "100%", margin: 5 }}
                            textFieldStyle={{ width: "101%" }}
                        />
                        <br />
                    </div>
                </div>
                <div>
                </div>
                <br />
                <div className="finalButtonDiv" >
                    <RaisedButton
                        label='Create'
                        primary={true}
                        className='finalButton'
                        onClick={this.createClassHandler}
                    />
                </div>
            </div>
        )
    }
}
export default TextFieldExampleSimple;