export const preguntasSemana6 = [
  {
    pregunta: "¿Qué comando permite ver la memoria disponible en Bash?",
    opciones: [
      "top",
      "df -h",
      "free -h",
      "meminfo"
    ],
    respuestaCorrecta: "free -h"
  },
  {
    pregunta: "¿Qué instrucción se usa para declarar una variable en Bash?",
    opciones: [
      "int variable = 10",
      "let variable = 10",
      "variable=10",
      "set variable 10"
    ],
    respuestaCorrecta: "variable=10"
  },
  {
    pregunta: "¿Qué símbolo permite realizar operaciones aritméticas en Bash?",
    opciones: [
      "$(( ))",
      "{{ }}",
      "<< >>",
      "[[ ]]"
    ],
    respuestaCorrecta: "$(( ))"
  },
  {
    pregunta: "¿Qué comando muestra información del procesador?",
    opciones: [
      "top",
      "lscpu",
      "cpuinfo",
      "htop"
    ],
    respuestaCorrecta: "lscpu"
  },
  {
    pregunta: "¿Qué comando muestra la versión del kernel?",
    opciones: [
      "cat /etc/os-release",
      "lsb_release -a",
      "uname -r",
      "kernel --version"
    ],
    respuestaCorrecta: "uname -r"
  },
  {
    pregunta: "¿Cuál de estos comandos sirve para comprimir un directorio en Bash?",
    opciones: [
      "zip -r",
      "tar -czvf",
      "gzip",
      "compress -d"
    ],
    respuestaCorrecta: "tar -czvf"
  },
  {
    pregunta: "¿Qué comando permite enviar archivos a otro equipo por SSH?",
    opciones: [
      "scp",
      "send",
      "rsync",
      "push"
    ],
    respuestaCorrecta: "scp"
  },
  {
    pregunta: "¿Dónde se almacenan las contraseñas cifradas de usuarios?",
    opciones: [
      "/etc/passwd",
      "/etc/login.defs",
      "/etc/shadow",
      "/etc/users.conf"
    ],
    respuestaCorrecta: "/etc/shadow"
  },
  {
    pregunta: "¿Qué comando muestra interfaces de red disponibles?",
    opciones: [
      "ifconfig",
      "ip link show",
      "netstat",
      "route"
    ],
    respuestaCorrecta: "ip link show"
  },
  {
    pregunta: "¿Cómo se imprime una variable dentro de un string en Bash?",
    opciones: [
      "echo 'La variable es $var'",
      "echo \"La variable es $var\"",
      "print($var)",
      "echo $var"
    ],
    respuestaCorrecta: "echo \"La variable es $var\""
  }
];