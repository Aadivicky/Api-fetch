import './App.css';
import Tab from './Api fetch/Tab';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Api fetch/Header';
import Details from './Api fetch/Details';




function App() {
  return (
    <div>

 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Header/>}></Route>
  <Route path='cards' element={<Tab/>}/>
  <Route path='cards/details/:id' element={<Details/>}/>
 </Routes>
 </BrowserRouter>

</div>
  );
}

export default App;