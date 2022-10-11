<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->integer('course_id');
            $table->integer('student_id');
            $table->string('course_name');
        });
    }

    public function down()
    {
        Schema::dropIfExists('courses');
    }
};
