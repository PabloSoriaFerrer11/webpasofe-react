import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { FlutterAMMPage } from './pages/proyects/FlutterAMMPage';
import { WIPPage } from './pages/WIPPage';
import { TodoPage } from './pages/TodoPage';
import { HereticsPage } from './pages/proyects/HereticsPage';
import { StrategyPage } from "./pages/proyects/StrategyPage";

import './css/styles.css'




function App() {

  return (
    <BrowserRouter>
      <PageHeader />

 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/todo" element={<TodoPage />} />

        <Route path="/WIP" element={<WIPPage />} />
        
        <Route path="/proyectos/flutter-amm" element={<FlutterAMMPage />} />
        <Route path="/proyectos/Heretics" element={<HereticsPage />} />
        <Route path="/proyectos/estrategy" element={<StrategyPage />} />
      </Routes>
      <PageFooter />
    </BrowserRouter>

  )
}

export default App
