// let merhaba = function () {
//     console.log('bu bir callback');
// };

// setTimeout(function () {
//     console.log('bu bir callback. ama anonymous func yazdım içine');
// }, 3000);
// console.log('naber');

// document.querySelector('#btn').addEventListener('click', function () {
//     console.log('Butona tıklandı');
// });

document.querySelector('#btn').addEventListener('click', 
 () =>console.log('Butona tıklandı'));

console.log('Naber');
