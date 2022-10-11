<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;

class UserController extends Controller
{
    function addStudents(Request $request)
   {
      $student = User::create([
        'name' =>$request->name,
        'email' =>$request->email,
        'password' =>Hash::make($request->password),
        'user_type' =>2,
      ]);
      $student->save();
      return response()->json([
        "status"=>"success",
        "data"=>$student,
      ]);
   }

   function addInstructors(Request $request)
   {
      $instructor = User::create([
        'name' =>$request->name,
        'email' =>$request->email,
        'password' =>Hash::make($request->password),
        'user_type' =>3,
      ]);
      $instructor->save();
      return response()->json([
        "status"=>"success",
        "data"=>$instructor,
      ]);
   }

   function addCourses(Request $request)
   {
      $course = Course::create([
        'course_name' =>$request->course_name,
        'student_id' =>$request->student_id,
      ]);
      $course->save();
      return response()->json([
        "status"=>"success",
        "data"=>$course,
      ]);
   }

   
   function getStudents(Request $request)
   {
      $student = User::get([
        'student_id' =>$request->student_id,
        'student_name'=>$request->stuident_name,
      ]);
      $student->save();
      return response()->json([
        "status"=>"success",
        "data"=>$student,
      ]);
   }

}
