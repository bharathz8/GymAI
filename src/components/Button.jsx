const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    transparent,
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
          ${transparent
                    ? `bg-transparent ${textColor} ${borderColor} hover:bg-gray-200 hover:text-black hover:border-gray-400`
                    : backgroundColor
                        ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-opacity-80`
                        : "bg-coral-red text-white border-coral-red hover:bg-red-700"
                } rounded-full ${fullWidth && "w-full"}`}
        >
            {label}

            {iconURL && (
                <img
                    src={iconURL}
                    alt="icon"
                    className="ml-2 rounded-full bg-white w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
