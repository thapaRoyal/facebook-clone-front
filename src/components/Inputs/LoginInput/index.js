import { useField } from 'formik';
import React from 'react';
import './style.css';

const LoginInput = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </div>
  );
};

export default LoginInput;
