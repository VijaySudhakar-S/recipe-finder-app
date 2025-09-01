import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-red-800 text-center">{message}</p>
    </div>
  );
};

export default ErrorMessage;