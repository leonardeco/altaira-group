# Altaira Group

Landing de Altaira Group: consultoría ambiental con raíz en el territorio. Ingeniería geográfica y ambiental, y la línea Environmental & Coffee.

El sitio presenta los ocho servicios, el WhatsApp, el correo y el Instagram. No incluye datos de otras empresas con nombre parecido.

## Contacto que usa la página

| Canal | Dato |
| --- | --- |
| WhatsApp | 318 683 5503 |
| Correo | gomezmorenomayraalejandra@gmail.com |
| Instagram | [@altairagroupsas](https://www.instagram.com/altairagroupsas/) |

Esos datos viven en `lib/site.ts`. Si cambia el número, el correo o el mensaje de WhatsApp, se edita solo ese archivo. Los botones, el pie y el enlace `mailto` leen esas constantes.

El botón de WhatsApp abre `https://wa.me/573186835503` con el texto: «Hola, Altaira Group. Quiero agendar una asesoría.»

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS propio en `app/globals.css` (sin Tailwind)

Node.js 20 o superior.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`build` genera el sitio estático de producción. `start` lo sirve en local.

## Estructura

```
app/
  layout.tsx          Fuentes, metadatos y datos estructurados
  page.tsx            Secciones de la landing y lista de servicios
  globals.css         Colores, tipografía, botones y layout
components/
  nav.tsx             Barra y menú móvil
  whatsapp-button.tsx Botón de WhatsApp con el número
  cta.tsx             Botones secundarios (servicios, correo, Instagram)
  icons.tsx           Íconos
  motion.tsx          Barra de progreso y sección activa del menú
lib/
  site.ts             WhatsApp, correo e Instagram
public/
  logo.png            Logotipo completo
  mark.png            Isotipo para la barra y el favicon
```

## Cómo cambiar el contenido

**Teléfono, correo, Instagram o el mensaje de WhatsApp.**  
Edita `lib/site.ts`. El número visible es `WHATSAPP_NUMBER` (`318 683 5503`). El enlace usa el mismo número con indicativo 57: `573186835503`. Si cambia el celular, actualiza los dos.

**Servicios.**  
Están en el arreglo `services` de `app/page.tsx`. Cada uno tiene número, título, texto e ícono. El texto de las tarjetas es el de la pieza de servicios profesionales.

**Textos de portada y contacto.**  
También están en `app/page.tsx`: titular, bajada, pasos «Cómo empezar» y el cierre «¿Tienes un proyecto en mente?».

**Logo.**  
Reemplaza `public/logo.png` y `public/mark.png` conservando los nombres. `logo.png` es el lockup completo. `mark.png` es solo el triángulo, para la barra y el favicon. El fondo del archivo debe ser transparente para que se integre con el azul de la página.

**Colores.**  
Las variables están al inicio de `app/globals.css`:

- `--bg` fondo `#0f1c25`
- `--card` tarjetas
- `--gold` y `--gold-bright` títulos y detalles
- `--ink` texto principal

El botón de WhatsApp usa el verde de la marca de WhatsApp (`#075e54` y `#25d366`) para que se distinga del dorado de la marca.

## Secciones

1. Inicio, con el logotipo entrando desde el fondo.
2. Ocho servicios.
3. Cómo empezar: mensaje, alcance y asesoría.
4. Contacto, con WhatsApp, correo e Instagram.
5. Botón fijo de WhatsApp en la esquina inferior.

En pantallas chicas el menú se abre con el botón de la barra y el WhatsApp queda fijo abajo.

## Despliegue

El repositorio es [leonardeco/altaira-group](https://github.com/leonardeco/altaira-group). Vercel detecta Next.js: no hace falta un `vercel.json`.

Desde la carpeta del proyecto, con la CLI ya autenticada en el equipo `leonardecojt-8004s-projects`:

```bash
npx vercel --prod --yes --scope leonardecojt-8004s-projects
```

También se puede conectar el repositorio en el panel de Vercel y dejar que cada push a `main` publique solo.
