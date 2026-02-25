import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';

import './css/styles.css'



function App() {

  return (
    <BrowserRouter>
      <PageHeader />

 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        
      </Routes>
      <PageFooter />
    </BrowserRouter>

  )
}

export default App
