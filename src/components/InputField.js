import React from 'react';

function InputField({ icon, type, name, placeholder, register }) {
  return (
    <div className="inputBox relative flex gap-4 items-center mt-2 mb-6">
      <img src={icon} className="h-10 w-8 absolute left-2" alt={`${name} icon`} />
      <input
        type={type}
        name={name}
        id={name}
        className="pl-12 w-full border-2 px-3 py-2 rounded-md outline-cyan-400"
        placeholder={placeholder}
        {...register(name)}  // Register the input field with react-hook-form
      />
    </div>
  );
}

export default InputField;
