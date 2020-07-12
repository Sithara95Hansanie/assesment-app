import { userService } from '../_services/';
import { history } from '../_helpers';

export const patientAction = {
    getPatient,
    getPatientById,
    onChangeProps,
    editPatientInfo,
    createPatient,
    deletePatientById
};
function getPatient(){
    return dispatch => {
        let apiEndpoint = 'patients';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changePatientsList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}
function createPatient(payload){
    return dispatch => {
        let apiEndpoint = 'patients/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/patient');
        })
    }
}

function getPatientById(id){
    return dispatch => {
        let apiEndpoint = 'patients/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editPatientsDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editPatientInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'patients/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/patient');
        })
    }
}
function deletePatientById(id){
    return dispatch => {
        let apiEndpoint = 'patients/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
             dispatch(deletePatientsDetails());
             dispatch(patientAction.getPatient());
        })
    };
}
export function changePatientsList(patient){
    return{
        type: "FETECHED_ALL_PATIENT",
        patient: patient
    }
}
export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function editPatientsDetails(patient){
    return{
        type: "PATIENT_DETAIL",
        id: patient._id,
        name: patient.name,
        mobile: patient.mobile,
        phone_number: patient.phone_number,
        address: patient.address
    }
}
export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }

}
export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }

}
export function deletePatientsDetails(){
    return{
        type: "DELETED_PATIENT_DETAILS"
    }
}