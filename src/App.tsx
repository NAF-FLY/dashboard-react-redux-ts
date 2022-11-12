import React from 'react'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { FilterPanel } from './components/FilterPanel'
import { JobList } from './components/JobList'
import { TheHeader } from './components/TheHeader'

import { addPositions } from './store/position/positionActions'

import data from './mock/data.json'

function App(): JSX.Element {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addPositions(data))
	}, [dispatch])
	return (
		<div>
			<TheHeader />
			<div className='container'>
				<FilterPanel />
				<JobList />
			</div>
		</div>
	)
}

export default App
