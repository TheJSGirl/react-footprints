import React, {Component} from 'react';

class BoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '',
            height: '',
            color: ''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnchange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createBox(this.state);  
    }
    render() {
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
                    <button>Create Box</button>
                </form>
        )
    }
}

export default BoxForm;