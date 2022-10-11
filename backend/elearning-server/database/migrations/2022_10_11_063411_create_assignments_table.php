<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('assignments', function (Blueprint $table) {
            $table->integer('student_id');
            $table->integer('assignment_id');
            $table->string('assignment_name');
        });
    }

    public function down()
    {
        Schema::dropIfExists('assignments');
    }
};
