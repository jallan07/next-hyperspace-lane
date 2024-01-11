export const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-starJediRegular">
            hyperspace lane
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="https://www.joshallan.dev"
              target="_blank"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              <kbd>Created by Josh Allan</kbd>
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-aurebesh">
            hyperspace lane
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="https://www.joshallan.dev"
              target="_blank"
              className="text-xs font-aurebesh text-blue-600 dark:text-blue-500 hover:underline"
            >
              Created by Josh Allan
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
