<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Layout com Vue e Tailwind</title>
        <script>
            window.appData = {
                theme: @json($theme)
            }
        </script>

        @vite(['resources/js/app.js', 'resources/css/app.css'])
    </head>
    <body class="flex justify-center items-center p-20">
        <div id="app">
            <login-form-component></login-form-component>
        </div>
    </body>
</html>
