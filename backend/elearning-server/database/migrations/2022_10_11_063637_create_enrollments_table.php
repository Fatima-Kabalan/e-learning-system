<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->integer('student_id');
            $table->integer('course_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('enrollments');
    }
};
