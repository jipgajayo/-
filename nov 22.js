<!DOCTYPE html>
<html>
<head>
    <title>Event</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function () {
            // 문서 객체를 선택합니다.
            var input_1 = document.querySelectorAll('input')[0];
            var input_2 = document.querySelectorAll('input')[1];
            // input_1
            input_1.onkeydown = function () {
                // 글자 개수가 여섯 개 이상일 경우
                if (6 <= input_1.value.length) {
                    // input_2 문서 객체로 초점을 이동합니다.
                    input_2.focus();
                }
            };
            // input_2
            input_2.onkeydown = function (event) {
                // 이벤트 객체를 추출합니다.
                var event = event || window.event;
                // 사용자의 입력이 '백 스페이스'이고 입력된 글자가 없는 경우
                if (event.keyCode == 8 && input_2.value.length == 0) {
                    input_1.focus();
                }
            };
        };
    </script>
</head>
<body>
    <input type="text" maxlength="6">
    <span>-</span>
    <input type="text" maxlength="7">
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title>Frame Animation</title>
    <script>
        window.onload = function () {
            // 변수를 선언합니다.
            var count = 0;
            var image = document.getElementById('image');
            var frames = [
                '0.png', '1.png', '2.png', '3.png', '4.png',
                '5.png', '6.png', '7.png', '8.png', '9.png',
                '10.png', '11.png', '12.png', '13.png', '14.png',
            ];
            // 타이머 반복을 시작합니다.
            setInterval(function () {
                image.src = frames[count % frames.length];
                count = count + 1;
            }, 1000 / 20);
        };
    </script>
</head>
<body>
    <img id="image">
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title>jQuery DOM</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 10회 반복합니다.
            for (var i = 0; i < 10; i++) {
                // 문서 객체를 생성합니다.
                var $dynamic = $('<h1>Create Document Object + ' + i + '</h1>').css({
                        backgroundColor: 'black',
                        color: 'red'
                    });
                
                // 문서 객체를 추가합니다.
                $('body').append($dynamic);
            }
        });
    </script>
</head>
<body>

</body>
</html>


﻿<!DOCTYPE html>
<html>
<head>
    <title>Infinity Scroll</title>
    <script src="https://code.jquery.com/jquery-3.1.0.js"> </script>
    <script>
        // 이벤트를 연결합니다.
        $(document).ready(function () {
            // 문서 객체 추가 함수
            var appendDocument = function () {
                for (var i = 0; i < 20; i++) {
                    // 문서 객체를 생성합니다.
                    $('<h1>Infinity Scroll</h1>').appendTo('body');
                }
            };
            // 초기에 문서 객체를 추가합니다.
            appendDocument();
            // 이벤트를 연결합니다.
            $(window).scroll(function () {
                // 변수를 선언합니다.
                var scrollHeight = $(window).scrollTop() + $(window).height();
                var documentHeight = $(document).height();
                // 검사합니다.
                if (scrollHeight == documentHeight) {
                    appendDocument();
                }
            });
        });
    </script>
</head>
<body>

</body>
</html>