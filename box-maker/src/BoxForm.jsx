import React, {Component} from 'react';
import uuid from 'uuid/v4';

class BoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '',
            height: '',
            color: '',
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnchange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const newBox = {...this.state, id:uuid()};
        this.props.createBox(newBox);
        this.setState({
            height:'',
            width:'',
            color:''
        })  
    }
    render() {
        const {height, width, color} = this.state;
        const enabled = height && width && color;
        return (
                <form onSubmit={this.handleSubmit}>
                   <div>
                        <label htmlFor="height">Height</label>
                        <input
                            id="height"
                            name="height"
                            value={this.state.height}
                            onChange={this.handleOnchange}
                        />
                    </div><br/>

                    <div>
                        <label htmlFor="width">Width</label>
                        <input
                            id="width"
                            name="width"
                            value={this.state.width}
                            onChange={this.handleOnchange}
                        />
                    </div>
                    <br/>
                   <div>
                    <label htmlFor="color">Color</label>
                        <input
                            id="color"
                            value={this.state.color}
                            name="color"
                            onChange={this.handleOnchange}
                        />
                   </div>
                    <br/>
                    <button disabled={!enabled}>Create Box</button>
                </form>
        )
    }
}

export default BoxForm;