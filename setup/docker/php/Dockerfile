FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd sockets

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

WORKDIR /var/www

COPY setup/docker/php/config.ini /usr/local/etc/php/conf.d/config.ini
COPY setup/docker/php/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

USER root