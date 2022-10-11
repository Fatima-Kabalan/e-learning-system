<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model;


class Course extends Model
{
    protected $fillable = [
        'course_id',
        'student_id',
        'course_name'
    ];

    public function user () {
        return $this->belongsTo(User::class);
    }
}
