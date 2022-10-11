<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function addStudents(Request $request)
   {
      $student = User::create([
        'name' =>$request->name,
        'email' =>$request->email,
        'password' =>Hash::make($request->password),
        'user_type' =>3,
      ]);
      $student->save();
      return response()->json([
        "status"=>"success",
        "data"=>$student,
      ]);
   }
}
