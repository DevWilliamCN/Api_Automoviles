# 🚗 API de Análisis de Automóviles en Costa Rica

Una API REST desarrollada por **William Cubero Navarro**, que permite consultar, registrar, modificar y eliminar información de vehículos disponibles en el mercado costarricense. Ideal para análisis comparativo, ranking de rendimiento y precios por categoría.

🔗 Demo: [api-william.datapiwilliam.workers.dev]([https://api-william.datapiwilliam.workers.dev](https://api-william.datapiwilliam.workers.dev/api/autos)
📘 Documentación rápida: [`/api/docs`](https://api-william.datapiwilliam.workers.dev/api/docs)  
👨‍💻 Desarrollador: [William Cubero en LinkedIn](https://www.linkedin.com/in/william-cubero-navarro-75880727a/)

---

## 🚀 Tecnologías utilizadas

- Node.js (sin frameworks)
- Cloudflare Workers + Wrangler
- Vitest (Testing)
- Prettier + EditorConfig

---

## 🔌 Endpoints disponibles

### ▶️ `GET /api/autos`
Obtiene todos los autos registrados.

**Parámetros opcionales:**
- `marca`
- `categoria`

📌 Ejemplo:
```bash
GET /api/autos?marca=Toyota&categoria=Pickup
```

---

### ➕ `POST /api/autos`
Agrega un nuevo auto.

**Body JSON:**
```json
{
  "marca": "Toyota",
  "modelo": "Yaris",
  "año": 2024,
  "precio": 18000,
  "rendimiento_km_l": 18,
  "categoria": "Sedán",
  "ranking": 4.3
}
```

---

### 🔄 `PUT /api/autos/:id`
Reemplaza completamente un auto por ID.

---

### 🩹 `PATCH /api/autos/:id`
Actualiza parcialmente los datos de un auto.

---

### 🖑 `DELETE /api/autos/:id`
Elimina un auto según su ID.

---

### 📄 `GET /api/docs`
Devuelve la documentación en texto plano.

---

## 📁 Estructura del proyecto

```
📦 Api_Automoviles
├── 📁 src             # index.js con lógica REST
├── 📁 test            # pruebas automáticas
├── 📁 .wrangler       # configuración de Cloudflare
├── vitest.config.js   # configuración de pruebas
├── wrangler.jsonc     # configuración de despliegue
├── .prettierrc
├── .gitignore
└── package.json
```

---

## 🧪 Ejecutar localmente

```bash
npm install
npx wrangler dev
```

---

## ✅ Ejecutar pruebas

```bash
npm run test
```

---

## ☁️ Desplegar a producción

```bash
npx wrangler publish
```

---

## 📄 Códigos de estado

| Código | Descripción                      |
|--------|----------------------------------|
| 200    | OK                               |
| 201    | Recurso creado                   |
| 204    | Eliminado correctamente          |
| 400    | JSON inválido o datos faltantes  |
| 404    | Ruta o recurso no encontrado     |

---

## 📜 Licencia

    Desarollador de Software:William Cubero Navarro  
MIT © William Cubero Navarro  
Puedes usar, modificar y distribuir este proyecto con libertad.

---
