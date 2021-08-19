import React, { Component } from 'react'

export default class CustomerRow extends Component {
    
    render() {
        let {id,firstName, lastName} = this.props.customer;
        return (
            <div className="row">
                    {firstName} &nbsp; {lastName}  &nbsp;
                    <button type="button" onClick={this.deleteRow.bind(this, id)}>Delete</button>
            </div>
        )
    }

    deleteRow(id) {
        console.log("Customer row delete", id);
        this.props.delEvent(id);
    }
}
