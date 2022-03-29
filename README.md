# 導入手順

## docker インストール

## docker-compose インストール

## 環境セットアップ
```bash
$ docker-compose up -d --build
$ docker-compose exec api bash
$ composer install
$ php artisan key:generate
```

### vue
```bash
$ docker-compose exec vue bash
$ npm ci
$ npm run build
```

### api
```bash
$ docker-compose exec api bash
$ composer install
$ php artisan key:generate
```

#### Linux 環境の場合、下記も実行
```bash
$ chmod 777 storage/logs/
$ chmod 777 storage/framework/sessions/
$ chmod 777 storage/framework/views/
```
