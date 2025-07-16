import React from 'react';
import { Sidebar } from '../components/Sidebar';
import RegisteredCases from '../components/RegisteredCases';

const page = () => {
  return (
 <div>
     <div className='flex flex-row gap-4 p-8'>
        <Sidebar/>

        <RegisteredCases/>
     </div>
    </div>
  )
}

export default page
