import React, { Component } from 'react'

export default class Details extends Component {
    render() {
       console.log(this.props);
       let id = this.props.match.params.id;
        return (
            <div>
                <h1>Details of {id}</h1>
                <p>
                    Task to complete:
                    get the product details from Context based on "param.id"
                    and display : company, price and info..
                    How: make this as Context Consumer..
                </p>
            </div>
        )
    }
}
