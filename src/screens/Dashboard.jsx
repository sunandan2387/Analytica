import React from 'react'
import './Dashboard.css'
import SideBar from '../components/sidebar/SideBar'
import SearchBar from '../components/searchbar/SearchBar'
import Progress from '../components/progress/Progress'


const Dashboard = () => {
  return (
    <div className="container-fluid m-0 p-0">
     <div className="row m-0 p-0">
        <div className="col-2 m-0 p-0 left">
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
                    <div className="col-12 bgWhite d-flex flex-column py-3 h-40 mb-2">
                      <h6 className='text-secondary greyColor'>Total Income</h6>
                      <div className="wrap my-2 d-flex align-items-center">
                      <h4 className='fw-bold'>$124,563.00</h4>
                      <h6 className='ms-3 highlight p-2 py-1'>+6.9%</h6>
                      </div>
                      <Progress/>
                      <p className='greyColor' style={{fontSize: 'small'}}>Yearly Goal</p>
                    </div>
                    <div className="col-12 h-55 bgWhite mt-2">wfaf</div>
                  </div>
                </div>
                <div className="col bgWhite mx-4"></div>
              </div>
              <div className="row h-60 p-0 m-0 bg-warning">etwetrw</div>
                      </div>
                  </div>
                  
        </div>
     </div>
    </div>
  )
}

export default Dashboard
