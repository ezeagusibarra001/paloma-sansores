import { Icon } from 'mdc-ui'
import React from 'react'

type NoteCardProps = {
    icon: React.ReactNode
    title: string
    description: string
}

export default function NoteCard({ icon, title, description }: NoteCardProps) {
    return (
        <div className='flex items-center justify-evenly w-4/5 mx-auto shadow-xl px-4 py-6 rounded-3xl lg: flex-col items-start px-10 py-8 w-3/4'>
            <div className='w-12 h-12 xl:w-14 h-14'>{icon}</div>
            <div className='w-3/5'>
                <span className='uppercase text-sm font-bold text-violet-900 lg:text-lg xl:text-2xl'>{title}</span>
                <p className='text-xs lg:text-sm xl:text-lg'>{description}</p>
            </div>
        </div>
    )
}

