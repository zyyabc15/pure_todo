import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditInput: false,
      value: this.props.item.value

    }
  }
  handleDoubleClick = (e) => {
    this.setState({
      showEditInput: true,
      value: e.target.innerText
    })
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleBlur = (e) => {
    this.setState({
      showEditInput: false
    })
    this.props.editItem(this.props.index, e.target.value);
  }
  handleKeyPress = (e) => {
    if (e.which === 13 && e.target.value !== "") {
      this.handleBlur(e);
    }
  }
  toggle = (e) => {
    this.props.toggle(this.props.index)
  }
  delItem = (index) => {
    this.props.delItem(this.props.index);
  }
  render() {

    let item = this.props.item;

    return (
      <div className="item">
        {this.state.showEditInput ?
          <input className="editInput"
            type="text"
            autoFocus="autofocus"
            value={this.state.value || ''}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onKeyPress={this.handleKeyPress} />
          :
          <div>
            <input type="checkBox" checked={!item.active} onChange={this.toggle} />
            <label className="content" onDoubleClick={this.handleDoubleClick}>{item.value}</label>
            <label className="delBut" onClick={this.delItem}>X</label>
          </div>
        }
      </div>
    )
  }
}
Item.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired
}
export default Item;