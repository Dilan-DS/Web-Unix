import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Videos from './pages/Videos'
import SobreCurso from './pages/SobreCurso'
import QuicesPage from './pages/Quices'            
import QuizSemana1 from './pages/QuicesSemana1'    
import QuizSemana2 from './pages/QuicesSemana2'
import QuizSemana3 from './pages/QuicesSemana3'
import QuizSemana4 from './pages/QuicesSemana4'
import QuizSemana5 from './pages/QuicesSemana5'
import QuizSemana6 from './pages/QuicesSemana6'
import QuizSemana7 from './pages/QuicesSemana7'
import QuizSemana8 from './pages/QuicesSemana8'
import Recursos from './pages/Recursos'
import Contacto from './pages/Contacto'
import Equipo from './pages/Equipo'
import Progreso from './pages/Progreso';
import Semanas from './pages/Semanas'
import Semana1 from './pages/Semana1'
import Semana2 from './pages/Semana2'
import Semana3 from './pages/Semana3'
import Semana4 from './pages/Semana4'
import Semana5 from './pages/Semana5'
import Semana6 from './pages/Semana6'
import Semana7 from './pages/Semana7'
import Semana8 from './pages/Semana8'

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="contenido-principal">
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Página principal */}
            <Route path="/" element={<Home />} />

            {/* Rutas generales */}
            <Route path="/sobre-curso" element={<SobreCurso />} />
            <Route path="/semanas" element={<Semanas />} />
            <Route path="/quices" element={<QuicesPage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/equipo" element={<Equipo />} />


            {/* Semanas individuales */}
            <Route path="/semana1" element={<Semana1 />} />
            <Route path="/semana2" element={<Semana2 />} />
            <Route path="/semana3" element={<Semana3 />} />
            <Route path="/semana4" element={<Semana4 />} />
            <Route path="/semana5" element={<Semana5 />} />
            <Route path="/semana6" element={<Semana6 />} />
            <Route path="/semana7" element={<Semana7 />} />
            <Route path="/semana8" element={<Semana8 />} />

            {/* Quices individuales */}
            <Route path="/quiz-1" element={<QuizSemana1 />} />
            <Route path="/quiz/semana2" element={<QuizSemana2 />} />
            <Route path="/quiz/semana3" element={<QuizSemana3 />} />
            <Route path="/quiz/semana4" element={<QuizSemana4 />} />
            <Route path="/quiz/semana5" element={<QuizSemana5 />} />
            <Route path="/quiz/semana6" element={<QuizSemana6 />} />
            <Route path="/quiz/semana7" element={<QuizSemana7 />} />
            <Route path="/quiz/semana8" element={<QuizSemana8 />} />

            <Route path="/progreso" element={<Progreso />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
