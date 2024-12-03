import { Link, usePage } from "@inertiajs/react";
import { LogOut } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Navbar() {
    const { user } = usePage().props.auth;

    return (
        <nav className="sticky flex flex-row justify-between items-center p-8 w-full bg-white">
            <Link href="/">
                <img src="/danuskuyy-logo-text.png" alt="Danuskuyy Logo Text" />
            </Link>
            <div className="-z-10 absolute w-full left-0 flex flex-row gap-4 justify-center items-center font-semibold text-2xl">
                <Link href="/browse">
                    <a>Telusuri</a>
                </Link>
                {/* <Link href="/browse">
                    <a>Bantuan</a>
                </Link> */}
            </div>
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
                    <a href="/auth/login" className="py-2 px-4 bg-yellow-400 rounded-xl shadow-md border border-yellow-600 flex flex-row gap-4 font-medium text-md">
                        <p >
                            Masuk
                        </p>
                    </a>
                )}
            </div>
        </nav>
    );
}
