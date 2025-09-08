<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AuthenticationController extends Controller
{
    public function login()
    {
        return Inertia::render('LoginPage');
    }

    public function register()
    {
        return Inertia::render('RegisterPage');
    }
}
