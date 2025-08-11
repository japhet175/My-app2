import React from "react";
import { useAppContext } from "../contexts/AppContext";

export default function RecentAddedProduct() {
  const { products } = useAppContext();

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h1 className="font-bold text-2xl mb-6">Recent Added Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(products ?? []).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md p-4 border"
          >
            <span
              className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full 
                ${
                  product.statusColor === "green"
                    ? "bg-green-100 text-green-700"
                    : product.statusColor === "red"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {product.status}
            </span>

            <h2 className="font-bold text-lg">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm mt-2 text-gray-600">{product.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
