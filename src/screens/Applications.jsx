import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import SearchBar from '../components/searchbar/SearchBar'


const Applications = () => {
  return (
    <div className="container-fluid m-0 p-0">
    <div className="row m-0 p-0">
       <div className="col-2 border-right m-0 p-0 left">
       <SideBar/>
       </div>
             <div className="col-10 p-0 m-0 right">
                 <div className="row p-0 m-0">
                     <div className="col p-0 m-0">
                     <SearchBar/>
                     </div>
                  </div>
                  <div className='col-10 text h-100 text-center'>
      <h4>this is applications page</h4>
    </div>
              </div> 
          </div>
          </div>
  )
}

export default Applications
