import { createStore } from 'redux'
import { rootReducer } from './rootReducer'

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTEBSION__ && window.__REDUX_DEVTOOLS_EXTEBSION__()
)

export { store }
