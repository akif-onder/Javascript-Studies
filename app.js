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

// document.querySelector('#btn').addEventListener('click', 
//  () =>console.log('Butona tıklandı'));

// console.log('Naber');


let posts = [
    {
        "title": "Title 1",
        "body": "Body 1"
    },

    {
        "title": "Title 2",
        "body": "Body 2"
    }
];

function addPost(callback) {
    setTimeout(function (){
        posts.push({"title": "Title 3", "body": "Body 3"});
        callback();
    }, 3000);
}

function getAllPosts() {
    setTimeout(function (){
        let output = "<ul>";
        posts.forEach(function (post) {
            output += `<li>${post.title}- ${post.body}</li>`;
        })
        output += "</ul>";
        document.getElementById("output").innerHTML = output
    }, 2000);
}

addPost(getAllPosts);
// getAllPosts();
// function addPost(callback) {
   
//         posts.push({"title": "Title 3", "body": "Body 3"});
//         callback();
   
// }

// function getAllPosts() {
    
//         let output = "<ul>";
//         posts.forEach(function (post) {
//             output += `<li>${post.title}- ${post.body}</li>`;
//         })
//         output += "</ul>";
//         document.getElementById("output").innerHTML = output

// };

// addPost(getAllPosts);