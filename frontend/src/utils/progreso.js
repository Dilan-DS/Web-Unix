// 📦 Obtiene toda la data del progreso desde localStorage
const obtenerData = () => JSON.parse(localStorage.getItem("progresoCurso")) || {};

// 💾 Guarda la data completa en localStorage
const guardarData = (data) => localStorage.setItem("progresoCurso", JSON.stringify(data));

// Inicializa estructura vacía para una semana si no existe
const inicializarSemana = (semanaId) => {
  const data = obtenerData();
  if (!data[semanaId] || typeof data[semanaId] !== 'object') {
    data[semanaId] = {
      objetivos: false,
      video: false,
      quiz: false,
      practica: false,
      notaQuiz: null
    };
    guardarData(data);
  }
};

// Marca una parte (video, objetivos, practica o quiz) como completada
export const marcarParteComoCompletada = (semanaId, parte) => {
  inicializarSemana(semanaId);
  const data = obtenerData();
  data[semanaId][parte] = true;
  guardarData(data);
};

// Guarda la nota obtenida en el quiz y marca como completado
export const guardarNotaQuiz = (semanaId, nota) => {
  inicializarSemana(semanaId);
  const data = obtenerData();
  data[semanaId].notaQuiz = nota;
  data[semanaId].quiz = true;
  guardarData(data);
};

// Calcula el porcentaje de progreso de una semana
export const obtenerProgresoSemana = (semanaId) => {
  const data = obtenerData();
  const semana = data[semanaId];
  if (!semana || typeof semana !== 'object') return 0;
  const partes = ['objetivos', 'video', 'quiz', 'practica'];
  const completadas = partes.filter(p => semana[p]).length;
  return completadas * 25;
};

// 📈 Devuelve la nota guardada del quiz
export const obtenerNotaQuiz = (semanaId) => {
  const data = obtenerData();
  return data[semanaId]?.notaQuiz || null;
};

// 📅 Lista de todas las semanas del curso
export const obtenerTodasLasSemanas = () => [
  { id: "semana1", titulo: "Semana 1: Logs", ruta: "/semana1" },
  { id: "semana2", titulo: "Semana 2: Awk", ruta: "/semana2" },
  { id: "semana3", titulo: "Semana 3: Python Scripts", ruta: "/semana3" },
  { id: "semana4", titulo: "Semana 4: Perl Scripting", ruta: "/semana4" },
  { id: "semana5", titulo: "Semana 5: Evaluacion", ruta: "/semana5" },
  { id: "semana6", titulo: "Semana 6", ruta: "/semana6" },
  { id: "semana7", titulo: "Semana 7", ruta: "/semana7" },
  { id: "semana8", titulo: "Semana 8", ruta: "/semana8" },
  { id: "semana9", titulo: "Semana 9", ruta: "/semana9" },
  { id: "semana10", titulo: "Semana 10", ruta: "/semana10" },
  { id: "semana11", titulo: "Semana 11", ruta: "/semana11" },
  { id: "semana12", titulo: "Semana 12", ruta: "/semana12" },
  { id: "semana13", titulo: "Semana 13", ruta: "/semana13" },
  { id: "semana14", titulo: "Semana 14", ruta: "/semana14" },
  { id: "semana15", titulo: "Semana 15", ruta: "/semana15" },
  { id: "semana16", titulo: "Semana 16", ruta: "/semana16" }
];


// 📊 Calcula el promedio global de progreso
export const obtenerProgresoGlobal = () => {
  const semanas = obtenerTodasLasSemanas();
  const total = semanas.length;
  const suma = semanas.reduce((acc, semana) => acc + obtenerProgresoSemana(semana.id), 0);
  return total ? Math.round(suma / total) : 0;
};