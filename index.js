"use strict";
const num1eLement = document.getElementById('nums1');
const num2element = document.getElementById('nums2');
const buttonelement = document.querySelector('button');
const NumberRes = [];
const stringRes = [];
function Printresult(objans) {
    console.log(objans.val, objans.timestamp);
}
function add(nums1, nums2) {
    if (typeof (nums1) === 'number' && typeof (nums2) === 'number') {
        return nums1 + nums2;
    }
    else if (typeof (nums1) === 'string' && typeof (nums2) === 'string') {
        return nums1 + ' ' + nums2;
    }
    return +nums1 + +nums2;
}
buttonelement.addEventListener('click', () => {
    const n1 = num1eLement.value;
    const n2 = num2element.value;
    const numberResult = add(+n1, +n2);
    const stringResult = add(n1, n2);
    Printresult({ val: numberResult, timestamp: new Date() });
    NumberRes.push(numberResult);
    stringRes.push(stringResult);
    console.log(stringResult, numberResult);
    console.log(NumberRes, stringRes);
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it works!");
    }, 10000);
});
promise.then((result) => {
    console.log(result.split('w'));
});
