import Dashboard from "./screens/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Discover from "./screens/Discover";
import Users from "./screens/Users";
import Documents from './screens/Documents'
// import Applications from './screens/Applications'
// import Pages from './screens/Pages'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
           <Route path="/discover" element={<Discover />} />
          <Route path="/users" element={<Users />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </BrowserRouter> */}
      hello
      
    </div>
  );
}

export default App;

