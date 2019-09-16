import React, {Component} from 'react'
import {Table, Button} from 'reactstrap';
import ModalForm from '../Modals/Modal'

class DataTable extends Component{

    deleteItem = id=> {
        let confirmDelete = window.confirm('Delete item forever?');
        if (confirmDelete){
            fetch('http://localhost:3000/crud',{
            method: 'delete',
                headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                id
            })
            })
                .then(response => response.json())
                .then(item => {
                this.props.deleteItemFromState(id)
        })
        .catch(err => console.log(err))
    }
    };
    render() {
        const items = this.props.items.map(item => {
            return (
                < tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.freezer}</td>
                    <td>{item.chamber}</td>
                    <td>{item.rack}</td>
                    <td>{item.tray}</td>
                    <td>{item.box}</td>
                    <td>{item.box_label}</td>
                    <td>{item.sample_type}</td>
                    <td>{item.description}</td>
                    <td>{item.project}</td>
                    <td>{item.responsible_personel}</td>
                    <td>{item.box_barcode}</td>
                    <td>
                    <div style={{width:"110px"}}>
                        <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
                        { ' '}
                        <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del </Button>
                    </div>

                    </td>
                </tr>
            )
        });

        return (
            <Table responsive hover>
                <thead>
                <tr>
                    <th> ID</th>
                    <th>Freezer</th>
                    <th>Chamber</th>
                    <th>Rack</th>
                    <th>Tray</th>
                    <th>Box</th>
                    <th>Box Label</th>
                    <th>Sample Type</th>
                    <th>Description</th>
                    <th>Project</th>
                    <th>Responsible Personel</th>
                    <th>Box Barcode</th>
                </tr>
                </thead>
                <tbody>
                {items}
                </tbody>
            </Table>
        )
    }
    }
    export default DataTable