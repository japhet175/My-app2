import React from "react";
import { useAppContext } from "../contexts/AppContext";
import {
  User,
  Package,
  CheckCircle,
  AlertTriangle,
  Mail,
  Bell,
  Settings,
} from "lucide-react";

export default function Dashboard() {
  const {
    totalUsers,
    totalProducts,
    totalAssigned,
    unassigned,
    currentUser,  // On récupère l'utilisateur connecté
  } = useAppContext();

  return (
    <div className="p-6 space-y-6">

      {/* Top bar: Infos utilisateur */}
      <div className="flex justify-between items-center flex-wrap">
        {/* Left side: title */}
        <div className="text-left">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome Back, {currentUser?.name || "User"}</p>
        </div>

        {/* Right side: icons + email + avatar */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Mail size={22} className="text-gray-600" />
          <Settings size={22} className="text-gray-600" />
          <div className="relative">
            <Bell size={22} className="text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          </div>
          <span className="text-gray-800 font-medium">{currentUser?.email || "no-email@example.com"}</span>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
        </div>
      </div>

      {/* Le reste reste inchangé */}
      <div className="bg-blue-800 text-white rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">
          iHUZA INVENTORY - System Overview
        </h1>
        <p className="mb-4">
          Monitor your iHuza inventory and product assignments in real-time
        </p>
        <div className="flex items-center space-x-2">
          <CheckCircle size={24} className="text-green-300" />
          <p>All systems operational</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between">
        <div className="flex items-center bg-white rounded-lg shadow p-4 w-full sm:w-[48%] lg:w-[23%]">
          <User size={30} className="text-blue-600 mr-3" />
          <div>
            <div className="text-xl font-bold">{totalUsers}</div>
            <div className="text-gray-600">Total Users</div>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow p-4 w-full sm:w-[48%] lg:w-[23%]">
          <Package size={30} className="text-blue-600 mr-3" />
          <div>
            <div className="text-xl font-bold">{totalProducts}</div>
            <div className="text-gray-600">Total Products</div>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow p-4 w-full sm:w-[48%] lg:w-[23%]">
          <CheckCircle size={30} className="text-green-600 mr-3" />
          <div>
            <div className="text-xl font-bold">{totalAssigned}</div>
            <div className="text-gray-600">Assigned Products</div>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow p-4 w-full sm:w-[48%] lg:w-[23%]">
          <AlertTriangle size={30} className="text-yellow-500 mr-3" />
          <div>
            <div className="text-xl font-bold">{unassigned}</div>
            <div className="text-gray-600">Unassigned Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}
