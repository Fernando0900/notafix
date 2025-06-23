// pages/api/contacto.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, correo, mensaje } = req.body;

    // Aquí puedes manejar los datos como quieras
    console.log("Nuevo mensaje recibido:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    // Respuesta de éxito
    return res.status(200).json({ mensaje: "Mensaje recibido correctamente. ¡Gracias por contactarnos!" });
  }

  // Si no es POST, devolver error
  return res.status(405).json({ error: "Método no permitido" });
}
