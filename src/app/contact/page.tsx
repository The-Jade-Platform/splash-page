import React from "react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="text-center px-4">
        <h1 className="text-4xl font-serif mb-4">Contact</h1>
        <p className="text-lg">
          Please reach us at{" "}
          <a
            href="mailto:contact@jadeplatform.com"
            className="text-blue-400 hover:underline"
          >
            contact@jadeplatform.com
          </a>
        </p>
      </div>
    </div>
  );
}
