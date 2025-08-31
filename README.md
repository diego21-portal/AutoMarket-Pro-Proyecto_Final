
# AutoMarket PRO

Sitio web multi-página para venta de autos, construido con **Bootstrap 5**, **Grid/Flexbox**, **SCSS (Sass)** y **JS** propio.

## Estructura

```
auto-market-pro/
├─ assets/
│  ├─ img/
│  ├─ images/
│  └─ technical_sheets/
├─ css/
│  └─ main.css           # generado desde SCSS
├─ scss/
│  └─ main.scss          # variables, mixins, nesting, extend, operadores, animaciones
├─ js/
│  └─ app.js
├─ node_modules
├─ pages/
│  ├─ shop.html
│  ├─ login.html
│  ├─ contact.html
│  ├─ profile 
│  └─ vehicle.html
├─ index.html
├─ package.json
├─ .gitignore
├─ package.json
└─ README.md
```

## Desarrollo con SASS
Instalar dependencias (opcional) y compilar SCSS → CSS:

```bash
# Ubicarse en la carpeta del proyecto
npm i --save-dev sass

# Compilar una vez
npx sass scss:css --style=compressed

# Modo watch durante el desarrollo
npx sass --watch scss:css --style=expanded
```

> El archivo `css/main.css` incluido fue pre-generado para que todo funcione de inmediato, pero se recomienda compilar desde `scss/main.scss` para trabajar en serio.

## Librerías
- Bootstrap 5 (CSS/JS, CDN)
- Bootstrap Icons (CDN)

## Accesibilidad y SEO
- Semántica HTML5
- `alt` en imágenes, `label` en formularios, `meta viewport`
- Navegación con teclado
- Títulos jerárquicos y textos descriptivos

## Git & GitHub
Inicializá y versioná el proyecto (ejemplo):

```bash
git init
git add .
git commit -m "feat: proyecto base AutoMarket PRO con Bootstrap y SCSS"
git branch -M main
git remote add origin https://github.com/USUARIO/auto-market-pro.git
git push -u origin main

# Ejemplos de commits posteriores
git commit -am "feat(shop): cards de vehículos y filtro por texto"
git commit -am "style(scss): variables y mixins; botón .btn-brand"
git commit -am "feat(vehicle): tabla de especificaciones y botón PDF"
git commit -am "fix(css): contraste de enlaces y foco de formularios"
```

Acordate de crear el repositorio vacío en GitHub y pegar su **URL pública** donde corresponda.

## Responsive
- Basado en **Bootstrap Grid** (container, row, col-*) + utilidades
- Componentes propios con `@media` para pantallas pequeñas

## Licencia
Uso educativo/demostrativo. Reemplazá imágenes y contenidos antes de subir a producción.
