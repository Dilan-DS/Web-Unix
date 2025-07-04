import React, { useEffect } from 'react';
import '../styles/pages/Semana1.css';
import SemanaCard from '../components/SemanaCard';
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz
} from '../utils/progreso';

const Semana6 = () => {
  useEffect(() => {
    marcarParteComoCompletada("semana6", "objetivos");
    marcarParteComoCompletada("semana6", "practica");
  }, []);

  const progreso = obtenerProgresoSemana("semana6");
  const nota = obtenerNotaQuiz("semana6");

  return (
    <div className="semana6-container" style={{ minHeight: '100vh', width: '100vw', padding: '2rem', boxSizing: 'border-box' }}>
      <SemanaCard
        titulo="Semana 6: Bash Scripting - Variables y Expresiones"
        descripcion="Scripts interactivos con Bash: memoria, usuarios, operaciones y automatización."
        video="https://www.youtube.com/watch?v=9GvTqL4GHdY"
        quiz="/quiz/semana6"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Comprender la sintaxis para la declaración de variables en Bash Scripting.</li>
          <li>Ejecutar expansiones aritméticas en Bash Scripting.</li>
        </ul>

        <h2>📌 Instrucciones globales</h2>
        <ul>
          <li>Guarda cada script en un archivo, por ejemplo: <code>ejercicio1.sh</code></li>
          <li>Dale permisos con: <code>chmod +x ejercicio1.sh</code></li>
          <li>Ejecuta usando: <code>./ejercicio1.sh</code></li>
        </ul>

        <h2>📦 Scripts disponibles</h2>
        <ol>
          <li>
            <strong>Ejercicio 1: Mostrar memoria disponible</strong>
            <pre>{`#!/bin/bash
# Muestra la memoria disponible del sistema
free -h | grep "Mem" | awk '{print "Memoria disponible: " $7}' >> ~/memoria.log
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 2: Contar dispositivos en memoria</strong>
            <pre>{`#!/bin/bash
# Cuenta los dispositivos montados en el sistema
lsblk | wc -l | awk '{print "Dispositivos en memoria: " $0}' >> ~/dispositivos.log
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 3: Crear archivo y escribir texto</strong>
            <pre>{`#!/bin/bash
# Crea un archivo y escribe "Hola mundo"
touch ejemplo.txt
echo "Hola mundo!" >> ejemplo.txt
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 4: Eliminar archivos de un directorio</strong>
            <pre>{`#!/bin/bash
# Elimina todos los archivos del directorio /tmp/mi_temp
rm -rf /tmp/mi_temp/*
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 5: Procesos que más consumen RAM</strong>
            <pre>{`#!/bin/bash
# Muestra procesos con mayor uso de RAM
ps aux --sort=-%mem | head -n 10
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 6: Consultar interfaces de red</strong>
            <pre>{`#!/bin/bash
# Lista interfaces de red disponibles
ip link show
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 7: Filtrar procesos por nombre</strong>
            <pre>{`#!/bin/bash
# Filtra procesos de Firefox
ps aux | grep firefox
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 8: Crear usuario temporal por 30 días</strong>
            <pre>{`#!/bin/bash
# Crea un usuario temporal
useradd -e $(date -d "+30 days" +%F) temporal_user
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 9: Mostrar versión de SO y kernel</strong>
            <pre>{`#!/bin/bash
# Muestra versión del sistema operativo y kernel
lsb_release -a
uname -r
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 10: Info del procesador</strong>
            <pre>{`#!/bin/bash
# Muestra información del procesador
lscpu
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 11: Respaldar /etc al home</strong>
            <pre>{`#!/bin/bash
# Comprime /etc y guarda en $HOME
tar -czvf ~/respaldo_etc.tar.gz /etc
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 12: Enviar respaldo a otro servidor</strong>
            <pre>{`#!/bin/bash
# Requiere SSH configurado
scp ~/respaldo_etc.tar.gz usuario@192.168.1.100:/home/usuario/
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 13: Consultar cifrado de usuarios</strong>
            <pre>{`#!/bin/bash
# Muestra cifrado de contraseñas
sudo cat /etc/shadow | grep -v '!*' | awk -F ':' '{print $1, $2}'
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 14: Mensajes con caracteres especiales</strong>
            <pre>{`#!/bin/bash
# Muestra símbolos en texto
variable=15
echo "La temperatura es: \${variable}C."
echo "El valor a pagar es \\$\${variable}."
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 15: Mostrar varias variables</strong>
            <pre>{`#!/bin/bash
# Muestra nombre, apellido y año
nombre=Dario
apellido=Valarezo
fecha=1994
echo "$nombre $apellido nace en \${fecha}."
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 16: Mostrar contenido del HOME</strong>
            <pre>{`#!/bin/bash
# Lista archivos visibles y ocultos del HOME
comando=$(ls -alh)
echo "Los ficheros del directorio $HOME son $comando."
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 17: Cantidad de usuarios en el sistema</strong>
            <pre>{`#!/bin/bash
# Cuenta líneas en /etc/passwd
fichero="/etc/passwd"
user=$USER
cantidad1=$(cat $fichero | wc -l)
echo "El fichero \${fichero} tiene $cantidad1 líneas."
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 18: Contar USB conectados</strong>
            <pre>{`#!/bin/bash
# Cuenta dispositivos USB conectados
usb=$(lsusb | wc -l)
echo "Existen $usb dispositivos conectados."
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 19: Tráfico de red por interfaz</strong>
            <pre>{`#!/bin/bash
# Verifica tráfico por la interfaz "lo"
interface="lo"
tx=$(ip -s link show $interface | awk '/TX:/ {getline; print $1}')
rx=$(ifconfig $interface | grep "RX packets" | awk '{print $5}')
echo "TX: $tx, RX: $rx"
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 20: Operaciones aritméticas básicas</strong>
            <pre>{`#!/bin/bash
# Realiza operaciones básicas con enteros
a=10
b=5
echo "Suma: $(($a + $b))"
echo "Resta: $(($a - $b))"
echo "Multiplicación: $(($a * $b))"
echo "División: $(($a / $b))"
echo "Módulo: $(($a % $b))"
exit 0`}</pre>
          </li>
        </ol>

        <p style={{ marginTop: '2rem' }}>💡 Revisa cada script y ajusta según el objetivo específico que se quiere lograr (uso de memoria, red, respaldo, cifrado, aritmética, etc.).</p>

        <h2>📚 Bibliografía</h2>
        <ul>
          <li>Manual de GNU Bash: <code>man bash</code></li>
          <li>Comunidad GNU/Linux y documentación oficial de distribuciones como Ubuntu, Debian</li>
          <li>Sitio oficial de Bash: <a href="https://www.gnu.org/software/bash/">https://www.gnu.org/software/bash/</a></li>
          <li>Documentación interna UIDE: IU_PL_S6.pdf</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana6;
