// let lucky - by default == any
let lucky: any = 23;
lucky = ''

type style = 'bold' | 'italic';
let font: style;


interface Person {
    // required
    first: string,
    last: string,
    // optional
    [key: string]: any
}
const person: Person = {
    first: 'Jeff',
    last: 'Muk'
}


function pow(x: number, y: number): string {
    return Math.pow(x, y).toString()
}
function noPow(x: number, y: number): void {
    Math.pow(x, y).toString()
}


const arr: number[] = []
const peoples: Person[] = []
arr.push(10);

// custom type - any of
type MyList = [number?, string?, boolean?]
const newArr: MyList = []
newArr.push(11);
newArr.push(true);

// Generics

class Observable<T> {
    constructor(public value: T) {
    }
}
let x: Observable<number>;
let y: Observable<Person>;
