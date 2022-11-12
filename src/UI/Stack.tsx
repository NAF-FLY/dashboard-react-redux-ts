import React from 'react'

const Stack = ({ children, pos }: StackProps): JSX.Element => (
	<div
		className='stack'
		style={{
			justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
		}}
	>
		{children}
	</div>
)

export { Stack }

type StackProps = {
	children: React.ReactNode
	pos?: string
}
