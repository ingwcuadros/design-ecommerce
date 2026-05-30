# Ecommerce Electro

Proyecto frontend con Vite y React. Contiene todo lo necesario para ejecutar la aplicacion localmente.

## Requisitos locales

- Node.js `>=22.13.0`
- Corepack habilitado, incluido con Node.js
- pnpm `11.5.0`

El proyecto fija el gestor de paquetes en `package.json` con `packageManager: pnpm@11.5.0` y tambien incluye `.nvmrc` para usar Node `22.13.0`.

## Levantar el proyecto localmente

1. Clonar el repositorio.
2. Entrar al directorio del proyecto.
3. Usar la version de Node indicada:

```bash
nvm use
```

Si no usas `nvm`, instala Node.js `22.13.0` o superior.

4. Habilitar Corepack:

```bash
corepack enable
```

5. Instalar dependencias con pnpm:

```bash
pnpm install
```

6. Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

La aplicacion quedara disponible en la URL local que indique Vite, normalmente `http://localhost:5173`.

## Comandos disponibles

- `pnpm dev`: inicia el entorno local de desarrollo.
- `pnpm build`: genera la version de produccion.
- `pnpm preview`: sirve localmente el build de produccion.
- `pnpm lint`: ejecuta ESLint.
- `pnpm lint:fix`: ejecuta ESLint y aplica correcciones automaticas.
- `pnpm typecheck`: ejecuta la validacion de tipos configurada.
