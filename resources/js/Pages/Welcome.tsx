import { usePage } from "@inertiajs/react";
import { ChevronRightIcon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import GuestLayout from "../layouts/GuestLayout";

export default function Welcome() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

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
            <section className="flex flex-row gap-4">
                {cards.map((card) => (
                    <Card key={card.who} {...card} />
                ))}
            </section>
        </GuestLayout>
    );
}

function Card({ who, what, why }: { who: string; what: string; why: string }) {
    return (
        <div className="flex flex-col gap-4 p-8 bg-white shadow-md rounded-2xl">
            <h2 className="font-semibold text-3xl">{who}</h2>
            <h3 className="font-medium text-xl text-zinc-600">{what}</h3>
            <p className="text-2xl">{why}</p>
        </div>
    );
}

const cards = [
    {
        who: "Untuk Penjual",
        what: "Organisasi, Himpunan, atau Kepanitiaan",
        why: "Daftarkan dan promosikan makanan danusan Anda dengan mudah",
    },
    {
        who: "Untuk Pengunjung",
        what: "Cari Informasi Makanan",
        why: "Temukan informasi lengkap tentang makanan danusan yang tersedia",
    },
    {
        who: "Untuk Pembeli",
        what: "Mahasiswa",
        why: "Pesan makanan dari mana saja melalui website kami",
    },
];
