export const preguntasSemana7 = [
  {
    pregunta: '¿Cuál es la principal estructura condicional utilizada en Bash para evaluar expresiones?',
    opciones: [
      'for',
      'if',
      'case',
      'while'
    ],
    respuestaCorrecta: 'if'
  },
  {
    pregunta: '¿Qué comando permite comparar si dos números son iguales en Bash?',
    opciones: [
      'if $a = $b',
      'if [$a == $b]',
      'if [ $a -eq $b ]',
      'if ($a == $b)'
    ],
    respuestaCorrecta: 'if [ $a -eq $b ]'
  },
  {
    pregunta: '¿Qué símbolo se usa para encerrar una condición en Bash?',
    opciones: [
      '()',
      '<>',
      '{}',
      '[]'
    ],
    respuestaCorrecta: '[]'
  },
  {
    pregunta: '¿Qué estructura se utiliza para manejar múltiples condiciones secuenciales?',
    opciones: [
      'if-else',
      'if elif else',
      'while',
      'for'
    ],
    respuestaCorrecta: 'if elif else'
  },
  {
    pregunta: '¿Qué comando evalúa expresiones numéricas en Bash?',
    opciones: [
      'test',
      'let',
      'expr',
      '(( ))'
    ],
    respuestaCorrecta: '(( ))'
  },
  {
    pregunta: '¿Qué operador lógico se usa para "y" lógico en Bash?',
    opciones: [
      '-a',
      '&&',
      '||',
      '!'
    ],
    respuestaCorrecta: '&&'
  },
  {
    pregunta: '¿Cuál de los siguientes es un ejemplo válido de una estructura condicional en Bash?',
    opciones: [
      "if [ $a -gt 10 ]; then echo 'ok'; fi",
      "if ($a > 10) { echo 'ok'; }",
      "if $a > 10 then echo 'ok' end",
      "if: $a > 10 echo 'ok'"
    ],
    respuestaCorrecta: "if [ $a -gt 10 ]; then echo 'ok'; fi"
  },
  {
    pregunta: '¿Cuál es el propósito de la instrucción "then" en una condición Bash?',
    opciones: [
      'Finalizar el script',
      'Iniciar una estructura for',
      'Indicar el inicio del bloque a ejecutar si la condición es verdadera',
      'Comparar valores'
    ],
    respuestaCorrecta: 'Indicar el inicio del bloque a ejecutar si la condición es verdadera'
  },
  {
    pregunta: "¿Qué hace el siguiente script: if [ -f archivo.txt ]; then echo 'Existe'; fi?",
    opciones: [
      'Verifica si el archivo existe y es un directorio',
      'Verifica si el archivo existe y es regular',
      'Crea un archivo',
      'Elimina un archivo'
    ],
    respuestaCorrecta: 'Verifica si el archivo existe y es regular'
  },
  {
    pregunta: '¿Qué operador lógico se usa para "o" lógico en Bash?',
    opciones: [
      '-o',
      '||',
      '&&',
      '=='
    ],
    respuestaCorrecta: '||'
  }
];
