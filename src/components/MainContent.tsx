import { Clock, Users, Star, Menu, ShoppingCart, BarChart } from 'lucide-react';

const MainContent = () => {
  return (
    <main className="text-center mt-12 bg-transparent"> {/* Asegúrate de que no tenga un fondo blanco */}
      {/* Bienvenida y Descripción en la misma línea */}
      <div className="flex justify-center items-center space-x-4">
        <h2 className="text-3xl font-bold text-teal-700">Bienvenido a</h2>
        <h1 className="text-3xl font-extrabold text-teal-800">Restaurante Costalinda</h1>
      </div>

      {/* Descripción */}
      <p className="text-sm text-teal-800 mt-4">
        Disfruta de la mejor experiencia gastronómica con sabores del mar. Nuestro sistema moderno te permite gestionar pedidos de manera eficiente.
      </p>

      {/* Botones de Ver Carta y Hacer Pedido */}
      <div className="flex justify-center mt-8 space-x-6">
        <button className="text-lg text-teal-700 px-6 py-3 bg-teal-100 rounded-md hover:bg-teal-200 transition">
          Ver Carta
        </button>
        <button className="text-lg text-white px-6 py-3 bg-teal-500 rounded-md hover:bg-teal-600 transition">
          Hacer Pedido
        </button>
      </div>

      {/* Imagen */}
      <div className="mt-8">
        <img
          src="/premium_photo-restaurant.jpg" // Reemplaza esta URL con la imagen que desees
          alt="Restaurante Costalinda"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Sistema de Gestión Integral */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-teal-700">Sistema de Gestión Integral</h2>
        <p className="text-lg text-gray-700 mt-4">
          Todas las herramientas que necesitas para gestionar tu restaurante de manera eficiente
        </p>
      </section>

      {/* Section with cards */}
      <section className="flex justify-center mt-16 space-x-6">
        {/* Carta Virtual Card */}
        <div className="bg-teal-50 shadow-md rounded-lg p-4 w-60 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Menu className="text-3xl text-teal-500" /> {/* Icono de menú */}
            <h3 className="text-lg font-semibold text-teal-700">Carta Virtual</h3>
          </div>
          <p className="text-gray-500 mt-3">Gestiona tu menú digital</p>
          <button className="mt-3 text-teal-500 font-semibold">Acceder →</button>
        </div>

        {/* Pedidos Card */}
        <div className="bg-teal-50 shadow-md rounded-lg p-4 w-60 text-center">
          <div className="flex items-center justify-center space-x-3">
            <ShoppingCart className="text-3xl text-teal-500" /> {/* Icono de carrito */}
            <h3 className="text-lg font-semibold text-teal-700">Pedidos</h3>
          </div>
          <p className="text-gray-500 mt-3">Gestiona órdenes en tiempo real</p>
          <button className="mt-3 text-teal-500 font-semibold">Acceder →</button>
        </div>

        {/* Reportes Card */}
        <div className="bg-teal-50 shadow-md rounded-lg p-4 w-60 text-center">
          <div className="flex items-center justify-center space-x-3">
            <BarChart className="text-3xl text-teal-500" /> {/* Icono de gráfico */}
            <h3 className="text-lg font-semibold text-teal-700">Reportes</h3>
          </div>
          <p className="text-gray-500 mt-3">Analiza el rendimiento</p>
          <button className="mt-3 text-teal-500 font-semibold">Acceder →</button>
        </div>
      </section>

      {/* New Section with Metrics and Icons */}
      <section className="mt-16 flex justify-center space-x-8 text-center">
        <div className="flex flex-col items-center">
          <Clock className="text-4xl text-teal-600" /> {/* Icono de reloj */}
          <p className="text-xl text-teal-700 mt-2">15 min</p>
          <p className="text-gray-600">Tiempo promedio de preparación</p>
        </div>

        <div className="flex flex-col items-center">
          <Users className="text-4xl text-teal-600" /> {/* Icono de personas */}
          <p className="text-xl text-teal-700 mt-2">500+</p>
          <p className="text-gray-600">Clientes satisfechos</p>
        </div>

        <div className="flex flex-col items-center">
          <Star className="text-4xl text-teal-600" /> {/* Icono de estrella */}
          <p className="text-xl text-teal-700 mt-2">4.8</p>
          <p className="text-gray-600">Calificación promedio</p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
