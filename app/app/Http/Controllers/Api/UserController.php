<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;  //Postをモデルをuseする

class UserController extends Controller
{
    public function register(Request $request) {
       $user = new User;
       $user->name = $request->name;
       $user->email = $request->email;
       $user->password = $request->password;
       $user->save();
       return response()->json($user, 200);
    }
}
