import { usePage } from "@inertiajs/react";

export default function Welcome() {
    const { errors } = usePage().props;

    return (
        <main className="flex flex-row w-screen h-screen overflow-y-hidden">
            <section className="relative w-full">
                <div className="absolute z-10 w-full h-full bg-black/10 p-8 flex flex-col justify-between">
                    <img
                        src="/danuskuyy-logo-text-white.png"
                        alt="Danuskuyy Logo text White"
                        className="w-fit"
                    />
                    <div className="text-white font-semibold w-3/8 flex flex-col gap-2">
                        <p className="text-xl">
                            "If you don't find a way to make money while you
                            sleep, you will work until you die."
                        </p>
                        <p className="text-lg">Warren Buffett</p>
                    </div>
                </div>
                <img
                    src="/login-bg.png"
                    alt="Login Background"
                    className="object-contain w-full"
                />
            </section>
            <section className="flex flex-col items-center justify-center p-12 gap-4 bg-yellow-50">
                <div className="space-y-2">
                    <h1 className="font-semibold text-3xl">Selamat Datang!</h1>
                    <h2 className="text-xl text-neutral-400">
                        Silahkan login untuk melanjutkan ke Danuskuyy
                    </h2>
                </div>
                <a
                    href="/auth/google/redirect"
                    className="bg-white rounded-xl shadow-md border-2 border-neutral-400 px-4 py-2 w-full hover:bg-neutral-100 transition-all ease-in-out duration-200 flex flex-row gap-2 justify-center items-center"
                >
                    <img
                        src="/google-icon-logo.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                    />
                    <p className="text-black text-lg">Masuk dengan Google</p>
                </a>
                <p className="text-xs text-neutral-400">
                    Dengan mengklik lanjutkan, Anda menyetujui Persyaratan
                    Layanan dan Kebijakan Privasi kami.
                </p>
            </section>
        </main>
    );
}
