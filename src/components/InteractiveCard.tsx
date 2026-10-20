'use client'

import type { ReactNode, SyntheticEvent } from 'react'

export default function InteractiveCard({ children }: { children: ReactNode }) {

	function onCardMouseAction(event: SyntheticEvent<HTMLDivElement>) {
		if (event.type === 'mouseover') {
		event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200')
		event.currentTarget.classList.remove('shadow-lg', 'bg-white')
    }
    else {
		event.currentTarget.classList.add('shadow-lg', 'bg-white')
		event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200')
    }
	}

	return (
		<div
			className="w-full overflow-hidden rounded-lg bg-white shadow-lg transition"
			onMouseOver={onCardMouseAction}
			onMouseLeave={onCardMouseAction}
		>
			{children}
		</div>
	)
}
