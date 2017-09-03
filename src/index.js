import React, { Component } from 'react';
import { render } from 'react-dom';
import Immutable from 'immutable';
import Header from './component/header';
import Section from './component/section';
import Footer from './component/footer';
import './style.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            itemList: [{ value: 123, active: true }, { value: 456, active: true }],
            showType: 'All'
        };
    }
    addItem = (value) => {
        let itemList = this.state.itemList;

        this.setState({
            data: itemList.push({ value: value, active: true })
        })
    }
    editItem = (index, value) => {
        let itemList = Immutable.fromJS(this.state.itemList).updateIn([index], item => item.set('value', value));

        this.setState({
            itemList: itemList.toJS()
        })
    }
    changeType = (type) => {
        this.setState({
            showType: type
        })
    }
    getItems4Show = () => {
        
        let itemList = this.state.itemList;
        let items4Show;
        switch (this.state.showType) {
            case 'All':
            items4Show = this.state.itemList;
                break;
            case 'Active':
            items4Show=  itemList.filter(v => v.active=== true);
                break;
            case 'Completed':
            items4Show= itemList.filter(v => v.active=== false);
                break;
            default:
            items4Show=this.state.itemList;
                break;
        }
        return items4Show;
        // let {showType}= this.state;
        // console.log(showType);
        // if(showType === 'All'){
        //     return this.state.itemList;
        // }else if(showType ==='Active'){
        //     itemList = itemList.filter(v => v.active=== true);
        //     return itemList;
        // }else if(showType ==='Completed'){
        //     return itemList.filter(v => v.active === false);
        // }
        
        

    }
    render() {
        let items4Show = this.getItems4Show();
        return (
            <div>
                <Header addItem={this.addItem} />
                <Section items4Show={items4Show} editItem={this.editItem} />
                <Footer changeType={this.changeType} />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
