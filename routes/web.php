<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    $theme = fake()->randomElement(['theme1', 'theme2', 'theme3']);
    return view('welcome', compact('theme'));
})->where('any', '.*');
