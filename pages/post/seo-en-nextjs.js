import Head from "next/head";

export default function SEOenNext() {
  return (
    <>
      <Head>
        <title>SEO en Next.js</title>
        <meta name="description" content="Mejores prácticas para implementar SEO en Next.js" />
        <meta property="og:title" content="SEO en Next.js" />
        <meta property="og:description" content="Optimiza tu sitio con meta tags, sitemap y rendimiento." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="min-h-screen bg-white px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800 mb-6">SEO en Next.js</h1>
          <p className="text-gray-700 mb-4">
            Next.js facilita la implementación de buenas prácticas SEO gracias a su capacidad de renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Uso de la etiqueta &lt;Head&gt; para títulos y meta descripciones.</li>
            <li>Creación de `sitemap.xml` dinámico.</li>
            <li>Rendimiento optimizado y carga rápida.</li>
          </ul>
        </div>
      </main>
    </>
  );
}
