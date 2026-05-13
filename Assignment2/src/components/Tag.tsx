interface TagProps {
    label: string
    color: string
}

export function Tag({ label, color }: TagProps) {
    const colorClasses = {
        blue: "bg-blue-500 text-white",
        green: "bg-green-500 text-white",
        red: "bg-red-500 text-white",
        yellow: "bg-yellow-400 text-black",
        purple: "bg-purple-500 text-white",
        pink: "bg-pink-500 text-white",
    };

    return (
        <span className={`${colorClasses[color]} inline-block rounded-full mt-2 mr-2 px-3 py-1 text-sm font-semibold`}>
            {label}
        </span>
    )
}
