<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;  //Userモデルをuseする
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function register(Request $request) {
       $user = new User;
       $user->name = $request->name;
       $user->email = $request->email;
       $user->password = Hash::make($request->password);
       $user->save();
       return response()->json($user, 200);
    }
//https://www.petitmonte.com/php/laravel_original_login.html
    public function login(Request $request) {

    }
}
