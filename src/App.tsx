import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Sidebar from './components/Sidebar'; // Importa Sidebar
import MainContent from './components/MainContent'; // Importa MainContent
import CartaVirtual from "./components/CartaVirtual";
import Pedidos from "./components/Pedidos"
import Reportes from "./components/Reportes"
import Cocina from "./components/Cocina";
import Caja from "./components/Caja";
import Gestion from "./components/Gestion";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex bg-gradient-to-r from-blue-100 to-teal-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes> {/* Configura las rutas aquí */}
            <Route path="/" element={<MainContent />} /> {/* Ruta principal para el MainContent */}
            <Route path="/carta-virtual" element={<CartaVirtual />} /> {/* Ruta para CartaVirtual */}
            <Route path="/pedidos" element={<Pedidos />} /> {/* Ruta para Pedidos */}
            <Route path="/cocina" element={<Cocina />} /> {/* Ruta para Pedidos */}
            <Route path="/caja" element={<Caja />} /> {/* Ruta para Pedidos */}
            <Route path="/reportes" element={<Reportes />} /> {/* Ruta para Pedidos */}
            <Route path="/gestion" element={<Gestion />} /> {/* Ruta para Pedidos */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

//  {/* Header con el mismo gradiente que el fondo */}
//      <header className="flex justify-center items-center p-4 bg-gradient-to-r from-blue-100 to-teal-100">
//      </header>
      