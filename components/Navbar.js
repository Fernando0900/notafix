import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-lime-400">NotaFix</h1>
        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-lime-300">Inicio</Link>
          <Link href="/blog" className="hover:text-lime-300">Blog</Link>
          <Link href="/contacto" className="hover:text-lime-300">Contacto</Link>
          <Link href="/post/seo-en-nextjs" className="hover:text-lime-300">SEO</Link>
          <Link href="/post/optimizacion-imagenes" className="hover:text-lime-300">Imágenes</Link>
        </div>
      </div>
    </nav>
  );
}
