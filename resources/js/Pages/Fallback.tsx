import GuestLayout from "../layouts/GuestLayout";

export default function NotFound() {
    return (
        <GuestLayout className="flex flex-col justify-center items-center gap-8 p-16">
            <img
                src="https://preview.redd.it/i-dont-get-it-either-v0-krkh3nixj6eb1.jpg?auto=webp&s=8bb4cf2e383c3237477ab66fad3723cb25a5d81a"
                alt="404 Not Found"
                className="w-1/4"
            />
        </GuestLayout>
    );
}
