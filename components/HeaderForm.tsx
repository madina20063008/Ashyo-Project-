import React from 'react'
import Button from './Button'
import { ArrowDownIcon, SearchIcon } from '@/assets/icons'
import Input from './Input'

function HeaderForm() {
    return (
        <div className='flex items-center gap-[10px]'>
            <Button title='Kategorya' iconPosition='right' icon={<ArrowDownIcon />} />
            <div className='w-[518px] relative flex'>
                <Input extraStyle='!w-full' placeholder='What are you looking for?' type='text' />
                <Button extraStyle=' absolute top-0 bottom-0 right-0 !w-[48px] !h-[100%] !p-0' iconPosition='right' icon={<SearchIcon />} />
            </div>
        </div>
    )
}

export default HeaderForm