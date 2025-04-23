import { CardIcon, Compareicon, LikeIcon, ProfileIcon } from '@/assets/icons'
import HeaderAction from '@/components/HeaderAction'
import { HeaderCenterType } from '@/types/HeaderCenterType'
import React from 'react'

function HeaderCenterActions() {
    const actionList = [
        {
            id: 1,
            icon: <Compareicon/>,
            actionCount: 2
        },
        {
            id: 2,
            icon: <LikeIcon/>,
            actionCount: 11
        },
        {
            id: 3,
            icon: <CardIcon/>,
            actionCount: 7
        },
        {
            id: 4,
            icon: <ProfileIcon/>,
            actionCount: 0
        }
    ]
  return (
    <div className='flex gap-[15px]'>
        {actionList.map((item:HeaderCenterType) => <HeaderAction key={item.id} actionCount={item.actionCount} icon={item.icon}/>)}
    </div>
  )
}

export default HeaderCenterActions