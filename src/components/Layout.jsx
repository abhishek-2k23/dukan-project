import React from 'react';
import Header from './Header';
import Overview from './Overview';
const Layout = () => {
  return (
    <div className=' flex flex-col gap-2 w-full'>
        <Header/>
        <div className='pl-8'> 
          <Overview/>
        </div>
    </div>
  )
}

export default Layout;