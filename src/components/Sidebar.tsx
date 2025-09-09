import { Menu, ShoppingCart, BarChart, Home, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom"; // Importar Link para navegación interna

const Sidebar = () => {
  return (
    <aside className="w-64 bg-teal-700 text-white p-6"> {/* Fondo más oscuro para mejor contraste */}
      <h1 className="text-2xl font-semibold mb-8">Costalinda</h1>
      <nav>
        <ul className="space-y-6">
          <li>
            <Link to="/" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <Menu className="text-2xl" />
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/carta-virtual" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <Menu className="text-2xl" />
              <span>Carta Virtual</span>
            </Link>
          </li>
          <li>
            <Link to="/pedidos" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <ShoppingCart className="text-2xl" />
              <span>Pedidos</span>
            </Link>
          </li>
          <li>
            <Link to="/cocina" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <Home className="text-2xl" /> {/* Ícono para Cocina */}
              <span>Cocina</span>
            </Link>
          </li>
          <li>
            <Link to="/caja" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <FileText className="text-2xl" /> {/* Ícono para Caja */}
              <span>Caja</span>
            </Link>
          </li>
          <li>
            <Link to="/gestion" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <Settings className="text-2xl" /> {/* Ícono para Gestión */}
              <span>Gestion</span>
            </Link>
          </li>

          <li>
            <Link to="/reportes" className="flex items-center space-x-4 text-lg hover:text-teal-300">
              <BarChart className="text-2xl" />
              <span>Reportes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
