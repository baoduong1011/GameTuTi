import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQua extends Component {
    render() {
        return (
            <div>
                <div  className="container text-center">
                                <h1 className="display-5 text-warning">{this.props.ketQua}<span className="display-4 text-warning"></span></h1>
                                <h1 className="display-5 text-success">Số bàn thắng:<span className="display-4 text-warning">{this.props.soBanThang}</span></h1>
                                <h1 className="display-5 text-success">Số bàn chơi:<span className="display-4 text-primary">{this.props.soBanChoi}</span></h1>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ketQua: state.TaiNguyenGame.ketQua,
        soBanThang:state.TaiNguyenGame.soBanThang,
        soBanChoi: state.TaiNguyenGame.soBanChoi
    }
}


export default connect (mapStateToProps) (KetQua)