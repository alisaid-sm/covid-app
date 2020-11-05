import { combineReducers } from 'redux'

import country from './country'
import corona from './corona'

const reducers = combineReducers({
    country,
    corona
})

export default reducers