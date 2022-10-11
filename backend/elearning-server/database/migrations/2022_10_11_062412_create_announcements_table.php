<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('announcements', function (Blueprint $table) {
            $table->integer('anounce_id');
            $table->string('anounce_info');
            $table->integer('instructor_id');

        });
    }

    public function down()
    {
        Schema::dropIfExists('announcements');
    }
};
