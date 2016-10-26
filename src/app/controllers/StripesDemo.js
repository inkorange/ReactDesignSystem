"use strict"

import React from 'react'
import { render } from 'react-dom'

import {FlatButton, RaisedButton} from '../Stripes/Forms/Buttons'
import {Card} from '../Stripes/Layout/Card'
import {Paper} from '../Stripes/Layout/Paper'
import {H1, H3} from '../Stripes/Layout/Headers'
import {TwoColumnLayout} from  '../Stripes/Layout/TwoColumnLayout'
import {Alert} from  '../Stripes/Notifications/Alert'
import {Icon} from  '../Stripes/Symbols/Icon'
import {RadioButtonGroup, CheckBoxGroup, Item} from  '../Stripes/Forms/Switches'
import {Fieldset} from '../Stripes/Forms/Fieldset'
import {TextBox, TextArea} from '../Stripes/Forms/Inputs'
import {IconMenu} from '../Stripes/Layout/IconMenu'

class StripesDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alertshow: true,
            checkboxdisable: false,
            radiobuttondisabled: false,
            inputerror: null
        }
        this.toggleCheckboxDisable = this.toggleCheckboxDisable.bind(this);
        this.toggleRadioDisable = this.toggleRadioDisable.bind(this);
        this.toggleError = this.toggleError.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    toggleCheckboxDisable() {
        this.setState({
            checkboxdisable: !this.state.checkboxdisable
        });
    }

    toggleRadioDisable() {
        this.setState({
            radiobuttondisabled: !this.state.radiobuttondisabled
        });
    }

    toggleError() {
        this.setState({
            inputerror: this.state.inputerror ? null : 'you have an error.'
        });
    }

    render() {
        return (
            <article className="main_content_child">
                <H1>Zebra Stripes Design System</H1>
                <section>
                    <H3>FlatButton</H3>
                    <FlatButton key="button1">FlatButton</FlatButton>
                    <FlatButton key="button2" type="primary">FlatButton</FlatButton>
                    <FlatButton key="button3" type="secondary" onClick={() => { alert('I clicked'); }}>FlatButton</FlatButton>
                    <FlatButton key="button4" disabled={true}>FlatButton</FlatButton>
                </section>
                <section>
                    <H3>RaisedButton</H3>
                    <RaisedButton key="button5">RaisedButton</RaisedButton>
                    <RaisedButton key="button6" type="primary">RaisedButton</RaisedButton>
                    <RaisedButton key="button7" type="secondary">RaisedButton</RaisedButton>
                </section>

                <section>
                    <H3>Card</H3>
                    <Card
                        title="This is the Card Title"
                        actions={[
                            <FlatButton key="action1">Yes</FlatButton>,
                            <RaisedButton key="action2" type="primary">No</RaisedButton>
                        ]}
                    >
                        This is the card body.
                    </Card>
                </section>

                <section>
                    <H3>Paper</H3>
                    <Paper style={{width: '32%', marginRight: '2%', marginBottom: '10px'}}>This is a paper component</Paper>
                    <Paper style={{width: '32%', marginRight: '2%', marginBottom: '10px'}} depth="1">This is a paper component</Paper>
                    <Paper style={{width: '32%', marginBottom: '10px'}} depth="3">This is a paper component</Paper>
                </section>

                <section>
                    <H3>TwoColumnLayout</H3>
                    <TwoColumnLayout
                        columnOne={<div>This is content for the first column. This will display on the left side of the component.</div>}
                        columnTwo={<div>This is content for the second column. This will display on the right side of the component.</div>}
                    />
                </section>

                <section>
                    <H3>Alert</H3>
                    <div style={{position: "relative", width: '35px', margin: '20px 20px 20px 200px'}}>
                        <Icon
                            iconid="admin"
                            size="large" />
                        <Alert show={true}>This is an alert on the left</Alert>
                    </div>
                    <div style={{position: "relative",  width: '35px',margin: '20px'}}>
                        <Icon
                            iconid="admin"
                            size="large"
                            onClick={() => {this.setState({alertshow: !this.state.alertshow})}}
                        />
                        <Alert show={this.state.alertshow} position="right">This is an alert on the right</Alert>
                    </div>
                </section>


                <section>
                    <H3>Icon</H3>
                    <Icon
                        style={{margin: '10px'}}
                        iconid="view_by_2"
                        size="large"
                    />
                    <Icon
                        style={{margin: '10px'}}
                        iconid="view_by_2"
                        size="large"
                        type="primary"
                    />
                    <Icon
                        style={{margin: '10px'}}
                        iconid="view_by_2"
                        size="large"
                        color="orange"
                    />
                </section>

                <section>
                    <H3>Checkbox ({this.state.checkboxdisable ? 'DISABLED' : 'VISIBLE'})</H3>
                    <CheckBoxGroup ref="checkboxgroup" disabled={this.state.checkboxdisable}>
                        <Item defaultChecked={true} key="option1">Checkbox Option 1</Item>
                        <Item key="option2">Checkbox Option 2</Item>
                        <Item key="option3">Checkbox Option 3</Item>
                    </CheckBoxGroup>
                    <RaisedButton key="button1" onClick={() => { alert("Selected Values Are: " + this.refs.checkboxgroup.getValues()); }}>What are the Values?</RaisedButton>
                    <RaisedButton key="button2" onClick={() => { this.refs.checkboxgroup.setChecked("Checkbox Option 1", false); }}>Un-checking A</RaisedButton>
                    <RaisedButton key="button3" onClick={this.toggleCheckboxDisable}>Toggle Disable</RaisedButton>
                </section>

                <section>
                    <H3>RadioButtonGroup ({this.state.radiobuttondisabled ? 'DISABLED' : 'VISIBLE'})</H3>
                    <RadioButtonGroup ref="radiobuttongroup" name="group1" disabled={this.state.radiobuttondisabled}>
                        <Item key="option1" defaultChecked={true} >Radio Option 1</Item>
                        <Item key="option2">Radio Option 2</Item>
                        <Item key="option3">Radio Option 3</Item>
                    </RadioButtonGroup>
                    <RaisedButton key="button1" onClick={() => { alert("Selected value is: " + this.refs.radiobuttongroup.getValues()); }}>What is the Value?</RaisedButton>
                    <RaisedButton key="button2" onClick={() => { this.refs.radiobuttongroup.setChecked("Radio Option 1", false); }}>Un-checking A</RaisedButton>
                    <RaisedButton key="button3" onClick={this.toggleRadioDisable}>Toggle Disable</RaisedButton>
                </section>

                <section>
                    <H3>Fieldset</H3>
                    <Fieldset
                        title="Active Section"
                        style={{marginBottom: '20px'}}
                    >
                        This is an active Fieldset.
                    </Fieldset>
                    <Fieldset disabled={true} title="Disabled Section">
                        This Fieldset is no longer active.
                    </Fieldset>
                </section>

                <section>
                    <H3>TextBox</H3>
                    <Fieldset>
                        <TextBox placeholder="This is a placeholder" />
                    </Fieldset>
                    <Fieldset>
                        <TextBox width="50%" placeholder="This is a placeholder" />
                    </Fieldset>
                    <Fieldset>
                        <TextBox width="100%" placeholder="This is a placeholder" />
                    </Fieldset>
                    <Fieldset title="Input with Suggestions"
                        style={{marginTop: "20px"}}
                    >
                        <TextBox
                            width="50%"
                            suggestions={true}
                            suggestionData={['Alabama', 'Alaska','Arkansas','California','Colorado','New York','Connecticut']}
                            placeholder="This is a placeholder" />
                    </Fieldset>
                    <Fieldset>
                        <TextBox placeholder="This is a placeholder" error={this.state.inputerror}/>
                        <RaisedButton key="button1" onClick={this.toggleError}>Trigger Error</RaisedButton>
                    </Fieldset>

                 </section>


                <section>
                    <H3>TextArea</H3>
                    <Fieldset>
                        <TextArea placeholder="This is a placeholder" />
                    </Fieldset>
                    <Fieldset>
                        <TextArea width="100%" placeholder="This is a placeholder" />
                    </Fieldset>
                </section>


                <section>
                    <H3>IconMenu</H3>

                    <IconMenu iconid="filter" direction="bottom" max-width="500px">
                        This is the content of the menu, it will go in here. This is the content of the menu, it will go in here. This is the content of the menu, it will go in here.
                    </IconMenu>

                </section>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                <footer className="zebra">
                    <img src="./images/zebralogo.svg" />
                    <p>&copy;2016 ZIH Corp and/or its affiliates. All Rights Reserved. Zebra and the stylized Zebra head are trademarks of ZIH Corp, registered in many jurisdictions worldwide.</p>
                </footer>
            </article>
        )
    }
 
}

module.exports = StripesDemo;