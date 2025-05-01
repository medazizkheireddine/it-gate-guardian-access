
import React from "react";

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary text-white p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24" 
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h1 className="mt-2 text-3xl font-bold">IT Asset Management</h1>
      <p className="text-muted-foreground">Secure login to your account</p>
    </div>
  );
};

export default AuthHeader;
