
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import LoginForm from './components/loginForm/LoginForm'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div>

      <BrowserRouter>

      <div>

      <Navbar/>
      <Sidebar/>

        <Routes>
      <Route path="/login" element={<LoginForm/>} /> 
      </Routes>

      </div>


      </BrowserRouter>


    </div>
  )
}

export default App
