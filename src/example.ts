
//----------------------------------------------- Task 1

type ConcatFn = (string, string) => string;

function concat: ConcatFn(first: string, second: string): string{
	return first + second;
}

//const concat: ConcatFn = (string, string) => 'Hello World';
var txt = concat('Hello', 'World');


//----------------------------------------------- Task 2

type HmTskTypeAlias = string | [string | number];

interface HmTsk {
	howIDoIt: string,
	simeArray: [string | number],
	withData: [{HmTskTypeAlias}]
}

const MyHometask: HmTsk = {
	howIDoIt : "I Do It Well",
	simeArray: ["string one", "string two", 42],
	withData: [{howIDoIt: "I Do It Well", simeArray: ["string one", 23] }],
}


//----------------------------------------------- Task 3



interface MyArray<T>{
	[N: number]: T;

	map<U>(fn: (el: T) => U): U[];
	reduce<U>(fn: (accum: T, el: U) => U): U;
}

function reducer(val1, val2){
	return val1 + val2;
}

const HmTskArr: MyArray<number> = [1,2,3,4];

HmTskArr.reduce(reducer);




