import { Link, usePage } from "@inertiajs/react";
import { LogOut } from "lucide-react";
import { PropsWithChildren } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";

export default function DashboardLayout({ children }: PropsWithChildren<{}>) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header />
                <main className="flex-1 overflow-y-auto bg-gray-200">
                    {children}
                </main>
            </div>
        </div>
    );
}

function Sidebar() {
    const {
        props: {
            auth: { user },
        },
        url,
    } = usePage();

    console.log(url);

    const routes = {
        user: {
            title: "Pembeli",
            items: [
                {
                    title: "Akun Saya",
                    href: "/dashboard/user",
                },
                {
                    title: "Riwayat Pemesanan",
                    href: "/dashboard/user/orders",
                },
            ],
        },
        superadmin: {
            title: "Super Admin",
            items: [
                {
                    title: "Daftar Pengguna",
                    href: "/dashboard/superadmin/users",
                },
                {
                    title: "Daftar Request Toko",
                    href: "/dashboard/superadmin/store-requests",
                },
            ],
        },
        seller: {
            title: "Penjual",
            items: [
                {
                    title: "Toko Saya",
                    href: "/dashboard/seller/store",
                },
                {
                    title: "Daftar Produk",
                    href: "/dashboard/seller/products",
                },
                {
                    title: "Riwayat Pemesanan",
                    href: "/dashboard/seller/orders",
                },
            ],
        },
    };

    return (
        <aside className="w-72 bg-yellow-50 border-r border-yellow-400">
            <div className="bg-white h-32 w-full flex items-center justify-center border-b border-yellow-400">
                <img src="/danuskuyy-logo-text.png" alt="Danuskuyy Logo Text" />
            </div>

            <nav className="space-y-4 p-8">
                <h1 className="font-semibold text-xl">{routes.user.title}</h1>
                <ul className="space-y-4">
                    {routes.user.items.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`${
                                    url === item.href
                                        ? "bg-yellow-200"
                                        : "hover:bg-yellow-200 transition-all duration-300 ease-in-out"
                                } px-4 py-2 rounded-md font-semibold block`}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {user.role_id === 0 && (
                    <>
                        <h1 className="font-semibold text-xl">
                            {routes.superadmin.title}
                        </h1>
                        <ul className="space-y-4">
                            {routes.superadmin.items.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`${
                                            url === item.href
                                                ? "bg-yellow-200"
                                                : "hover:bg-yellow-200 transition-all duration-300 ease-in-out"
                                        } px-4 py-2 rounded-md font-semibold block`}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {user.role_id > 1 && (
                    <>
                        <h1 className="font-semibold text-xl">
                            {routes.seller.title}
                        </h1>
                        <ul className="space-y-4">
                            {routes.seller.items.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`${
                                            url === item.href
                                                ? "bg-yellow-200"
                                                : "hover:bg-yellow-200 transition-all duration-300 ease-in-out"
                                        } px-4 py-2 rounded-md font-semibold block`}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </nav>
        </aside>
    );
}

function Header() {
    const {
        props: {
            auth: { user },
        },
    } = usePage();
    return (
        <header className="bg-white h-32 border-b border-yellow-400 p-8 flex justify-end items-center">
            <div>
                {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <img
                                src={user.image_url}
                                alt="Profile"
                                className="aspect-square h-12 rounded-full"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/auth/logout"
                                    as="button"
                                    method="post"
                                    className="w-full"
                                >
                                    <LogOut />
                                    <span>Log out</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <button className="py-2 px-4 bg-yellow-400 rounded-xl shadow-md border border-yellow-600 flex flex-row gap-4">
                        <a
                            href="/auth/google/redirect"
                            className="font-medium text-md"
                        >
                            Login
                        </a>
                    </button>
                )}
            </div>
        </header>
    );
}
