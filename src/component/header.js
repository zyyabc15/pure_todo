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
    toggleAll = (e) => {
        this.props.toggleAll(e.target.checked);
    }
    render() {
        return (
            <div className="header">
                <h2>TODOS</h2>
                <div>
                    <input type="checkBox" onChange={this.toggleAll} checked={this.props.checkState}></input>
                    <input type="text" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange} ></input>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    addItem: PropTypes.func.isRequired,
    toggleAll: PropTypes.func.isRequired,
    checkState: PropTypes.bool.isRequired
}
export default Header;