import { usePage } from "@inertiajs/react";
import { ChevronRightIcon } from "lucide-react";
import { useEffect } from "react";
import GuestLayout from "../../layouts/GuestLayout";

export default function Welcome() {
    const { errors } = usePage().props;

    return (
        <GuestLayout className="flex flex-col justify-center items-center gap-8 p-16">
            <section className="space-y-4 text-center w-3/4">
                <h1 className="font-bold text-5xl leading-none">
                    Selamat Datang di Danuskuyy
                </h1>
                <p className="font-medium text-3xl text-zinc-600">
                    Platform untuk memudahkan penggalangan dana melalui
                    penjualan makanan di Fakultas Ilmu Komputer Universitas
                    Brawijaya
                </p>
            </section>
            <section>
                <button className="py-4 px-8 bg-yellow-400 rounded-2xl shadow-md border border-yellow-600 flex flex-row gap-4">
                    <a href="/browse" className="font-medium text-2xl">
                        Mulai Sekarang
                    </a>
                    <ChevronRightIcon size={32} />
                </button>
            </section>
        </GuestLayout>
    );
}
