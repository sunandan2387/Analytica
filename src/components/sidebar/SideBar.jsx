import './SideBar.css'
import { BsClock } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { VscExtensions } from 'react-icons/vsc';
import { BsNewspaper } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { BsCardList } from 'react-icons/bs';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

 const SideBar = () => {
   return (
     <div className="sidebar m-0 p-0 container-fluid">
       <div className="row m-0 p-0">
         <div className="col m-0 p-0">
           <div className="row mb-3 m-0 p-0 border-gray">
             <div className="d-flex flex-row col px-3 py-2 pb-3 m-0 p-0">
                  <img loading='lazy' src="https://img.icons8.com/cute-clipart/512/rocket.png" alt="rocket" />
                  <h3 className='pt-2'> &nbsp; Artemis</h3>
             </div>
           </div>
          
       <div className="row mb-2 m-0 p-0">
             <div className="col ">
             <div className="text py-1">
             <span style={{ fontSize: "small", fontWeight: 500 }}>MAIN</span>
             </div>
           <ul className='p-0 m-0'>
             <Link className='removestyle' to="/"><li className='py-2 mx-0 px-2 f-size'><BsClock/> &nbsp; Dashboard</li></Link>
             <Link className='removestyle' to="/discover"><li className='py-2 px-2 f-size'><BsGlobe/> &nbsp; Discover</li></Link>
             <Link className='removestyle' to="/users"><li className='py-2 px-2 f-size'><FiUser/> &nbsp; Users</li></Link>
             <Link className='removestyle' to="/documents"><li className='py-2 px-2 f-size'><BsBook/> &nbsp; Documents</li></Link>
             <Link className='removestyle' to="/applications"><li className='py-2 px-2 f-size'><VscExtensions/> &nbsp; Applications</li></Link>
             <Link className='removestyle' to="/pages"><li className='py-2 px-2 f-size'>< BsNewspaper/> &nbsp; Pages</li></Link>
           </ul>
         </div>
       </div>
      
       <div className="row m-0 p-0">
             <div className="col">
             <div className="text pt-2">
             <h6 style={{ fontSize: "small", fontWeight: 500 }}>SECONDARY</h6>
             </div>
           <ul className='m-0 p-0'>
             <li className='py-2 px-2 f-size'><BiHelpCircle/> &nbsp; Support Center</li>
             <li className='py-2 px-2 f-size'><HiOutlineInboxIn/> &nbsp; Inbox</li>
             <li className='py-2 px-2 f-size'><AiOutlineFolderOpen/> &nbsp; Fie Manager</li>
             <li className='py-2 px-2 f-size'><BsCardList/> &nbsp; Data List</li>
           </ul>
         </div>
       </div>

       <div className="row m-0 p-0">
         <div className="col">
           <ul>
             <li className='py-2 px-2 f-size'><BsGear/> &nbsp; Settings</li>
             <li className='py-2 px-2 f-size'><BiLogOut/> &nbsp; Log Out</li>
           </ul>
         </div>
       </div>

       </div>
       </div>
     </div>   
   );
 };

 export default SideBar;
