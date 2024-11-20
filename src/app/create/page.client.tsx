'use client'

import React from 'react'
import { Cat20TokenForm } from '@/components/cat20-token-form'
import { BackgroundEffect } from '@/components/ui/backgroundEffect'

const Create: React.FC = () => {
	return (
		<div className="container flex flex-col items-center justify-center h-full flex-grow relative">
			<BackgroundEffect scale={500} className='absolute' />
			<Cat20TokenForm />
		</div>
	)
}

export default Create
