import Head from "next/head";
import Image from "next/image";

export default function OptimizacionImagenes() {
  return (
    <>
      <Head>
        <title>Optimización de Imágenes - SEO</title>
        <meta name="description" content="Cómo optimizar imágenes para mejorar el SEO de tu sitio web." />
        <meta property="og:title" content="Optimización de Imágenes - SEO" />
        <meta property="og:description" content="Reduce el tamaño, usa formatos modernos y atributos alt." />
        <meta property="og:type" content="article" />
      </Head>

      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-6">Optimización de Imágenes para SEO</h1>
          <p className="text-gray-700 mb-4">
            Las imágenes optimizadas ayudan a reducir el tiempo de carga y mejorar la experiencia del usuario.
          </p>
          <Image
            src="/images/seo-image.png"
            alt="Ejemplo SEO"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
      
        </div>
      </main>
    </>
  );
}
