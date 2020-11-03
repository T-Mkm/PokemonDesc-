
//   Lesson 1  -  Type

let tsString = 'str';
let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);

tsSum([1, 1]);

//'2' + 2 => '22';
//'s' - 2 => Nan;

const tsString = 's';
const tsNumber = 2;

const result = tsString + tsNumber;
//const result = +tsString = tsNumber;

type StringOrNumber = string | number;

const strOrNumber: StringOrNUmber = 'str';
const strOrNumber1: StringOrNUmber = 3;
const strOrNumber2: StringOrNUmber = 'str';
const strOrNumber3: StringOrNUmber = 2;

type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | ogject | [];




//   Lesson 2  -  Array

//const tsArr: number[] = [1,2,3];

//tsArr[100];

type TsArr = (number | string);

const tsArr: TsArr[] = [1,2,3];
const tsArr2: Array<TsArr> = [1,2,3];

const tsNextArr: [string, number] = ['a', 2];

// error:    tsNextArr[10];
const [a, b] = tsNextArr;

// example:  const [state, setState] = useState(false);




//   Lesson 3  -  Object, Interface

type TsObj = {
	name: string, 
	birthDay: number| string,
	male?: string,
	lastname: string,
};


interface MyFirstInterface {
	readonly name: string, 
	birthDay: number| string,
	male?: string,
	lastname: string,
}

//const tsObj: {name: string, birthDay: number} = {
//const tsObj: TsObj = {
const tsObj: MyFirstInterface = {
	name: 'Zar',
	birthDay: 24,
	lastname: 'Zakharov',
}


interface IndexInterface {
	[n: string]: string | number;
}

const data: IndexInteface = {
	key1: 'key',
	key2: 3,
}


const val3 = data.key3;




//    Lesson 4  -  Functions

//calculate('add', 2, 3) => 5;

enum MethodEnum {
	add = 'add',
	sub = 'sub',
	div = 'div',
}

//function calculate(method: 'add' | 'sub', first: number, second: number): number{
function calculate(method: MethodEnum, first: number, second: number): number{
	switch (method){
		case MethodEnum.add: return first + second;
		case MethodEnum.sub: return first + second;
		case MethodEnum.div: return first / second;
	}
}

calculate('add', 3, 5);


//-----------------------

type TypeFn = () => number;
type TypeDefaultFn = () => void;

const ArrowFunc: TypeFn = () => 2;
const ArrowFunc2: TypeDefaultFn = () => console.log('Hi');




//      Lesson 5  -  Generic


//function identity(value: number): number{
//	return value;
//}

function identity<T>(value: T): T{
	return value;
}

identity(1);
identity('string');

//------------------------


interface MyArray<T> {
	//[n: number]: any;
	[n: number]: T;

	//map(fn: (el: T) => T): T[];
	map<U>(fn: (el: T) => U): U[];
}

//const tsArr: Array<number> = [1,2,3,4];
const tsArr: MyArray<number> = [1,2,3,4];

tsArr.map((i) => i + 1);
tsArr.map((i) => `${i} + 1`);


//-----------------------

function getLen<T extends Array<any>>(arr: T): number {
	return arr.length;
}

getLen([1,2,3,4]);






