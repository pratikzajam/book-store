import {legacy_createStore} from 'redux'
import cartReducer from './reducer'

const store=legacy_createStore(cartReducer)

export default store