<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;  //Postをモデルをuseする

class PostController extends Controller
{
   // postの一覧を表示する
   public function index()
   {
       $posts = Post::all();
       return response()->json($posts, 200);
   }

   //index()の下に追記する
   public function create(Request $request)
   {
       $post = new Post;
       $post->name = $request->name;
       $post->content = $request->content;
       $post->save();
       return response()->json($post, 200);
   }
}
