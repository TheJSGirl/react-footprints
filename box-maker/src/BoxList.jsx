import React, {Component} from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: []
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(b => b.id !== id)
        })
    }
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (
        <Box width={box.width} height={box.height} key={box.id} color={box.color} removeBox= {() => this.remove(box.id)} />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <BoxForm createBox = {this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList;