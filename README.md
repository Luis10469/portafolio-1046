# Mi Portafolio Personal

## Descripción del Proyecto

Este proyecto es una página web personal tipo portafolio que incluye tres secciones principales: **Sobre Mí**, **Mis Proyectos** y **Contacto**. Cuenta con un menú de navegación responsivo y animaciones suaves que se activan al hacer scroll. Está diseñado para ser fácilmente personalizable, accesible y adaptable a diferentes tamaños de pantalla.

---

## Características

- Navegación fija y responsiva con menú hamburguesa para dispositivos móviles.
- Sección "Sobre Mí" con una breve biografía personal.
- Sección "Mis Proyectos" con tarjetas de proyectos que incluyen imágenes, títulos y descripciones.
- Sección "Contacto" con un formulario accesible y validación básica en el cliente.
- Animaciones al hacer scroll para mejorar la experiencia visual.
- Compatible con los navegadores modernos más comunes.
- Código limpio y organizado con comentarios para facilitar modificaciones.

---

## Requisitos Previos

- Navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
- No se requiere servidor ni backend para la funcionalidad básica; el formulario no envía datos a un servidor.

---

## Instalación y Uso

### Abrir directamente

1. Descarga o clona el repositorio completo.
2. Abre el archivo `index.html` en tu navegador preferido haciendo doble clic o arrastrándolo al navegador.

### Usar un servidor estático (opcional)

Para una experiencia más robusta y evitar posibles problemas con rutas o restricciones del navegador:

1. Si tienes instalado Node.js, puedes usar el paquete `http-server`:
    
        npm install -g http-server

2. Desde la carpeta del proyecto, ejecuta:

        http-server

3. Abre la URL que te proporcione (normalmente `http://localhost:8080`) en tu navegador.

---

## Estructura de Archivos

- `index.html`  
  Archivo principal con la estructura completa de la página, incluyendo el menú, las secciones y el formulario.

- `styles.css`  
  Archivo externo con todos los estilos, variables CSS para colores, fuentes, animaciones y reglas responsivas.

---

## Modificación del Contenido

### Cambiar texto o secciones en `index.html`

- **Sobre Mí**: Modifica el texto dentro del `<section id="sobre-mi">` para actualizar tu biografía.
- **Mis Proyectos**: Añade o edita los `<article class="project-card">` dentro de la sección `#mis-proyectos`. Cambia las imágenes (URLs externas ya usadas son de Picsum.photos), títulos y descripciones.
- **Contacto**: El formulario se encuentra en la sección `#contacto`. Puedes añadir nuevos campos o modificar etiquetas, pero recuerda actualizar el script de validación si agregas campos con validación específica.

### Cambiar estilos y animaciones en `styles.css`

- Variables CSS en `:root` facilitan cambiar colores primarios, secundarios, fondo, tipografía y duraciones de animación para personalizar rápidamente.
- La navegación y el menú hamburguesa se encuentran en la sección de estilos de header y `.nav-toggle`.
- Las animaciones al hacer scroll están definidas con la clase `.animated-section` y la clase `.fade-slide-in` que se añade dinámicamente.
- Media queries ajustan la visualización en dispositivos móviles, tabletas y escritorios.

---

## Añadir Más Proyectos

Para agregar más proyectos:

1. Copia uno de los bloques `<article class="project-card">` dentro de la sección `#mis-proyectos`.
2. Cambia la URL de la imagen en el atributo `src`.
3. Cambia el texto del título y la descripción acorde a tu nuevo proyecto.

---

## Actualizar el Formulario de Contacto

- La validación en JavaScript verifica que los campos tengan valores adecuados.
- En este proyecto no hay backend para recibir mensajes, pero puedes conectar el formulario a un servicio externo o backend propio.
- Asegúrate de validar correctamente los nuevos campos si añades alguno.

---

## Solución de Problemas Comunes

- **El menú hamburguesa no funciona en móvil:**  
  Verifica que el archivo `index.html` tenga la sección `<script>` con el código JavaScript para el toggle del menú. Asegúrate de que no haya errores en la consola del navegador.

- **Animaciones no se activan al hacer scroll:**  
  Puede ocurrir si las secciones están fuera del viewport al cargar la página. Recarga la página y desplázate lentamente para activar las animaciones.

- **Formulario no muestra mensajes de error:**  
  Asegúrate de no desactivar JavaScript en tu navegador, ya que la validación depende de él.

- **Imágenes de proyectos no se cargan:**  
  Las imágenes usan URLs de Picsum.photos. Si la conexión a internet falla, no se mostrarán. Puedes reemplazarlas por URLs de imágenes que prefieras.

---

## Licencia

Este proyecto es libre para usar y modificar. No dudes en personalizarlo para tus necesidades personales o profesionales.

---

¡Gracias por visitar mi portafolio y espero que te guste este diseño y funcionalidad!
