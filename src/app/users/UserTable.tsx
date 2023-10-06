"use client";

import { useEffect, useState } from "react";

// Componente para la tabla de usuarios
export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [cant, serialized] = useState(0);

  useEffect(() => {
    console.log("env ", process.env.NEXT_PUBLIC_URL_LOCAL);
    
    const fetchUsers = async () => {
      fetch(`${process.env.NEXT_PUBLIC_URL_LOCAL}/api/orders`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    fetchUsers();
  }, []);

  return (
    <>
      <p className="dark:text-white text-lg text-center font-bold m-5">
        Lista de registrados {cant}
      </p>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">id</th>
            <th className="px-4 py-3">Firstname</th>
            <th className="px-4 py-3">Lastname</th>
            <th className="px-4 py-3">Age</th>
            <th className="px-4 py-3">Sex</th>
            <th className="px-4 py-3">Empresa</th>
            <th className="px-4 py-3">Telefono</th>
            <th className="px-4 py-3">Interes</th>
          </tr>
        </thead>
        <tbody>
          {users.map((order: any) => (
            <tr key={order.id} className="bg-gray-700 border-b border-gray-600">
              <td className="px-4 py-3">{order.id}</td>
              <td className="px-4 py-3">{order.billing.first_name}</td>
              <td className="px-4 py-3">{order.billing.last_name}</td>
              {order.meta_data.map((meta: any) => (
                <td key={meta.id} className="px-4 py-3">
                  {meta.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
