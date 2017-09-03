import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Header extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    handleKeyPress = e => {
        if (e.which === 13 && this.state.value !== "") {
            this.props.addItem(this.state.value);
            this.setState({
                value: ""
            })
        }

    }
    render() {
        return (
            <div>
                <h2>TODOS</h2>
                <input type="checkBox"></input>
                <input type="text" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
            </div>
        )
    }
}

Header.propTypes = {
    addItem: PropTypes.func.isRequired
}
export default Header;