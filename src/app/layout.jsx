import Header from "@/Components/Layout/Header";
import vazirFont from "../Constants/localFont";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import UserProvider from "../Context/UserContext";

export const metadata = {
    title: {
        template: "%s | بلاگ اپ",
        default: "بلاگ اپ",
    },
    description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans scroll-smooth flex flex-col min-h-screen`}>
                <UserProvider>
                    <Toaster />
                    <Header />
                    <div className="container xl:max-w-7xl h-fit flex-1">
                        {children}
                    </div>
                </UserProvider>
            </body>
        </html>
    );
}
