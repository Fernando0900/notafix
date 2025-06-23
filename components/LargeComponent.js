export default function LargeComponent() {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Este es un componente grande</h2>
      <p className="text-gray-600">Se ha cargado de forma diferida (lazy loading).</p>
    </div>
  );
}
