import { connect } from "react-redux";

const stateDefault = {
    mangDatCuoc: [
        {ma:'keo',hinhAnh:'./img/keo.png',key:true},
        {ma:'bua',hinhAnh:'./img/bua.png',key:false},
        {ma:'bao',hinhAnh:'./img/bao.png',key:false}
    ],
    ketQua: "I'm love you 3000!!",
    soBanChoi:0,
    soBanThang:0,
    computer: {ma:'keo',hinhAnh:'./img/keo.png'},
}

const TaiNguyenGame = (state = stateDefault , action) => {
    switch(action.type) {
        case 'CHON_KBB':{
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate=mangCuocUpdate.map((item,index) => {
                return {...item,key:false}
            })
            let index = mangCuocUpdate.findIndex(flag => flag.ma === action.maCuoc);
            if (index!==-1){
                mangCuocUpdate[index].key=true;
            }
            state.mangDatCuoc=mangCuocUpdate;
            return {...state};
        }

        case 'RANDOM' :{
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state}
        }

        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.key === true);
            let computer = state.computer;
            switch(player.ma) { 
                case 'bao' : 
                    if(computer.ma === 'bao') {
                        state.ketQua='Oh yeah baby!!!'
                    }
                    else if (computer.ma === 'keo') {
                        state.ketQua = 'You lose!!!'
                    }
                    else {
                        state.ketQua="I'm love you 3000!!";
                        state.soBanThang+=1;
                    }
                    break;


                    case 'bua' : 
                    if(computer.ma === 'bua') {
                        state.ketQua='Oh yeah baby!!!'
                    }
                    else if (computer.ma === 'bao') {
                        state.ketQua = 'You lose!!!'
                    }
                    else {
                        state.ketQua="I'm love you 3000!!";
                        state.soBanThang+=1;
                    }
                    break;    

                    case 'keo' : 
                    if(computer.ma === 'keo') {
                        state.ketQua='Oh yeah baby!!!'
                    }
                    else if (computer.ma === 'bua') {
                        state.ketQua = 'You lose!!!'
                    }
                    else {
                        state.ketQua="I'm love you 3000!!";
                        state.soBanThang+=1;
                    }
                    break;
                
                default: state.ketQua = "I'm love you 3000!!";
               
            }
            state.soBanChoi+=1;
            return {...state}
        }
        default : 
            return {...state};
    }
}

export default TaiNguyenGame;