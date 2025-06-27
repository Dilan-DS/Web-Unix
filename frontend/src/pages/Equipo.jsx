import React from 'react'
import '../styles/pages/Equipo.css'

const integrantes = [
  {
    nombre: "Deyvi Masache",
    telefono: "+593 98 885 7954",
    correo: "deyvimasache@gmail.com",
    imagen: "/assets/deyvi.png"
  },
  {
    nombre: "Stephano Dilan Gálvez",
    telefono: "+593 990 706 018",
    correo: "stephanogalvez100@gmail.com",
    imagen: "/assets/stephano.png"
  },
  {
    nombre: "Jhosty Jhair Soto León",
    telefono: "+593 99 104 2652",
    correo: "sotonel2005@gmail.com",
    imagen: "/assets/jhosty.png"
  }
]

const Equipo = () => {
  return (
    <section className="team-section">
      <h2>👨‍💻 Conoce al equipo de desarrollo</h2>
      <div className="team-grid">
        {integrantes.map((dev, index) => (
          <div key={index} className="team-card">
            <img src={dev.imagen} alt={dev.nombre} className="team-img" />
            <h3>{dev.nombre}</h3>
            <p><strong>📞</strong> {dev.telefono}</p>
            <p><strong>📧</strong> {dev.correo}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Equipo
