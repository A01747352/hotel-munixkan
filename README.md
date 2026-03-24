# Hotel Munixkan — Sitio Web

Página web mobile-first para Hotel Munixkan, Yucatán.

## 🚀 Deploy en Vercel

### Opción A — Desde GitHub (recomendado)

1. **Sube el repo a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: sitio inicial hotel munixkan"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/hotel-munixkan.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) → **Add New Project**
   - Selecciona el repo `hotel-munixkan`
   - Deja todo por defecto → **Deploy**
   - ¡Listo! Vercel te da una URL del tipo `hotel-munixkan.vercel.app`

### Opción B — Vercel CLI (sin GitHub)

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## ✏️ Personalización antes de subir

Abre `index.html` y cambia:

| Busca | Reemplaza con |
|-------|--------------|
| `529990000000` | Tu número de WhatsApp (con código de país, sin +) |
| `contacto@hotelmunixkan.com` | Tu correo real |
| `Consultar` (precio) | El precio real por noche |

## 📁 Estructura

```
hotel-munixkan/
├── index.html     ← Toda la página
├── vercel.json    ← Config de Vercel
└── README.md
```
