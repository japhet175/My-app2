import { useAppContext } from "../contexts/AppContext";
import { Package, Monitor, User, List, Layers, LogOut } from "lucide-react";

export default function Navbar({ setActivePage }) {
  const { users = [], products = [], assignments = [], categories = [], logout } = useAppContext();

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow p-5 flex flex-col justify-between">
      
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Package size={24} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-700">iHUZA</h1>
        </div>
        <span className="text-sm font-semibold text-gray-500 mb-8 block">INVENTORY</span>

        <nav className="flex flex-col space-y-3">
          <button
            onClick={() => setActivePage("dashboard")}
            className="flex items-center gap-3 px-3 py-2 rounded-md font-semibold text-blue-700 bg-blue-100"
          >
            <Monitor size={18} />
            Dashboard
          </button>

          <button
            onClick={() => setActivePage("user")}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700"
          >
            <User size={18} />
            Users <span className="ml-auto font-bold">({users.length})</span>
          </button>

          <button
            onClick={() => setActivePage("product")}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700"
          >
            <Package size={18} />
            Products <span className="ml-auto font-bold">({products.length})</span>
          </button>

          <button
            onClick={() => setActivePage("assignments")}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700"
          >
            <List size={18} />
            Assignments <span className="ml-auto font-bold">({assignments.length})</span>
          </button>

          <button
            onClick={() => setActivePage("categories")}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 text-gray-700"
          >
            <Layers size={18} />
            Categories <span className="ml-auto font-bold">({categories.length})</span>
          </button>
        </nav>
      </div>

      {/* Bouton logout en bas */}
      <div className="border-t pt-4">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-50 text-red-600 w-full font-semibold"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
