import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NotaFix Inc. – Hackeamos tu futuro académico</title>
        <meta name="description" content="La organización #1 en ajuste discreto de calificaciones universitarias. TECSUP, SENATI, UTP, UNSA y más." />
        <meta property="og:title" content="NotaFix Inc." />
        <meta property="og:description" content="Transformamos tu promedio. Discretamente." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-lime-300 mb-6">
            NotaFix Inc.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Hackeamos tu promedio. Discretamente. 
            TECSUP, SENATI, UTP, UNSA, PUCP... nadie se salva.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/blog" className="bg-lime-500 hover:bg-lime-600 px-6 py-3 text-lg font-semibold rounded shadow-md transition-all">
              Casos de éxito
            </Link>
            <Link href="/contacto" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 text-lg font-semibold rounded shadow-md transition-all">
              Solicita tu cambio
            </Link>
          </div>

          <p className="mt-16 text-sm text-gray-500 italic">
            * Proyecto ficticio con fines educativos. No hackees tu futuro, estudia. 🙃
          </p>
        </div>
      </main>
    </>
  );
}
