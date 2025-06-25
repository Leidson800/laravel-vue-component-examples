<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $theme = fake()->randomElement(['theme1', 'theme2', 'theme3']);
    return view('welcome', compact('theme'));
});
