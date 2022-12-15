import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import { BsGear } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { FiBell } from 'react-icons/fi';

const SearchBar = () => {
  return (
      <div className='searchbar p-0 m-0 container-fluid '>
          <div className="row p-0 m-0">
              <div className="col searchbox px-4 py-1 pt-3 m-0">
                  <div className="left-align pt-2">
                  <BsSearch/>
                  <input className=' mx-3 ' placeholder='Type to search...' type="search" />
                  </div>
                  <div className="right-align d-flex  flex-row">
                  <div className="icon-set d-flex pt-2 flex-row ">
                  <div className="px-2"> <BsGear /> </div>
                  <div className="px-2"> <BiMessageDetail/> </div>
                  <div className="px-2"><FiBell/></div>
                  </div>
                  <div className="details mx-2 detail-font text-center">
                      <h5 style={{fontSize:'small'}}>Thomas Brown</h5>
                      <p>Developer</p> 
                  </div>
                  <img src="https://img.icons8.com/bubbles/512/user.png" alt="user" />
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default SearchBar
