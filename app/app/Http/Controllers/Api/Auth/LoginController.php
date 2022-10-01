<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            //attemptメソッドは、キーと値のペアの配列を最初の引数として受け入れます。配列内の値は、データベース テーブルでユーザーを検索するために使用されます。
            $request->session()->regenerate();
            return response()->json(Auth::user());
        }
        return response()->json([], 401);
        // return back()->withErrors([
        //     'email' => 'メールアドレスまたはパスワードが間違っています.',
        // ]);
    }
}
