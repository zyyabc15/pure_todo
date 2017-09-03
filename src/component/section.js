import React, { Component } from 'react';
import Item from './item';

class Section extends Component {
    toggle = (index) => {
        this.props.toggle(index);
    }
    
    render() {
        let items4Show = this.props.items4Show;
        return (
            <div>
                {items4Show.map((item, index) => {
                    return <Item key={index} index={index} item={item} editItem={this.props.editItem} toggle={this.toggle} />
                })}
            </div>
        )
    }

}
export default Section;