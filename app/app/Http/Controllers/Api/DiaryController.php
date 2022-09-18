<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Diary;
use Illuminate\Support\Facades\Auth;

class DiaryController extends Controller
{
   // ブログ一覧を表示
   public function index()
   {
       $posts = Diary::all();
       return response()->json($posts, 200);
   }
   //詳細表示
   public function detail($id)
   {
      $post = Diary::find($id);
       return $post;
   }
   //ブログ作成
   public function create(Request $request)
   {
       $post = new Diary;
       $post->user_id = 1;
       $post->title = $request->title;
       $post->contents = $request->contents;
       if($request->file('filename')) {
          $filepath = $request->file('filename')->store('public/');
       // $filepath = $request->file('filename')->store('public/uploads/'. date("YmdHis") . $file);
          $post->filename = basename($filepath);
       }
       $post->save();
       return response()->json($post, 200);
   }

   // 編集画面に遷移するためのアクション
   // public function edit(Request $request)
   // {
   //     $post = Diary::find($request->id);
   //     return $post;
   // }
   //データを更新するためのアクション
   public function update(Request $request,$id)
   {
       $post = Diary::find($id);
       $post->title = $request->title;
       $post->contents = $request->contents;
       if($request->file('filename')) {
         $filepath = $request->file('filename')->store('public/');
         $post->filename = basename($filepath);
      }
       $post->save();
       $posts = Diary::all();
       return $posts;
   }
   //データを削除するためのアクション
   public function delete(Request $request)
    {
        $post =  Diary::find($request->id);
        $post->delete();
        $posts = Diary::all();
        return $posts;
    }
}
