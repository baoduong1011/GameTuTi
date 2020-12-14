import React, { Component } from 'react';
import './BaiTap.css';
import Bot from './Bot';
import KetQua from './KetQua';
import Player from './Player';
import {connect} from 'react-redux';
class BaiTapGame extends Component {


    render() {
       
        return (
            <div className="game">
                <div className="row text-center mt-5">
                    <div className='col-4'>
                        <Player/>
                    </div>
                    <div className='col-4'>
                        <KetQua/>
                        <button onClick={() => {
                                {this.props.playGame()}
                        }}  className="btn btn-success">PLAY GAME</button>
                    </div>
                    <div className='col-4'>
                        <Bot/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count =0;

            let randomComputerItem = setInterval(() => {
                dispatch({
                    type:'RANDOM',
                })
                count++;
                if(count>10) {
                    clearInterval(randomComputerItem);
                    dispatch({
                        type:'END_GAME',
                    })
        
                }
            },100)
            

           
            
        }
    }
}

export default connect(null,mapDispatchToProps) (BaiTapGame);
