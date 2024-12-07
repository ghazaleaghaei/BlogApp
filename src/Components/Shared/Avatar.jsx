import Image from "next/image"

function Avatar({ src, width = 24 }) {
    return (<Image
        src={src || "/images/avatar/webp"}
        width={width}
        height={width}
        className="rounded-full ring-1 ring-secondary-300 me-2"
        alt={src}
    />)
}
export default Avatar
