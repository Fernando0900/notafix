import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const casos = [
    {
      institucion: "TECSUP",
      titulo: "De 08 a 15 en un clic",
      resumen: "Nuestro mejor caso en el curso de Estructuras de Datos.",
      imagen: "/images/seo-image1.png"
    },
    {
      institucion: "SENATI",
      titulo: "Electrónica sin finales",
      resumen: "Subimos el promedio grupal a 14.6 sin dejar rastro.",
      imagen: "/images/seo-image2.png"
    },
    {
      institucion: "UTP",
      titulo: "De jalado a becado",
      resumen: "Tercer ciclo completo ajustado en tiempo récord.",
      imagen: "/images/seo-image3.png"
    },
    {
      institucion: "UNSA",
      titulo: "La magia del Excel",
      resumen: "Ingeniería sin lágrimas. Manipulación masiva con macros.",
      imagen: "/images/seo-image4.png"
    },
    {
      institucion: "UCSM",
      titulo: "Tesis sin sustento",
      resumen: "Defensa perfecta con notas pre-programadas.",
      imagen: "/images/seo-image5.png"
    },
  ];

  return (
    <>
      <Head>
        <title>Casos de Éxito - NotaFix</title>
        <meta name="description" content="Casos de éxito donde transformamos la historia de estudiantes en todo el país." />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-4xl font-bold text-lime-300 mb-8">
            Casos de Éxito Universitario
          </h1>
          <p className="text-gray-400 mb-12">
            Estas instituciones confiaron (sin saberlo) en nosotros. ¡Tú podrías ser el siguiente!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casos.map((caso, i) => (
              <div key={i} className="bg-gray-800 rounded-lg shadow hover:shadow-xl transition overflow-hidden p-4 flex flex-col items-center">
                <Image
                  src={caso.imagen}
                  width={120}
                  height={80}
                  objectFit="contain"
                  alt={`Logo de ${caso.institucion}`}
                  className="mb-2"
                />
                <h2 className="text-xl font-semibold text-cyan-400 mb-2">{caso.institucion}</h2>
                <p className="text-lime-300 text-lg font-bold mt-1">{caso.titulo}</p>
                <p className="text-gray-300 mt-1 text-sm">{caso.resumen}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/contacto" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-lg font-semibold inline-block">
              Quiero ser un caso más
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}