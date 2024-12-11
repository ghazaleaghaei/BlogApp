import Button from "@/Components/Shared/Button";
import Link from "next/link";

export const metadata = {
    title: "خانه-وب اپلیکیشن مدیریت بلاگ"
};

export default function Home() {
    return (<section className="bg-secondary-50 w-full text-center flex flex-col gap-10 my-20 items-center">
        <h1 className="text-2xl lg:text-4xl font-bold my-10 text-secondary-800">اپلیکیشن مدیریت بلاگ</h1>
        <p className="text-secondary-500 text-lg leading-loose">جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
            <br /> بتونی بلاگ بسازی-کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!
        </p>
        <div className="flex gap-8 items-center mb-10">
            <Button variant="outline">
                <Link href="/posts">
                    مطالعه بلاگ ها
                </Link>
            </Button>
            <Button>
                <Link href="/profile">
                    مدیریت بلاگ ها
                </Link>
            </Button>
        </div>
    </section>)
}
