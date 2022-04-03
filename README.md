# 導入手順

## docker インストール

## docker-compose インストール

## 環境セットアップ
```bash
$ docker-compose up -d --build
```

### vue
```bash
$ docker-compose exec vue bash
$ yarn install
$ yarn build
$ exit
```

### api
```bash
$ docker-compose exec api bash
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ exit
```

#### Linux 環境の場合、下記も実行
```bash
$ docker-compose exec api bash
$ chmod 777 storage/logs/
$ chmod 777 storage/framework/cache/
$ chmod 777 storage/framework/sessions/
$ chmod 777 storage/framework/views/
$ exit
```
