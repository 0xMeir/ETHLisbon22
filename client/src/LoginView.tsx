export default function LogiView({ onSubmit }: any) {
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    type="text"
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={onSubmit}
                                className="flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all transition-duration-200"
                            >
                                Login with Fuel ⚡
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
