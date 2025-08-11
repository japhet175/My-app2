import { useAppContext } from "./contexts/AppContext";
import Navbar from "./components/Navbars";
import Dashboard from "./pages/Dashboards"; 
import RecentAddedProduct from "./pages/RecentAddedProducts";
import User from "./pages/Users";
import Login from "./pages/Login"; // On créera ce composant

export default function App() {
  const { activePage, setActivePage, currentUser } = useAppContext();

  // Si pas connecté, afficher le Login
  if (!currentUser) {
    return <Login />;
  }

  // Sinon, afficher l'app complète
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <Navbar setActivePage={setActivePage} />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 space-y-8">
        {activePage === "dashboard" && (
          <>
            <Dashboard />
            <RecentAddedProduct />
            <User />
          </>
        )}
      </div>
    </div>
  );
}
