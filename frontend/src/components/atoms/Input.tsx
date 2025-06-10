import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string;
}

export default function Input({ label, placeholder, error }: InputProps) {
  return (
    <div className="mb-4">
      {label && <label className="block font-medium mb-1">{label}</label>}
      <input
        className={`border p-2 rounded w-full ${error ? 'border-red-500' : 'border-gray-300'}`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
