import ErrorImage from "@assets/images/errorImage";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"
const Error = () => {
    const error = useRouteError();
    let errorStatus: number;
    let errorStatusText:string;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText
    }else{
        errorStatus = 404;
        errorStatusText = "Page Not Found"
    }
  return (
<div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <ErrorImage />

    <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>
    <p className="text-center text-4xl text-red-500">{errorStatus}</p>
    <p className="mt-4 text-gray-500">{errorStatusText}</p>
    <Link to='/' replace={true} 
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"

    >
        Go to home
    </Link>
  </div>

</div>
  )
}

export default Error