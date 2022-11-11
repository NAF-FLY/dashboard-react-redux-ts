import React from 'react'
import Remove from '../assets/images/icon-remove.svg'

export default function Badge({
	variant = 'basic',
	colorScheme = 'light',
	children,
	onClear,
	onClick,
}: BadgeProps): JSX.Element {
	return (
		<div
			className={`badge badge--${variant} badge--${colorScheme}`}
			onClick={onClick}
		>
			<span>{children}</span>
			{variant === 'clearable' && (
				<div className='badge-remover' onClick={onClear}>
					<img src={Remove} alt='remove' />
				</div>
			)}
		</div>
	)
}

type BadgeProps = {
	variant: 'basic' | 'clearable' | 'rounded'
	colorScheme: 'light' | 'primary' | 'dark'
	children: React.ReactNode
	onClear?: (e: React.MouseEvent) => void
	onClick?: (e: React.MouseEvent) => void
}
