<!DOCTYPE html>
<html>
<head>
    <Title>Document Object Model</title>
</head>
<body>
    <h1>Process -1</h1>
    <h2>Process -2</h2>
    <script>
      // h1 태그의 배경 색상을 변경합니다.
      document.querySelector('h1').style.backgroundColor = 'red';
      // h2 태그의 글자 색상을 변경합니다.
      document.querySelector('h2').style.color = 'red';
    </script>
</body>
</html>




<!DOCTYPE html>
<html>
<head>
    <title>DOM Basic</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function () {
            // 문서 객체를 선택합니다.
            var header = document.getElementById('header');

            // 문서 객체를 조작합니다.
            header.style.color = 'orange';
            header.style.background = 'red';
            header.innerHTML = 'From JavaScript';
        };
    </script>
</head>
<body>
    <h1 id="header">Header</h1>
</body>
</html>




<!DOCTYPE html>
<html>
<head>
    <title>DOM Basic</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function () {
            // 문서 객체를 선택합니다.
            var header = document.querySelector('h1');

            // 문서 객체를 조작합니다.
            header.style.color = 'orange';
            header.style.background = 'red';
            header.innerHTML = 'From JavaScript';
        };
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
    <title>DOM Basic</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function () {
            // 문서 객체를 선택합니다.
            var headers = document.querySelectorAll('h1');

            for (var i = 0; i < headers.length; i++) {
                // 변수를 선언합니다.
                var header = headers[i];

                // 문서 객체를 조작합니다.
                header.style.color = 'orange';
                header.style.background = 'red';
                header.innerHTML = 'From JavaScript';
            }
        };
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
    <title>DOM Basic</title>
    <script>
        // 이벤트를 연결합니다.
        window.onload = function () {
            // 문서 객체를 추가합니다.
            var output = '';
            for (var i = 0; i < 256; i++) {
                output += '<div>hellow</div>';
            }
            document.body.innerHTML = output;

            // 문서 객체를 선택합니다.
            var divs = document.querySelectorAll('div');
            for (var i = 0; i < divs.length; i++) {
                // 변수를 선언합니다.
                var div = divs[i];

                // 스타일을 적용합니다.
                div.style.height = '2px';
                div.style.background = 'rgb(' + i + ',' + i + ',' + i + ')';
            }
        };
    </script>
</head>
<body>
    
</body>
</html>