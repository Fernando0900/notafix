const BASE_URL = "http://localhost:3000";

async function obtenerRutasDesdeBD() {
  return [
    "/", 
    "/blog", 
    "/contacto", 
    "/post/seo-en-nextjs", 
    "/post/optimizacion-imagenes"
  ];
}

export default async function handler(req, res) {
  const rutas = await obtenerRutasDesdeBD();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${rutas.map((ruta) => `<url><loc>${BASE_URL}${ruta}</loc></url>`).join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
