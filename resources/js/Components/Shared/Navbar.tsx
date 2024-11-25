import { Link } from "@inertiajs/react";

export function Navbar() {
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
                {/* <div className="bg-red-200 aspect-square h-12" /> */}
            </div>
        </nav>
    );
}
