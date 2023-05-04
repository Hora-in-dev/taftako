<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="asset/dist/main.css">
    <link rel="stylesheet" href="asset/css/animatecss.css">
    {{-- <link rel="stylesheet" href="asset/css/initial.css"> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <title>Document</title>
</head>
<body class="flex-row justify-center m-4">

    @yield('one')
    @yield('tow')

</body>
<script src="./js/jquery-3.6.4.min.js"></script>
        <script src="asset/js/slider.js"></script>
        <script src="asset/js/wow.js"></script>
        <script>
            new WOW().init();
        </script>
</html>