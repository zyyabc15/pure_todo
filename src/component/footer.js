import React, { Component } from 'react'
class Footer extends Component {
    changeType = (e) => {
        this.props.changeType(e.target.innerText);
    }
    render() {
        return (
            <div>
                <label>{this.props.activeNum} items left</label>
                <button onClick={this.changeType}>All</button>
                <button onClick={this.changeType}>Active</button>
                <button onClick={this.changeType}>Completed</button>
                <button onClick = {this.props.clearAll}>Clear Completed</button>
            </div>
        )
    }
}
export default Footer;