import React from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import axios from 'axios'

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/items')
            .then((results) => this.setState({data: results.data}))
    }

    render() {
        const {data} = this.state;
        const dataToDisplay = data.map((item) => {
            return <h2 key={item._id}>{item.name}</h2>
        })
        return(
            <div>
                <h1>Shopping List</h1>
                {dataToDisplay}
            </div>
        )
    }

}


export default ShoppingList