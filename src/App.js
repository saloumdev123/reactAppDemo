import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Employee from './Employee';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeDetail from './EmployeeDetail';

function App() {
  return (
    <div className="App">
      <h1>React Crud Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Employee />}></Route>
          <Route  path='/employee/create' element={<EmployeeCreate />}></Route>
          <Route  path='/employee/edit/:empId' element={<EmployeeEdit/>}></Route>
          <Route  path='/employee/detail/:empId' element={<EmployeeDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
