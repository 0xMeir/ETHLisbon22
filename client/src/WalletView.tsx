import { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

export default function WalletView({ onSubmit }: any) {
    const [address] = useState(
        '0x976e5c3fa620092c718d852ca703b6da9e3075b9f2ecb8ed42d9f746bf26aafb',
    );
    const [txSent, setTxSent] = useState(false);
    // const [state, setState] = useState({
    //     address: '',
    //     privateKey: '',
    //     publicKey: '',
    // });

    // useEffect(() => {
    //     const provider = new Provider('127.0.0.1:4000');
    //     const getTestWallet = async () => {
    //         const testWallet = await TestUtils.generateTestWallet(provider);
    //         const { address, privateKey, publicKey } = testWallet;
    //         const hexAddress = address.toHexString();

    //         setState({ address: hexAddress, privateKey, publicKey });
    //     };
    //     getTestWallet();
    // }, []);

    const copyAddress = (address: string) => {
        navigator.clipboard.writeText(address);
    };

    return (
        <>
            <motion.div
                className="sm:mx-auto sm:w-full sm:max-w-md"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    {!txSent && (
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                />
                            </svg>
                            <h3
                                className="text-lg font-medium leading-6 text-gray-500 cursor-pointer hover:opacity-80"
                                onClick={() => copyAddress(address)}
                            >
                                {address.substring(0, 5) + '...' + address.slice(-4)}
                                {/* {state.address.substring(0, 5) +
                                '...' +
                                state.address.slice(-4)} */}
                            </h3>
                        </motion.div>
                    )}
                    <div className="mt-6">
                        {txSent ? (
                            <div className="-mt-8 mb-8">
                                <Player
                                    autoplay
                                    keepLastFrame
                                    src="https://assets7.lottiefiles.com/packages/lf20_uu0x8lqv.json"
                                    style={{ height: '300px', width: '300px' }}
                                >
                                    <Controls
                                        visible={false}
                                        // buttons={['play', 'repeat', 'frame', 'debug']}
                                    />
                                </Player>
                                <h3 className="text-3xl font-bold text-sky-700 text-center">
                                    Success!
                                </h3>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 text-gray-500 bg-white">
                                            Create a transaction.
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="my-4">
                                        <label
                                            htmlFor="amount"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Amount
                                        </label>
                                        <input
                                            id="amount"
                                            name="amount"
                                            placeholder="0.00"
                                            type="text"
                                            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="my-4">
                                        <label
                                            htmlFor="amount"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Recipient
                                        </label>
                                        <input
                                            id="amount"
                                            name="amount"
                                            placeholder="0x00000000000000000..."
                                            type="text"
                                            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        <div>
                            {txSent ? (
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <button
                                        id="confettiId"
                                        onClick={() => setTxSent(false)}
                                        className="inline-flex items-center rounded-md justify-center border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all transition-duration-200"
                                        // className="flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 mr-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                            />
                                        </svg>
                                        Send another
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.button
                                    id="confettiId"
                                    onClick={() => {
                                        onSubmit();
                                        setTxSent(true);
                                    }}
                                    className="inline-flex items-center rounded-md justify-center border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2  transition-all transition-duration-200"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    Send transaction ⚡
                                </motion.button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
