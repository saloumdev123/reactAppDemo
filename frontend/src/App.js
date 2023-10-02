import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import HomePage from './Folders/HomePage';
import PosPage from './Folders/PosPage';


const App = () => {
  return (
   <Router>
     <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/pos' element={<PosPage />}/>
     </Routes>
   </Router>
  )
}

export default App

