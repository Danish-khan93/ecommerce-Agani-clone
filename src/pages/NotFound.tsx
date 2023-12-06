import {Link} from "react-router-dom"


const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">

    <div className="max-w-md bg-white p-8 rounded shadow-md">
      <h1 className="text-4xl font-bold text-gray-800">404 Not Found</h1>
      <p className="text-gray-600 mt-4">
        The page you are looking for might not exist or has been moved.
      </p>
      <Link to="/" className="text-blue-500 mt-4 inline-block">
        Go back to home
      </Link>
    </div>
    </div>
  );
};

export default NotFound;
