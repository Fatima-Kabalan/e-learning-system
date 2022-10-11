<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Course extends Model
{
    use HasFactory, Notifiable;  

    protected $connection = 'mongodb';

    protected $fillable = [
        'course_id',
        'student_id',
        'course_name'
    ];

    public function user () {
        return $this->belongsTo(User::class);
    }
}
