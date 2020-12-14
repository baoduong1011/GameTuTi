import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Bot extends Component {
    render() {
        let keyFrame = `@keyframes randomItem${Date.now()} {
            from {top: 0px;}
            to {top:30px;}
    }`
        return (
            <div className="playerBot">     
            <style>
                {keyFrame}
            </style>
                <div className="theThink" style={{position:'relative'}}>
                    <img style={{position:'absolute',animation:`randomItem${Date.now()} 0.5s`,left:'10%',top:'10%'}} src={this.props.computer.hinhAnh} width='70' height='70' />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/playerComputer.png" width='200' height='200' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.TaiNguyenGame.computer
    }
}

export default connect(mapStateToProps) (Bot)
