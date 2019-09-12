import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddEditForm extends React.Component{
    state = {
        id: 0,
        freezer: '',
        chamber: '',
        rack: '',
        tray: '',
        box: '',
        sample_type: '',
        description: '',
        box_label: '',
        project:'',
        responsible_personel: '',
        box_barcode:''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch('http://localhost:3000/crud', {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                freezer: this.state.freezer,
                chamber: this.state.chamber,
                rack: this.state.rack,
                tray: this.state.tray,
                box: this.state.box,
                sample_type: this.state.sample_type,
                description: this.state.description,
                box_label: this.state.box_label,
                project: this.state.project,
                responsible_personel: this.state.responsible_personel,
                box_barcode: this.state.box_label
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                }
            })
            .catch(err => console.log(err))
    }
    submitFormEdit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/crud', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                freezer: this.state.freezer,
                chamber: this.state.chamber,
                rack: this.state.rack,
                tray: this.state.tray,
                box: this.state.box,
                sample_type: this.state.sample_type,
                description: this.state.description,
                box_label: this.state.box_label,
                project: this.state.project,
                responsible_personel: this.state.responsible_personel,
                box_barcode: this.state.box_label
            })
        })
            .then(response => response.json())
            .then(item => {
            if (Array.isArray(item)) {
                // console.log(item[0])
                this.props.updateState(item[0])
                this.props.toggle()
            } else {
            console.log('failure')
            }

    })
    .catch(err => console.log(err))

}
componentDidMount() {
        //if item exsists, populate the state with proper data
    if (this.props.item}{
    const { id, freezer, chamber, rack, tray, box, sample_type, description, box_label, project, responsible_personel, box_barcode} = this.props.item
    this.setState({id,freezer, chamber, rack, tray, box, sample_type, description, box_label, project, responsible_personel, box_barcode})

}
}
render() {
    return(
        <Form onsSubmit={this.props.item ? this.submitFormEdit: this.submitFormAdd}>
            <FormGroup>
                <Label for="freezer"> Freezer </Label>
                <Input type="text" name="freezer" id="freezer" onChange={this.onchange} value={this.state.freezer === null ? '': this.state.freezer} />
            </FormGroup>
            <FormGroup>
            <Label for="chamber"> Chamber </Label>
            <Input type="text" name="chamber" id="freezer" onChange={this.onchange} value={this.state.chamber === null ? '': this.state.chamber} />
            </FormGroup>
            <FormGroup>
                <Label for="rack"> Rack </Label>
                <Input type="text" name="rack" id="rack" onChange={this.onchange} value={this.state.rack === null ? '': this.state.rack} />
            </FormGroup>
            <FormGroup>
                <Label for="tray"> Tray </Label>
                <Input type="text" name="tray" id="tray" onChange={this.onchange} value={this.state.tray === null ? '': this.state.tray} />
            </FormGroup>
            <FormGroup>
                <Label for="box"> Box </Label>
                <Input type="text" name="rack" id="box" onChange={this.onchange} value={this.state.box === null ? '': this.state.box} />
            </FormGroup>
            <FormGroup>
                <Label for="sample_type"> Sample_Type </Label>
                <Input type="text" name="sample_type" id="sample_type" onChange={this.onchange} value={this.state.sample_type === null ? '': this.state.sample_type} />
            </FormGroup>
            <FormGroup>
            <FormGroup>
                <Label for="description"> Description </Label>
                <Input type="text" name="description" id="description" onChange={this.onchange} value={this.state.description === null ? '': this.state.description} />
            </FormGroup>
                <Label for="box_label"> Box Label </Label>
                <Input type="text" name="box_label" id="box_label" onChange={this.onchange} value={this.state.box_label === null ? '': this.state.box_label} />
            </FormGroup>
            <FormGroup>
                <Label for="project"> Project </Label>
                <Input type="text" name="project" id="project" onChange={this.onchange} value={this.state.project === null ? '': this.state.project} />
            </FormGroup>
            <FormGroup>
                <Label for="responsible_personel"> Responsible Personel </Label>
                <Input type="text" name="responsible_personel" id="responsible_personel" onChange={this.onchange} value={this.state.responsible_personel === null ? '': this.state.responsible_personel} />
            </FormGroup>
            <FormGroup>
                <Label for="box_barcode"> Box Barcode </Label>
                <Input type="text" name="box_barcode" id="box_barcode" onChange={this.onchange} value={this.state.box_barcode === null ? '': this.state.box_barcode} />
            </FormGroup>

    );
}
        }