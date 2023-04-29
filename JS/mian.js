
let menu = document.querySelector(".fa-bars")
let navBar = document.querySelector(".navbar")

menu.onclick = function () {
    navBar.classList.toggle("open")
}


let down = document.querySelectorAll(".fa-angle-down")
let skillsDrop = document.querySelectorAll("li a .info")
let span = document.querySelectorAll(".data-prog .progress span")

down.forEach(e => {
    e.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("skills-drop")
        let progg = e.target.parentElement.children[0].children[1].children[2].children[1].children[0]
        let widthProgg = e.target.parentElement.children[0].children[1].children[2].children[1].children[0].dataset.cont
        progg.style.width = widthProgg
    })
})






// let myPromise = new Promise((resolve, reject) => {
//     let connect = false
//     if (connect) {
//         resolve("Connection Established")
//     } else {
//         reject(Error("Connections Failed"))
//     }
// })
// console.log(myPromise)
// myPromise.then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// )

// let myPromise = new Promise((resolve, reject) => {
//     let users = ["Hossam", "Alaa", "Kero", "Rana"]
//     if (users.length === 4) {
//         resolve(users)
//     } else {
//         reject(Error("Number Of Users Is Not 4"))
//     }
// })

// myPromise
//     .then((resolve) => {
//         resolve.length = 2;
//         return resolve
//     }).then((resolve) => {
//         resolve.length = 1;
//         return resolve
//     }).then((resolve) => console.log(`The Choosing User Is ${resolve}`))
//     .catch((reject) => console.log(reject)).finally(console.log("Hello Sir Wellcom To My World"))


// const getData = (api) => {
//     return new Promise((resolve, reject) => {
//         let myRequest = new XMLHttpRequest()

//         myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText))
//             } else {
//                 reject(Error("Erorr"))
//             }
//         }
//         myRequest.open("GET", api)
//         myRequest.send()
//     })
// }

// getData("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//     result.length = 10
//     return result
// }).then((result) => console.log(result[0]))
//     .catch((rej) => console.log(rej))

// fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//     let data = result.json()
//     return data
// })
//     .then((data) => {
//         data.length = 10;
//         return data
//     })
//     .then((ten) => {
//         console.log(ten[1].language)
//     })


async function getData() {
    let users = []
    if (users.length) {
        return "Users Found"
    } else {
        throw new Error("Users Not Found")
    }
}

getData().then(
    (resolve) => console.log(resolve),
    (reject) => console.log(reject)
)