import React, { Component } from 'react'
class Footer extends Component {
    changeType = (e) => {
        this.props.changeType(e.target.innerText);
    }
    render() {
        return (
            <div>
                <button onClick={this.changeType}>All</button>
                <button onClick={this.changeType}>Active</button>
                <button onClick={this.changeType}>Completed</button>
                <button >Clear Completed</button>
            </div>
        )
    }
}
export default Footer;