import React from 'react'
import './Dashboard.css'
import SideBar from '../components/sidebar/SideBar'
import SearchBar from '../components/searchbar/SearchBar'
import Progress from '../components/progress/Progress'
import EnhancedTable from '../components/datatable/Table'
import Dropdown from '../components/dropdown/Dropdown'
import Barchart from '../components/barchart/Barchart.tsx'
import Areachart from '../components/areachart/Areachart.tsx'

const Dashboard = () => {
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
                  <div className="row p-0 m-0 analitics">
            <div className="col p-0 m-0 m-0 ">
              <div className="row h-60 py-3 px-5 mx-5 m-0">
                <div className="col mx-4">
                  <div className="row h-100 p-0 m-0">
                    <div className="col-12 bgWhite d-flex flex-column py-4 h-40 mb-2">
                      <h6 className='text-secondary greyColor'>Total Income</h6>
                      <div className="wrap my-1 d-flex align-items-center">
                      <h3 className='fw-bold'>$124,563.00</h3>
                      <h6 className='ms-3 highlight p-2 py-1'>+6.9%</h6>
                      </div>
                      <Progress/>
                      <p className='greyColor mt-2' style={{fontSize: 'small'}}>Yearly Goal</p>
                    </div>
                    <div className="col-12 pt-3 h-55 bgWhite mt-2">
                    <h6 className='text-secondary greyColor'>New Users</h6>
                      <div className="wrap my-2 d-flex align-items-center">
                      <h3 className='fw-bold'>94.2%</h3>
                      <h6 className='ms-3 highlight p-2 py-1'>+6.9%</h6>
                      </div>
                      <div className="hgraph">
                      <Barchart/>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col px-0 mx-0 bgWhite mx-4">
                  
                  <div className="upperpart py-3">
                    <div className=' d-flex justify-content-between px-3'>
                    <h3>Balance</h3>
                  <Dropdown/>
                    </div> 
                  </div>
                  <div className="middlepart">
                    <div className="row p-0 py-3 m-0">
                      <div className="col boderedcol pt-2 mx-2">
                      <h6 className='text-secondary greyColor'>Earnings</h6>
                      <div className="wrap my-2 d-flex align-items-center">
                      <h3 className='fw-bold'>43.41%</h3>
                      <h6 className='ms-3 highlight p-2 py-1'>+2.5%</h6>
                      </div>
                      </div>
                      <div className="col boderedcol pt-2 mx-2">
                      <h6 className='text-secondary greyColor'>Sales Value</h6>
                      <div className="wrap my-2 d-flex align-items-center">
                      <h3 className='fw-bold'>$95,422</h3>
                      <h6 className='ms-3 highlight p-2 py-1'>+13.5%</h6>
                      </div>
                    </div>
                    </div>
                    <div className='hgraph'>
                      <Areachart/>
                    </div>
                  </div>
              
                </div>
              </div>
              <div className="row h-60 mt-2 p-0 px-5 mx-5 m-0 ">
                <div className="col mx-4 pe-3 me-2">
                  <div className="table">
                   <EnhancedTable/>
                  </div>
                </div>
              </div>
            </div>
            </div>
                  
        </div>
     </div>
    </div>
  )
}

export default Dashboard
