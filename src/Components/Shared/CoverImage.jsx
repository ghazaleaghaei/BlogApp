import Link from "next/link"
import Image from "next/image";

function CoverImage({ coverImageUrl, title, link }) {
    return (<Link href={link}>
        <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
                src={coverImageUrl}
                alt={title}
                fill
                className="object-cover object-center hover:scale-110 duration-300"
                sizes="(min-width: 808px) 50vw, 100vw"
            />
        </div>
    </Link>)
}
export default CoverImage
