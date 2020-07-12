// import { combineReducers} from 'redux';
// import contact from './contact.reducer';

// export default combineReducers({
//     contact: contact
// });

import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { patient } from './patient.reducer';

const rootReducer = combineReducers({

    authentication,
    patient


 });

export default rootReducer;