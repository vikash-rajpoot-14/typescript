const num1eLement = document.getElementById('nums1') as HTMLInputElement;
const num2element = document.getElementById('nums2') as HTMLInputElement;
const buttonelement = document.querySelector('button')!;

const NumberRes : Array<number> = [];
const stringRes : string[] = [];

type stringtype = number | string
type objtype = { val: number, timestamp: Date }

interface resultobj{
    val: number,
    timestamp: Date
}

function Printresult(objans:objtype) {
    console.log(objans.val , objans.timestamp)
}

function add(nums1: stringtype, nums2:stringtype) {
    if (typeof (nums1) === 'number' && typeof (nums2) === 'number') {
        return  nums1 + nums2;
    } else if (typeof (nums1) === 'string' && typeof (nums2) === 'string') {
        return nums1 + ' ' + nums2;
    }
    return +nums1 + +nums2;
}


buttonelement.addEventListener('click', () => {
    const n1 = num1eLement.value;
    const n2 = num2element.value;
    const numberResult = add(+n1, +n2);
    const stringResult = add(n1, n2);
    Printresult({ val: numberResult as number, timestamp: new Date() })
    NumberRes.push(numberResult as number)
    stringRes.push(stringResult as string)
    console.log(stringResult,numberResult)
    console.log(NumberRes,stringRes)
})

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("it works!")
    },10000)
})

promise.then((result) => { 
    console.log(result.split('w'))
})