import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextFieldIcon from 'material-ui-textfield-icon';
import TimePicker from 'material-ui/TimePicker';



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
    <MenuItem key={1} value={1} primaryText="Primary" />,
    <MenuItem key={2} value={2} primaryText="Accent" />,
    <MenuItem key={3} value={3} primaryText="Warn" />,
];

class TextFieldExampleSimple extends Component {

    constructor() {
        super()
        this.state = {
            values: [],
            checked: false,
            value: null,
        };
    }



    handleChange = (event, index, values) => this.setState({ values });

    handleChange2 = (event, index, value) => this.setState({ value });

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


    render() {

        const { values } = this.state;
        return (
            <div>
                <div className="TextField">
                    <TextField
                        hintText="Title"
                        fullWidth={true}
                    />
                </div>
                <br />
                <div className="TextField" >
                    <TextField
                        hintText="Discription"
                        fullWidth={true}
                    // multiLine={true}
                    />
                </div>
                <div className="TextField"  >
                    <span  >Your class is: </span>
                    <span style={{ marginLeft: 245 }} >Recurring status: </span>
                    <br />
                    <br />
                    <RadioButtonGroup style={{ float: "left", }} name="class-type" labelPosition="right" >
                        <RadioButton
                            style={{ width: '70%', marginBottom: 10 }}
                            value="public"
                            label="Public" />

                        <RadioButton
                            style={{ width: '0%' }}
                            value="private"
                            label="Private" />
                    </RadioButtonGroup>
                    <RadioButtonGroup style={{ float: "left", marginLeft: 250, }} name="Recurring-status" labelPosition="right" >
                        <RadioButton
                            style={{ width: '70%', marginBottom: 10 }}
                            value="recurring"
                            label="Recurring" />

                        <RadioButton
                            style={{ width: '0%' }}
                            value="onetime"
                            label="One.time" />
                    </RadioButtonGroup>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="TextField" >
                    <SelectField
                        multiple={true}
                        hintText="How many days ?"
                        value={values}
                        onChange={this.handleChange}
                        fullWidth={true}
                    >
                        {this.menuItems(values)}
                    </SelectField>
                </div>
                <div className="TextField" >
                    <TextField
                        hintText="Fee"
                        fullWidth={true}
                        type="number"
                    />
                </div>
                <div className="TextField" >
                    <div>
                        <SelectField
                            value={this.state.value}
                            onChange={this.handleChange2}
                            floatingLabelText="Subject"
                            fullWidth={true}>
                            {items}
                        </SelectField>
                    </div>
                </div>
                <div className="TextField" style={{margin: "auto"}} >
                    <div style={{ display: "flex", flexWrap: "nowrap", }} >
                        <TimePicker
                            hintText="Start Time"
                            style={{ display: "inline-block", width:"100%", margin:5 }}
                            textFieldStyle={{ width:"101%" }}
                        />
                        <TimePicker
                            hintText="End time"
                            style={{ display: "inline-block", width:"100%",margin:5 }}
                            textFieldStyle={{  width:"101%" }}
                        />
                    <br/>
                    </div>
                </div>


                <button>
                    Submit
                </button>
            </div>
        )
    }
}
export default TextFieldExampleSimple;