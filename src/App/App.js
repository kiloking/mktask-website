import React from "react";
import './App.scss'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from '../Components/PublicPageLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/"  element={<PublicPageLayout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
