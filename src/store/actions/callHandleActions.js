import { apiBaseUrl, callHandleArray } from './../helpers/common';
import toastr from 'reactjs-toastr';
import * as actionTypes from '../types/types';



export const fetchTab = (data) => {
   
    return {
        type: actionTypes.FETCH_TAB,
        payload: data.data
    }
}
export function updateCallHandle(data, id) {
    return dispatch => {

        let newData;
        if (data.tab === 'extension') {
            newData = { "extension": [data.extensionID_1, data.extensionID_2, data.extensionID_3], "answerd": data.answerd, "no_answer_vm": data.no_answer_vm, "no_answer_phone": data.no_answer_phone };
        } else if (data.tab === 'team') {
            newData = { "teamID": data.teamID, "teamIvr": data.teamIvr };
        } else if (data.tab === 'ivr_menu') {
            newData = [];
            [...Array(10).keys()].map((val, index) => {
                let dataObj = {};
                let subObj = {};
                dataObj['key'] = data[`keymap${val}`];
                dataObj['forward_to'] = data[`forward_to${val}`];
                dataObj['keyMapData'] = data[`keyMapData${val}`];
                [...Array(111).keys()].splice(callHandleArray(index), 10).map((v, i) => {
                    subObj[i] = [{ "key": data[`keymap${v}`], "forward_to": data[`forward_to${v}`], 'keyMapData': data[`keyMapData${v}`] }]
                    dataObj['data'] = subObj;
                })
                newData.push(dataObj);
            })

        } else {
            newData = [{ "phone": data.phone_1, "timeout": data.timeOut_1 }, { "phone": data.phone_2, "timeout": data.timeOut_2 }, { "phone": data.phone_3, "timeout": data.timeOut_3 }];
        }

        const postData = { id: id, voicefileID: data.Voicemail_ivrID, type: data.tab, data: newData }

        const request = new Request(`${apiBaseUrl}/adminPanel/call-handle`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': `${localStorage.getItem('token')}` })
        })
        return fetch(request).then(res => res.json()).then((data) => {

            if (data.ResponseCode === '1') {
                dispatch(fetchTab(data));
                toastr.success(data.ResponseText, { displayDuration: 1500 })

            } else {
                toastr.error(data.ResponseText, { displayDuration: 1500 })
                // this.setState({isSubmit: false, name: '', did_number: '', forward_to: '', call_record: ''});
            }

        }).catch((err) => {
            console.log(err)
        })
    }
}