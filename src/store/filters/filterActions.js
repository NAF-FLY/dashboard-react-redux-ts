export const ADD_FILTER = 'ADD_POSITIONS'
export const REMOVE_FILTER = 'REMOVE_POSITIONS'
export const CLEAR_FILTER = 'CLEAR_POSITIONS'

export const addFilter = filter => ({
	type: ADD_FILTER,
	filter,
})

export const removeFilter = filter => ({
	type: REMOVE_FILTER,
	filter,
})

export const clearFilter =  {
	type: CLEAR_FILTER,
}
