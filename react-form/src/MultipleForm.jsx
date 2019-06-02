import React, {Component} from 'react';

class MultiForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event) {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="username"
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MultiForm;