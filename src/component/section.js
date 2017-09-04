import React, { Component } from 'react';
import Item from './item';
import PropTypes from 'prop-types'

class Section extends Component {
    render() {
        let items4Show = this.props.items4Show;
        return (
            <div className="section">
                {items4Show.map((item, index) => {
                    return <Item key={index} index={index} item={item} editItem={this.props.editItem} toggle={this.props.toggle} delItem={this.props.delItem} />
                })}
            </div>
        )
    }

}
Section.propTypes = {
    items4Show: PropTypes.array.isRequired,
    editItem: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}
export default Section;