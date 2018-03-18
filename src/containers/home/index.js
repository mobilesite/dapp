import React, { Component, Fragment } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/checkbox';

export default class Home extends Component {
    render(){
        return (
            <div>
                <h2>Home</h2>
                <Button>测试</Button><br/>
                <Link to="/my">我的</Link><br/>
                <br/><br/>
                <Checkbox checked="true" label="我同意用户条款"></Checkbox>
            </div>
        )
    }
}