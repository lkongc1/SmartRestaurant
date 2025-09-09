import { useState } from "react";

// Definir la estructura de un plato
interface MenuItem {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: string;
  imagen?: string;
  popular?: boolean;
  picante?: boolean;
}

const CartaVirtual = () => {
  // Datos simulados (sin base de datos)
  const platos: MenuItem[] = [
    {
      id: 1,
      nombre: "Ceviche Costalinda",
      categoria: "Entradas",
      descripcion: "Pescado fresco marinado en limón con cebolla morada, ají amarillo y camote",
      precio: "S/ 28.00",
      popular: true,
    },
    {
      id: 2,
      nombre: "Parrilla de Mariscos",
      categoria: "Platos Principales",
      descripcion: "Langostinos, pulpo, calamares y pescado a la parrilla con salsa de ajo",
      precio: "S/ 65.00",
    },
    {
      id: 3,
      nombre: "Arroz con Mariscos",
      categoria: "Platos Principales",
      descripcion: "Arroz amarillo con langostinos, calamares, mejillones y cangrejo",
      precio: "S/ 42.00",
      picante: true,
    },
    {
      id: 4,
      nombre: "Tiradito de Pescado",
      categoria: "Entradas",
      descripcion: "Finas láminas de pescado con crema de rocoto y aceite de oliva",
      precio: "S/ 24.00",
      picante: true,
    },
    {
      id: 5,
      nombre: "Causa Limeña",
      categoria: "Entradas",
      descripcion: "Papa amarilla con pollo deshilachado, palta y mayonesa",
      precio: "S/ 18.00",
    },
    {
      id: 6,
      nombre: "Pisco Sour",
      categoria: "Bebidas",
      descripcion: "Cóctel tradicional peruano con pisco, limón y clara de huevo",
      precio: "S/ 18.00",
      popular: true,
    },
    {
      id: 7,
      nombre: "Chicha Morada",
      categoria: "Bebidas",
      descripcion: "Bebida refrescante de maíz morado con frutas y especias",
      precio: "S/ 8.00",
    },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos");

  // Filtrar los platos según la categoría seleccionada
  const platosFiltrados =
    categoriaSeleccionada === "Todos"
      ? platos
      : platos.filter((plato) => plato.categoria === categoriaSeleccionada);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">Carta Virtual</h1>
      <p className="text-lg text-gray-600 mb-8">
        Descubre nuestros deliciosos platos inspirados en los sabores del mar.
      </p>

      {/* Filtro de categorías */}
      <div className="flex justify-center mb-8">
        {["Todos", "Entradas", "Platos Principales", "Bebidas", "Postres"].map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={`px-4 py-2 mx-2 text-teal-600 font-semibold ${
              categoriaSeleccionada === categoria
                ? "border-b-4 border-teal-700"
                : "hover:text-teal-700"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Mostrar los elementos de la carta */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {platosFiltrados.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 relative" // Se agrega "relative" para posicionar las etiquetas correctamente
          >
            {item.popular && (
              <span className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                Popular
              </span>
            )}
            {item.picante && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                Picante
              </span>
            )}
            <h3 className="text-xl font-semibold text-teal-800 mb-2">{item.nombre}</h3>
            <p className="text-gray-600 mb-4">{item.descripcion}</p>
            <p className="text-teal-700 font-semibold mb-4">{item.precio}</p>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700">
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartaVirtual;
