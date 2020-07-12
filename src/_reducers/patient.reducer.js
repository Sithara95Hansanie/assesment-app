const initialState = { 
    anchor: 'left',
    patient: [],
    open: false,
    id: '',
    name: '',
    mobile: '',
    phone_number: '',
    address: ''
};

export function patient(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PATIENT':
            return {
                ...state,
                patient: action.patient
            };
            case 'PATIENT_DETAIL':
                return {
                    ...state,
                    id: action.id,
                    name: action.name,
                    mobile: action.mobile,
                    phone_number: action.phone_number,
                    address: action.address
                };
            case "USER_UPDATED":
                return state;
            case "HANDLE_ON_CHANGE":
                return {
                    ...state,
                    [action.props]: action.value
                };
        default:
            return state
     }
}