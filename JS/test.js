// // function resolveAfter2Seconds() {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             resolve('resolved');
// //         }, 2000);
// //     });
// // }

// // var result;
// // async function asyncCall() {
// //     console.log('calling');
// //     var result = resolveAfter2Seconds();
// //     console.log(result);
// //     // expected output: 'resolved'
// // }

// // asyncCall();

// // var x = 1;
// // function asyncIncrement(callback) {
// //     setTimeout(function() {
// //         x += 1;
// //         callback(x);
// //     }, 1000);
// // }

// // asyncIncrement(function (x) {
// //     console.log(x);
// // }
// // );
// var x = 1;
// function getAsyncData1() {
//     return new Promise(function (resolve, reject) {
//         try {
//             setTimeout(function () {
//                 x += 1;
//                 resolve(x);
//             }, 2000);
//         }
//         catch (error) {
//             reject(error);
//         }
//     });
// }
// async function getData() {
//     var num1 = getAsyncData();
//     var num2 = getAsyncData();
//     var num3 = getAsyncData();

//     return await num1 + await num2 + await num3;
// }

// function getAsyncData2() {
//     return new Promise(function (resolve, reject) {
//         try {
//             setTimeout(function () {
//                 x += 2;
//                 resolve(x);
//             }, 2000);
//         }
//         catch (error) {
//             reject(error);
//         }
//     });
// }
// // getData().then(function (data) {
// //     console.log(data);
// // })
// getAsyncData1()
//     .then(function (incrementedValue) {
//         console.log(incrementedValue);
//         return getAsyncData2();
//     })
//     .then(function (incrementedValue2) {
//         console.log(incrementedValue2);
//     })
//     .catch(function (error) {
//     console.log(error);
// })
var printArray = [];
for (var i = 0; i < 10; i++) {
    var captureValue = function (value) {
        return function () {
            console.log(value);
        }
    }
    
    printArray.push(captureValue(i));
}


printArray[5]();