import { Link } from "react-router";
import { useActionState, useState } from "react";
import { useAuthForm } from "../../api/authApi";
import ErrorAlert from "../alerts/Error";

export default function Register() {
    const [error, setError] = useState(null)
    const handleRegister = useAuthForm(setError)
    const [state, formAction, pending] = useActionState(handleRegister, {email:'', password:'', rePass:''})
    
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col  py-10 sm:px-6 lg:px-8">
            {error && <ErrorAlert error={error} />}

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                        Or login to your account
                    </Link>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form action={formAction}>
                        
                        
                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="user@example.com"
                                    type="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    defaultValue={state.email}
                                />
                                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-red-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password_confirmation"
                                    name="rePass"
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    disabled={pending}
                                >
                                    Create account
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
