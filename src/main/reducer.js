import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form"
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from '../common/tab/tabReducer'
import billingCycleReducer from "../billingCycle/billingCycleReducer";
import {toastr, reducer as toastrReducer} from "react-redux-toastr"
import AuthReducer from "../auth/authReducer";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export default rootReducer