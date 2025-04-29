import React from 'react';

export const StepFormWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-white text-2xl font-bold text-center mb-6">{title}</h2>
    {children}
  </div>
);