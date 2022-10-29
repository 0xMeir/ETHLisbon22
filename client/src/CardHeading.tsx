type Props = {
    heading: string;
    subHeading: string;
};

const CardHeading = ({ heading, subHeading }: Props) => (
    <div className="flex flex-col justify-center min-h-full py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 mx-auto text-emerald-400"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
            </svg>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-center text-gray-900 text-emerald-700">
                {heading}
            </h2>
            <p className="text-lg text-center text-emerald-700">{subHeading}</p>
        </div>
    </div>
);

export default CardHeading;
