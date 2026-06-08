# Portafolio - Marco Carbajal

**Sitio publicado:** https://marcocarbajalb.github.io/portafolio/

Mi portafolio personal. Entregable del curso *Sistemas y Tecnologías Web*.

## Stack

- **React 19 + Vite + TypeScript**: sitio estático, tipado estricto
- **Tailwind CSS v4**: sistema de tokens en `@theme`
- **Motion** (Framer Motion): animaciones declarativas
- **Animaciones CSS guiadas por scroll**: `sticky` + `animation-timeline: view()`
- **Newsreader + JetBrains Mono**: auto-alojadas con Fontsource
- **Despliegue**: GitHub Pages vía GitHub Actions (sitio de una sola página)

## Reflexión

### 1. ¿A qué audiencia está dirigido?

Pensé este portafolio para empresas medianas que ya tienen un equipo de datos formado, apuntando a puestos de ciencia o ingeniería de datos. Descarté una agencia creativa (esperarían algo más vistoso) y una startup muy temprana (donde probablemente pesa más demostrar que puedo moverme rápido en muchas cosas a la vez).

Elegí esa audiencia en parte porque es donde me gustaría trabajar, y en parte porque me dejaba tomar una decisión de diseño clara. Si el trabajo consiste en explicarle datos a gente que tiene que decidir con ellos, entonces el portafolio debería demostrar que sé ordenar y presentar información sin saturarla. De ahí salió el tono editorial y sobrio. Estoy asumiendo que a ese tipo de equipo le habla más una página tranquila y legible que una llena de efectos.

### 2. ¿Qué tecnologías elegí y por qué?

La base es React con Vite y TypeScript. Es lo que más he usado y lo que mejor conozco para un sitio estático, así que ahí la jugué seguro a propósito.

Para los estilos usé Tailwind v4, principalmente por su sistema de tokens. Definí la paleta (papel, tinta, grises) una sola vez en `@theme` y todo el sitio se alimenta de ahí, lo que me dejó cambiar cosas desde un solo lugar y sostener la coherencia sin estar repitiéndome.

Las animaciones de entrada y los revelados al hacer scroll los hice con Motion, porque es declarativa y se siente natural dentro de React. Un criterio que traté de sostener en todo el sitio fue que las animaciones solo movieran `opacity` y `transform` (que el navegador maneja en el compositor sin recalcular el layout), que los revelados se dispararan una sola vez con IntersectionObserver, y que la media se cargara de forma diferida en `.webp` y `.webm`. También reservé el espacio de cada imagen con `aspect-ratio` para que no salte el layout, pausé los videos cuando salen de pantalla y respeté `prefers-reduced-motion`. Todas esas decisiones fueron para no castigar el performance.

Las animaciones guiadas por scroll en CSS puro (el apilado de las tarjetas de proyectos y la secuencia de la sección de infraestructura) fueron la parte que más me emocionaba hacer desde el principio. Ese efecto siempre me ha gustado mucho (se lo he visto a Apple y Rockstar Games), y quería probar hacer algo así. Corren en el compositor, así que son la forma más eficiente que encontré de hacer ese tipo de efecto, y también fueron lo que más me costó dejar funcionando.

Las tipografías (Newsreader y JetBrains Mono) las auto-alojé con Fontsource para que se vean igual en cualquier equipo y para darle al sitio una identidad concreta. La monoespaciada la reservé solo para los "datos": números de proyecto, stacks, años.

### 3. ¿Qué tecnología del curso no usé y por qué?

No usé CSS Modules. No es que tenga algo en su contra, es que Tailwind me daba algo que CSS Modules no, un sistema de tokens central. Con CSS Modules las decisiones de diseño habrían quedado repartidas en muchos archivos, y para un sitio que depende tanto de la consistencia visual prefería tenerlas todas en el mismo lugar.

### 4. ¿Dónde me arriesgué y dónde la jugué seguro?

Donde más me arriesgué fue en el concepto. Un portafolio de desarrollador monocromo y casi sin color no es lo común, y llegar ahí me costó un rediseño completo a mitad del proyecto. La primera versión era oscura, con acento turquesa y tipografías sans, y la terminé descartando entera porque sentía que se veía genérica, como hecha con IA.

El otro riesgo fueron las animaciones de scroll nativas en CSS, que son una característica bastante nueva, tanto en el apilado de proyectos como en la sección de "anatomía de la infraestructura", hecha con una secuencia de fotogramas.

Donde la jugué seguro fue en lo estructural: Motion para el resto de animaciones, una sola página en lugar de enrutamiento, TypeScript verificado antes de cada push, y degradación elegante donde el scroll nativo todavía no tiene soporte. La idea fue arriesgar en lo que le da personalidad al sitio y ser conservador en lo que tiene que funcionar pase lo que pase.

### 5. Si tuviera otra semana, ¿qué mejoraría?

Hay dos cosas que sé que se quedaron cortas. La primera es el demo en vivo del Route Optimizer. Tiene un backend que desplegué en su momento, pero que no mantuve, así que hoy el demo en vivo no es accesible y el video del proyecto es lo único que muestra cómo funciona. Con más tiempo lo dejaría corriendo y accesible para cualquiera.

La segunda es la experiencia en móvil. Buena parte de la gracia del sitio está en los efectos de scroll, y en una pantalla angosta y tan vertical esos efectos se pierden o no se aprecian igual que en computadora. Me gustaría lograr que la experiencia en móvil sea tan buena como la de escritorio, no una versión que apenas "funciona" sino una pensada de verdad para esa proporción.

## Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción (tsc + vite)
npm run preview  # previsualizar el build
```

El despliegue es automático: cada push a `main` dispara el workflow de GitHub Actions que construye el sitio y lo publica en GitHub Pages.