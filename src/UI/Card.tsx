import React from 'react'

const Card = ({ children, isFeatured, className }: CardProps): JSX.Element => {
	return (
		<div
			className={`card${isFeatured ? ' card--featured' : ''}${
				className ? ' ' + className : ''
			}`}
		>
			{children}
		</div>
	)
}

export { Card }

type CardProps = {
	children: React.ReactNode
	isFeatured?: boolean
	className?: string
}
