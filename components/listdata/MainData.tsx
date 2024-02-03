import React from 'react'
import dummy from '@/dummy'
import ListWrapper from './ListWrapper'

const MainData = () => {
  return (
    <div>
        {dummy.map((item, idx)=>(
            <ListWrapper
                data ={item}/>
        ))}
    </div>
  
  )
}

export default MainData