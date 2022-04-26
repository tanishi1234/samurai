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


# Heroku デプロイ

```bash
$ heroku login
$ heroku create
$ heroku create -a <app-name>-api
$ heroku buildpacks:add heroku-community/multi-procfile
$ heroku buildpacks:add -a <app-name> https://github.com/lstoll/heroku-buildpack-monorepo
$ heroku buildpacks:add -a <app-name> heroku/nodejs
$ heroku buildpacks:add -a <app-name> https://github.com/heroku/heroku-buildpack-static
$ heroku config:set -a <app-name> PROCFILE=vue/Procfile
$ heroku config:set -a <app-name> APP_BASE=vue
$ heroku config:set -a <app-name> VITE_API_BASE_URL=https://<app-name>-api.herokuapp.com/
$ heroku buildpacks:add -a <app-name>-api heroku-community/multi-procfile
$ heroku buildpacks:add -a <app-name>-api https://github.com/lstoll/heroku-buildpack-monorepo
$ heroku buildpacks:add -a <app-name>-api heroku/php
$ heroku config:set -a <app-name>-api PROCFILE=api/Procfile
$ heroku config:set -a <app-name>-api APP_BASE=api
$ git push https://git.heroku.com/serene-island-03021.git HEAD:main
$ git push https://git.heroku.com/<app-name>-api.git HEAD:main
```
