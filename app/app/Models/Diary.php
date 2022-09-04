<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diary extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'contents',
        'icon',
    ];

    //1対多のリレーション追加
    public function user() {
        return $this->belongsTo(User::class);
    }
}
