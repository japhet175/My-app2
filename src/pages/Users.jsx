import { useAppContext } from "../contexts/AppContext";
import { User as UserIcon } from "lucide-react";

export default function User() {
  const { users } = useAppContext();

  if (!users || users.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Header titre + bouton */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <HandleButtonUser />
      </div>

      {/* En-tête colonnes */}
      <div className="hidden md:flex items-center text-sm font-semibold text-gray-600 uppercase bg-gray-100 px-4 py-3 rounded-t">
        <div className="w-3/5 md:w-2/5">User</div>
        <div className="w-1/5 text-center">Role</div>
        <div className="w-1/5 text-center">Status</div>
        <div className="w-1/5 text-center">Last login</div>
        <div className="w-1/5 text-center">Action</div>
      </div>

      {/* Liste des utilisateurs */}
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 px-4 py-3 border-b last:border-b-0"
          >
            {/* USER */}
            <div className="flex items-center w-full md:w-2/5">
              <div className="flex-shrink-0 mr-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </div>

            {/* ROLE */}
            <div className="w-full md:w-1/5 flex items-center justify-start md:justify-center">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-purple-700 bg-purple-100">
                {user.role}
              </span>
            </div>

            {/* STATUS */}
            <div className="w-full md:w-1/5 flex items-center justify-start md:justify-center">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-green-700 bg-green-100">
                {user.status}
              </span>
            </div>

            {/* LAST LOGIN */}
            <div className="w-full md:w-1/5 flex items-center justify-start md:justify-center">
              <span className="text-sm text-gray-600">2 hours ago</span>
            </div>

            {/* ACTION */}
            <div className="w-full md:w-1/5 flex items-center justify-start md:justify-center gap-2">
              <button
                onClick={() => console.log("Edit", user.id)}
                className="text-sm font-medium px-3 py-1 rounded text-white bg-blue-600 hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => console.log("Delete", user.id)}
                className="text-sm font-medium px-3 py-1 rounded text-white bg-red-600 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HandleButtonUser() {
  const HandleClick = () => {
    console.log("Bouton cliqué !");
  };

  return (
    <button
      className="text-sm font-medium bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
      onClick={HandleClick}
    >
      Add User
    </button>
  );
}
