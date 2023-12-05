// 객체 자료형
let number = new Number(273);
let string = new String('안녕하세요');
let boolean = new Boolean(true);

// 변수를 선언합니다.
let number = 273.5210332;

// 출력합니다.
console.log(number.toFixed(1));
console.log(number.toFixed(4));

// 변수를 선언합니다.
let string = 'abcdefg';

// 출력합니다.
string = string.toUpperCase();
console.log(string);

// 변수를 선언합니다.
let string = '안녕하세요, 좋은 아침입니다.';

// 문자열 내부에 "아침"이라는 문자열이 있는지 확인합니다.
if (string.indexOf('아침') >= 0) {
    console.log('좋은 아침이에요...!');
}