"use client";
import { useState } from "react";

export const Translator = () => {
  const [value, setValue] = useState<string>("");
  return (
    <section className="w-full mx-auto mt-8">
      <div className="mb-5">
        <label
          htmlFor="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter Galactic Basic here.
        </label>
        <textarea
          onChange={(e) => setValue(e.target.value)}
          rows={5}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          See translated Aurebesh here.
        </label>
        <textarea
          readOnly
          value={value}
          rows={5}
          className="block font-aurebesh w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </section>
  );
};
