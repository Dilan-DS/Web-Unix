export const preguntasSemana13 = [
  {
    pregunta: "¿Qué comando se utiliza para decodificar una cadena en base64?",
    opciones: ["decode64", "openssl", "base64 --decode", "b64decode"],
    respuestaCorrecta: "base64 --decode"
  },
  {
    pregunta: "¿Qué flag resulta al decodificar 'bDNhcm5fdGgzX3IwcDM1'?",
    opciones: [
      "picoCTF{learn_the_ropes}",
      "picoCTF{l3arn_th3_r0p35}",
      "picoCTF{ropes_decoded}",
      "picoCTF{rop35_und3rst00d}"
    ],
    respuestaCorrecta: "picoCTF{l3arn_th3_r0p35}"
  },
  {
    pregunta: "¿Qué herramienta usaste para enviar datos POST en terminal?",
    opciones: ["wget", "nc", "curl", "telnet"],
    respuestaCorrecta: "curl"
  },
  {
    pregunta: "¿Dónde estaba la flag en el reto 'Cookie Monster'?",
    opciones: [
      "En el HTML",
      "En la base de datos",
      "En una cookie codificada",
      "En el título de la página"
    ],
    respuestaCorrecta: "En una cookie codificada"
  },
  {
    pregunta: "¿Cuál era el valor decodificado de la cookie?",
    opciones: [
      "picoCTF{cookie_lovers_unite}",
      "picoCTF{c00k1e_m0nster_l0ves_c00kies_6E81FC1E}",
      "picoCTF{decoded_cookie_data}",
      "picoCTF{monster_found}"
    ],
    respuestaCorrecta: "picoCTF{c00k1e_m0nster_l0ves_c00kies_6E81FC1E}"
  },
  {
    pregunta: "¿Qué archivo descargaste para resolver el reto 'heapdump'?",
    opciones: ["dump.txt", "core.log", "heap.log", "memory.dat"],
    respuestaCorrecta: "dump.txt"
  },
  {
    pregunta: "¿Qué comando permite extraer cadenas legibles de un archivo?",
    opciones: ["grep", "cut", "awk", "strings"],
    respuestaCorrecta: "strings"
  },
  {
    pregunta: "¿Qué flag se obtuvo desde el heapdump?",
    opciones: [
      "picoCTF{Pat!3nt_15_Th3_K3y_ad7ea5ae}",
      "picoCTF{dump_it_out}",
      "picoCTF{memory_leak_flag}",
      "picoCTF{decode_heap}"
    ],
    respuestaCorrecta: "picoCTF{Pat!3nt_15_Th3_K3y_ad7ea5ae}"
  },
  {
    pregunta: "¿Qué atributo HTML contenía una cadena base64 en 'WebDecode'?",
    opciones: ["href", "src", "notify_true", "data-id"],
    respuestaCorrecta: "notify_true"
  },
  {
    pregunta: "¿Qué flag se encontró en 'WebDecode' tras decodificar?",
    opciones: [
      "picoCTF{html_hidden_flag}",
      "picoCTF{web_succ3ssfully_d3c0ded_f6f6b78a}",
      "picoCTF{script_extracted_flag}",
      "picoCTF{found_in_meta}"
    ],
    respuestaCorrecta: "picoCTF{web_succ3ssfully_d3c0ded_f6f6b78a}"
  },
  {
    pregunta: "¿Qué comando convierte un valor hexadecimal a decimal?",
    opciones: ["hex2dec", "printf", "echo $((...))", "cast"],
    respuestaCorrecta: "echo $((...))"
  },
  {
    pregunta: "¿Qué flag se obtiene al convertir el valor hexadecimal 0x3D?",
    opciones: [
      "picoCTF{45}",
      "picoCTF{61}",
      "picoCTF{3D}",
      "picoCTF{hex_to_dec}"
    ],
    respuestaCorrecta: "picoCTF{61}"
  },
  {
    pregunta: "¿Qué reto requería examinar un archivo llamado 'strings'?",
    opciones: ["Base Hunt", "Strings It", "Byte Finder", "Decoder"],
    respuestaCorrecta: "Strings It"
  },
  {
    pregunta: "¿Qué comando se usó para buscar una flag en el archivo binario 'strings'?",
    opciones: [
      "grep picoCTF strings",
      "cat strings | grep picoCTF",
      "strings strings | grep picoCTF",
      "find picoCTF strings"
    ],
    respuestaCorrecta: "strings strings | grep picoCTF"
  },
  {
    pregunta: "¿Cuál fue la flag en el reto 'Strings It'?",
    opciones: [
      "picoCTF{flag_from_string_file}",
      "picoCTF{5tRIng5_1T_d66c7bb7}",
      "picoCTF{bin_str_success}",
      "picoCTF{stringed_out}"
    ],
    respuestaCorrecta: "picoCTF{5tRIng5_1T_d66c7bb7}"
  },
  {
    pregunta: "¿Qué utilidad de red se usó en 'netcat'?",
    opciones: ["telnet", "ssh", "netcat", "curl"],
    respuestaCorrecta: "netcat"
  },
  {
    pregunta: "¿Cuál fue el dominio usado en el reto 'netcat'?",
    opciones: [
      "venus.picoctf.net",
      "jupiter.challenges.picoctf.org",
      "pluto.ctf.net",
      "mars.challenge.edu"
    ],
    respuestaCorrecta: "jupiter.challenges.picoctf.org"
  },
  {
    pregunta: "¿Qué puerto se usó en el reto 'What's a net cat'?",
    opciones: ["80", "22", "41120", "443"],
    respuestaCorrecta: "41120"
  },
  {
    pregunta: "¿Cuál fue la flag obtenida en el reto 'netcat'?",
    opciones: [
      "picoCTF{connected!}",
      "picoCTF{nEtCat_Mast3ry_3214be47}",
      "picoCTF{port_opened_flag}",
      "picoCTF{socket_flag}"
    ],
    respuestaCorrecta: "picoCTF{nEtCat_Mast3ry_3214be47}"
  },
  {
    pregunta: "¿Qué técnica se usó principalmente para encontrar flags ocultas?",
    opciones: [
      "Fuerza bruta de contraseñas",
      "Inspección visual",
      "Decodificación y análisis de archivos",
      "Desbordamiento de buffer"
    ],
    respuestaCorrecta: "Decodificación y análisis de archivos"
  }
]
