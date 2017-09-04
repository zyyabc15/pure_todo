import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Footer extends Component {
    changeType = (e) => {
        this.props.changeType(e.target.innerText);
    }
    render() {
        return (
            <div className="footer">
                <label>{this.props.activeNum} items left</label>
                <button onClick={this.changeType}>All</button>
                <button onClick={this.changeType}>Active</button>
                <button onClick={this.changeType}>Completed</button>
                <button className={this.props.showClearAll ? "clearAll" : "clearAll hide"} onClick={this.props.clearAll}>Clear Completed</button>
            </div>
        )
    }
}
Footer.propTypes = {
    changeType: PropTypes.func.isRequired,
    activeNum: PropTypes.number.isRequired,
    clearAll: PropTypes.func.isRequired,
    showClearAll: PropTypes.bool.isRequired,
}
export default Footer;