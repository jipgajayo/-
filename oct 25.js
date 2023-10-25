const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (let fruit of fruit) {
    consol.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));
console.log(fruits.indexof('코코넛'));







// make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}


// make an array out of a string
{
    const fruits = '사과, 키위, 바나나,체리';
    const result = fruits.split();
    console.log(result);
}


//make new array wthout the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}

