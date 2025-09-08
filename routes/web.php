<?php

use App\Http\Controllers\Auth\AuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('WelcomePage');
});

Route::get('/login', [AuthenticationController::class, 'login'])
    ->name('login');
Route::get('/register', [AuthenticationController::class, 'register'])
    ->name('register');
