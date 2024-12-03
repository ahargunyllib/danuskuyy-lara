import DashboardLayout from "@/layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function DashboardSellerOrders() {
    return (
        <DashboardLayout >
            <div className="flex flex-col items-center justify-center h-full space-y-4 bg-red-200">
                <h1 className="text-3xl font-bold">Welcome to the Dashboard Seller Orders</h1>
                <p className="text-lg text-center">
                    This is a protected route. You can only access this page if
                    you are logged in.
                </p>
            </div>
        </DashboardLayout>
    );
}
