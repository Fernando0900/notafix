// pages/contacto.js
import { useState } from "react";
import Head from "next/head";

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formulario),
    });

    const data = await res.json();
    alert(data.mensaje); // muestra alerta con la respuesta
  };

  return (
    <>
      <Head>
        <title>Contacto - NotaFix</title>
        <meta name="description" content="Contáctanos para más información sobre nuestros servicios." />
        <meta property="og:title" content="Contacto - NotaFix" />
        <meta property="og:description" content="Déjanos tu mensaje y te responderemos pronto." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="border border-black p-6" style={{ width: "300px" }}>
          <h1 className="text-lg font-bold text-center mb-4">Formulario de contacto</h1>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ej. Juan Pérez"
                value={formulario.nombre}
                onChange={handleChange}
                className="border border-black text-sm px-2 py-1"
                style={{ width: "97%" }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                placeholder="ejemplo@correo.com"
                value={formulario.correo}
                onChange={handleChange}
                className="border border-black text-sm px-2 py-1"
                style={{ width: "97%" }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                rows={3}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                value={formulario.mensaje}
                onChange={handleChange}
                className="border border-black text-sm px-2 py-1 resize-none"
                style={{ width: "97%" }}
              />
            </div>

            <button
              type="submit"
              className="border border-black text-sm py-1 hover:bg-gray-100"
              style={{ width: "100%" }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
