<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\SellerMiddleware;
use App\Http\Middleware\SuperadminMiddleware;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::fallback(function () {
    return Inertia::render('Fallback');
})->name('fallback');

Route::get('/auth/login', function () {
    return Inertia::render('auth/Login');
})->name('login');

Route::post('/auth/logout', function (Request $request) {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();

    return redirect()->route('welcome')->with('success', 'Logout success');
})->name('logout');

Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect();
})->name('google.redirect');

Route::get('/auth/google/callback', function (Request $request) {
    $user = Socialite::driver('google')->user();

    // if user with the same email exists in db, update their name and image_url, if not throw an error
    $userInDb = User::where('email', $user->email)->first();

    if ($userInDb) {
        $userInDb->update([
            'name' => $user->name,
            'image_url' => $user->avatar
        ]);

        Auth::login($userInDb);

        return redirect()->route('welcome')->with('success', 'Login success');
    }

    return redirect()->route('welcome')->with('error', 'User not found');
})->name('google.callback');

Route::middleware([AuthMiddleware::class])->group(function () {
    Route::get('/dashboard/user', function (Request $request) {
        return Inertia::render('dashboard/user/index');
    })->name('dashboard.user');

    Route::get('/dashboard/user/orders', function (Request $request) {
        return Inertia::render('dashboard/user/Orders');
    })->name('dashboard.user.orders');
});

Route::middleware([SellerMiddleware::class])->group(function () {
    Route::get('/dashboard/seller/store', function (Request $request) {
        return Inertia::render('dashboard/seller/Store');
    })->name('dashboard.seller.store');

    Route::get('/dashboard/seller/products', function (Request $request) {
        return Inertia::render('dashboard/seller/Products');
    })->name('dashboard.seller.products');

    Route::get('/dashboard/seller/orders', function (Request $request) {
        return Inertia::render('dashboard/seller/Orders');
    })->name('dashboard.seller.orders');
});

Route::middleware([SuperadminMiddleware::class])->group(function () {
    Route::get('/dashboard/superadmin/users', function (Request $request) {
        return Inertia::render('dashboard/superadmin/Users');
    })->name('dashboard.superadmin.users');

    Route::get('/dashboard/superadmin/store-requests', function (Request $request) {
        return Inertia::render('dashboard/superadmin/StoreRequests');
    })->name('dashboard.superadmin.store-requests');
});
