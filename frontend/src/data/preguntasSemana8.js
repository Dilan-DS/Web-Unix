// Quiz8.js
const preguntasSemana8 = [
  {
    pregunta: "¿Qué comando se utiliza para realizar un bucle en Bash que itera hasta que una condición deje de cumplirse?",
    opciones: ["for", "while", "if", "case"],
    respuestaCorrecta: "while"
  },
  {
    pregunta: "¿Cuál es la estructura correcta de un bucle for en Bash?",
    opciones: [
      "for i < 10; do echo $i; done",
      "for i in {1..10}; do echo $i; done",
      "for (i=1; i<=10; i++) echo $i",
      "for $i in range(1,10); do echo $i; done"
    ],
    respuestaCorrecta: "for i in {1..10}; do echo $i; done"
  },
  {
    pregunta: "¿Qué hace el comando 'break' en un bucle?",
    opciones: [
      "Reinicia el bucle desde el principio",
      "Termina el bucle por completo",
      "Salta a la siguiente iteración",
      "No hace nada"
    ],
    respuestaCorrecta: "Termina el bucle por completo"
  },
  {
    pregunta: "¿Cuál es la diferencia entre 'break' y 'continue' en Bash?",
    opciones: [
      "Ambos terminan el bucle",
      "'continue' finaliza el script, 'break' lo pausa",
      "'break' finaliza el bucle, 'continue' salta a la siguiente iteración",
      "No hay diferencia"
    ],
    respuestaCorrecta: "'break' finaliza el bucle, 'continue' salta a la siguiente iteración"
  },
  {
    pregunta: "¿Qué tipo de bucle se debe usar si se conoce la cantidad exacta de iteraciones?",
    opciones: ["while", "for", "until", "case"],
    respuestaCorrecta: "for"
  },
  {
    pregunta: "¿Qué hace el siguiente script?\nfor i in {1..3}; do echo $i; done",
    opciones: [
      "Imprime 1 2 3",
      "Imprime 0 1 2",
      "Imprime 1 2 3 4",
      "Lanza un error"
    ],
    respuestaCorrecta: "Imprime 1 2 3"
  },
  {
    pregunta: "¿Cuál es la salida del siguiente código si el usuario introduce 5?\nread -p \"Número: \" num\nwhile [ $num -gt 0 ]; do echo $num; num=$((num-1)); done",
    opciones: [
      "0 1 2 3 4 5",
      "5 4 3 2 1",
      "5 4 3 2 1 0",
      "Error"
    ],
    respuestaCorrecta: "5 4 3 2 1"
  },
  {
    pregunta: "¿Cuál es el propósito del bucle until en Bash?",
    opciones: [
      "Repetir instrucciones hasta que la condición sea verdadera",
      "Repetir instrucciones mientras la condición sea verdadera",
      "Verificar condiciones lógicas",
      "No se usa en Bash"
    ],
    respuestaCorrecta: "Repetir instrucciones hasta que la condición sea verdadera"
  },
  {
    pregunta: "¿Qué hace el siguiente código?\nfor ((i=0; i<3; i++)); do echo $i; done",
    opciones: [
      "Imprime 1 2 3",
      "Imprime 0 1 2",
      "Imprime 0 1 2 3",
      "Error de sintaxis"
    ],
    respuestaCorrecta: "Imprime 0 1 2"
  },
  {
    pregunta: "¿Qué comando permite ejecutar un script línea por línea para depuración?",
    opciones: ["bash -x script.sh", "bash script.sh", "debug script.sh", "run script.sh"],
    respuestaCorrecta: "bash -x script.sh"
  }
];

export default preguntasSemana8;
