<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post("/login", [AuthController::class, "login"])->name("login");

Route::group(["prefix"=> "v1"], function(){

    Route::group(["middleware" => "auth:api"], function(){
        Route::post("/addStudents", [UserController::class, "addStudents"])->name("addStudents"); 
    });

});