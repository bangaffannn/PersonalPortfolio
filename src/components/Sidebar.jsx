import React, { Children } from "react";

export default function Sidebar({ children }) {
  return (
    <aside className="h-screen flex justify-start items-center">
      <ul className="flex flex-col items-center bg-slate-50 bg-opacity-50 ml-4 px-2 py-6 rounded-full">
        {children}
      </ul>
    </aside>
  );
}

export function SidebarItem({ icon, active }) {
  return (
    <button
      className={`text-xl text-gray-300 mb-4 p-3 rounded-full ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-gray-200 transition-all text-gray-600"
      }`}
    >
      {icon}
    </button>
  );
}
