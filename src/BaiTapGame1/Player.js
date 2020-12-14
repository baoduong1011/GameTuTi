import React, { Component } from 'react'
import {connect} from 'react-redux';

class Player extends Component {


    renderArray = () => {
        return this.props.mangDatCuoc.map((item,index) => {

            let border= { };
            if(item.key) {
                border={border:'3px solid orange' };
            }



            return <div className='col-4'key={index} >
            <button onClick={ () => {   
                {this.props.datCuoc(item.ma)}
            }} style={border} className='btn btn-primary'><img src={item.hinhAnh} width='50' height='50' /></button>
        </div>
        })
    }

    render() {
        return (
            
            <div className="playerGame">
                <div className="theThink">
                    <img src={this.props.mangDatCuoc.find(item => item.key === true).hinhAnh} width='80' height='80' />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/player.png" width='200' height='200' />

                <div className="row">
                   {this.renderArray()}
                    {/* <div className='col-4'>
                        <button className='btn btn-primary'><img src='./img/bao.png' width='50' height='50' /></button>
                    </div>
                    <div className='col-4'>
                    <button className='btn btn-primary'><img src='./img/bua.png' width='50' height='50' /></button>
                    </div>
                    <div className='col-4'>
                    <button className='btn btn-primary'><img src='./img/keo.png' width='50' height='50' /></button>
                    </div> */}
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.TaiNguyenGame.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type:'CHON_KBB',
                maCuoc

            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Player)