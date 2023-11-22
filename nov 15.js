<!DOCTYPE html>
<html>
<head>
    <title>Clock</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function() {
            // 문서객체를 선택합니다.
            var clock = document.getElementById('clock');
            // 1초마다 함수를 실행합니다.
            setInterval(function () {
                var now = new Date();
                clock.innerHTML = now.toString();
            }, 1000);
        };
    </script>
</head>
<body>
    <h1 id ="clock"></h1>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script>
        //이벤트를 연결합니다.
        $(document).ready(function () {
            // 스타일 속성을 변경합니다.
            $('h1').css('color', 'red');
            $('h1').css('background', 'black');
        });
    </script>
</head>
<body>
    <h1>Header</h1>
    <h1>Header</h1>
    <h1>Header</h1>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            //속성을 추출합니다.
            var src = $('script').attr('src');

            // 출렵합니다.
            alert(src);
        });
    </script>
</head>
<body>

</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        $(document).ready(function () {
            // 스타일을 적용합니다.
            $('.box').css('float', 'left');
            $('.box').css('margin', 10);
            $('.box').css('width', 100);
            $('.box').css('height', 100);
            $('.box').css('backgroundColor', 'red');
        });
    </script>
</head>
<body>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        $(document).ready(function () {
            // 내부 글자를 변경합니다.
            $('h1:nth-child(1)').text('<a href="#">text()</a>');
            $('h1:nth-child(2)').html('<a href="#">html()</a>');
        });
    </script>
</head>
<body>
    <h1>Header - 0</h1>
    <h1>Header - 1</h1>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>jQuery Basic</title>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script>
        $(document).ready(function () {
            // 스타일 변경 및 이벤트 연결
            $('#box').css({
                width: 100,
                height: 100,
                background: 'orange'
            }).on('click', function () {
                $(this).css('background', 'red');
            }).on('mouseenter', function () {
                $(this).css('background', 'blue');
            }).on('mouseleave', function () {
                $(this).css('background', 'orange');
            });
        });
    </script>
</head>
<body>
    <div id="box"></div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Animate Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 이벤트를 연결합니다.
            $('h1').hover(function () {
                // 색상을 변경합니다.
                $(this).css({
                    background: 'red',
                    color: 'white'
                });
            }, function () {
                // 색상을 제거합니다.
                $(this).css({
                    background: '',
                    color: ''
                });
            });
        });
    </script>
</head>
<body>
    <h1>Click</h1>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Event Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 이벤트를 연결합니다.
            $('button').click(function () {
                // 간단한 효과를 적용합니다.
                $('.page').fadeToggle('slow');
            });
        });
    </script>
</head>
<body>
    <button>Toggle Show</button>
    <div class="page">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Animate Basic</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        $(document).ready(function () {
            // 스타일을 변경합니다.
            $('#box').css({
                width: 100,
                height: 100,
                background: 'red'
            }).animate({
                width: 300,
                opacity: 0.5,
            }, 500);
        });
    </script>
</head>
<body>
    <div id="box"></div>
</body>
</html>