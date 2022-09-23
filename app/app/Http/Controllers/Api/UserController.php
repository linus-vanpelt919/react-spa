<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;  //Postをモデルをuseする
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
}
