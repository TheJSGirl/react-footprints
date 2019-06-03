import React, {Component} from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: [
                {
                    width: '',
                    height: '',
                    color: ''
                }
            ]
        }
        this.create = this.create.bind(this);
    }
    create(newBox) {
        console.log("state---", newBox)
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    render() {
        const boxes = this.state.boxes.map((box, i) => (
        <Box width={box.width} height={box.height} key={i} color={box.color} />
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