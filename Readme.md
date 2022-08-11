#お手軽LAMP環境構築
PHP + Nginx + MySQL

#ファイル置き場
appディレクトリ配下に置いてください。

```
docker-compose up -d
```

docker-compose ps

docker exec -it react-spa_app_1 bash
コンテナに入ったら
app配下に移動
cd app

php artisan コマンド

exit で抜ける

docker-compose exec app bash
でも入れる

laravelのバージョンを確認する場合
docker-compose exec app php app/artisan -V
Laravel Framework 8.83.23


docker exec react-spa_app_1 php app/artisan -V


composer require laravel/ui:3.*
npm install && npm run dev
