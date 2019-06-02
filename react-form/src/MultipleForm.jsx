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
                    <label htmlFor="name">Name</label>
                    <input 
                        name="name"
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="username">Username</label>

                    <input
                        name="username"
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>

                    <input
                        name="password"
                        id="password"
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