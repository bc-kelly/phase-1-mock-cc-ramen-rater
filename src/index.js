
//See all ramen images in the div with the id of ramen-menu.
//display the image for each of the ramen using an img tag inside the #ramen-menu div.
//Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
//Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. 
let ramenMenu;
let ramens;
let likes = {};
let currentRamen;

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramenData => {
    ramens = ramenData;
    console.log(ramenData);

    showEachRamenPic();
    createNewRamen ();
    showRamenDetail(ramens[0]);
})

function showEachRamenPic () {
    ramens.forEach(ramen => {
        addAllRamensToMenu(ramen)
    })
}

function addAllRamensToMenu(ramen) {
    let ramenMenu = document.querySelector('#ramen-menu')
    
    let ramenImage = document.createElement('img');
    ramenImage.src = ramen.image

    ramenMenu.append(ramenImage);

    ramenImage.addEventListener('click', e => {
        e.preventDefault();
        // console.log('clicked')
    
    showRamenDetail(ramen);
})
}

function showRamenDetail (ramen) {
    let ramenName = document.querySelector('.name')
    ramenName.textContent = ramen.name
    let elementImage = document.querySelector('.detail-image')
    elementImage.src = ramen.image
    let ramenRestaurant = document.querySelector('.restaurant')
    ramenRestaurant.textContent = ramen.restaurant
    let ratingDisplay = document.querySelector('#rating-display')
    ratingDisplay.textContent = ramen.rating
    let commentDisplay = document.querySelector('#comment-display')
    commentDisplay.textContent = ramen.comment

    currentRamen = ramen;
//added likes button to pracitce **
    if (!likes[ramen.name]) {
        likes[ramen.name] = 0;
    } 
    let likeDisplay = document.querySelector("#like-display")
    likeDisplay.textContent = likes[ramen.name]
}
function like() {
    likes[currentRamen.name] += 1
    let likeDisplay = document.querySelector("#like-display")
    likeDisplay.textContent = likes[currentRamen.name]
}

function createNewRamen () {
    let newRamenForm = document.querySelector('#new-ramen')
    // let newName = document.querySelector('#new-name').value

    newRamenForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('clicked')

        let newRamen = {
            name: document.querySelector('#new-name').value,
            restaurant: document.querySelector('#new-restaurant').value,
            image: document.querySelector('#new-image').value,
            rating: document.querySelector('#new-rating').value,
            comment: document.querySelector('#new-comment').value,
        }
        ramens.push(newRamen);

        addAllRamensToMenu(newRamen);

        e.target.reset();
    })
}
































// //during review
// let ramens;

//     fetch ("http://localhost:3000/ramens")
//     .then(resp => resp.json())
//     .then(ramenData => {
//         console.log(ramenData)
//         ramens = ramenData

//         showAllRamenImages()

//         hookUpNewRamenForm()

//     });

//     function showAllRamenImages() {
//         ramens.forEach(ramen => {
//             addRamenImageToMenu(ramen)
//         })
//     }
//         function addRamenImageToMenu(ramen) {
//             let elementRamenMenuDiv = document.querySelector("#ramen-menu")

//             let elementRamenImage = document.createElement('img')
//             elementRamenImage.src = ramen.image

//             elementRamenMenuDiv.appendChild(elementRamenImage)

//             elementRamenImage.addEventListener('click', (event) => {
//                 showRamenDetails(ramen)
//             })
//         }

//         function showRamenDetails(ramen) {
//             const elementDetailImage = document.querySelector(".detail-image")
//             elementDetailImage = ramen.image
//             const elementDetailName = document.querySelector(".name")
//             elementDetailName = ramen.name
//             const elementDetailRestaurant = document.querySelector(".restaurant")
//             const elementRatingDisplay = document.querySelector("#rating-display")
//             const elementCommentDisplay = document.querySelector("#comment-display")
//         }
    
//         function hookUpNewRamenForm() {
//             const elementForm = document.querySelector("#new-ramen")
//             elementForm.addEventListener('submit', (event) => {
//                 event.preventDefault();
//                 console.log("form submitted")

//                 let newRes = document.querySelector("#new-image")
//                 let newRamen = {
//                     image: event.target["new-image"].value,
//                     name: event.target["new-name"].value,
//                     restaurant: event.target["new-restaurant"].value,
//                     rating: event.target["new-rating"].value,
//                     restaurant: event.target["new-restaurant"].value,
//                     comment: event.target["new-comment"]
//                 }

//                 ramens.push(newRamen)

//                 addRamenImageToMenu(newRamen)

//                 event.target.removeEventListener();
//             })
//         }




// // second try
// let menuContent;

// const init = () => {

//     fetch ("http://localhost:3000/ramens")
//     .then(resp => resp.json())
//     .then(ramenData => {
//         // menuContent = ramenData
//         buildImages(ramenData)
//             // console.log(ramenData)
//         // renderImages(buildImages(ramenData))
//     })
//         // console.log(ramenData)
//         function buildImages(ramenArray) {
//             console.log(ramenArray)
//             const pictures = document.getElementById('ramen-menu')
//             console.log(pictures)
//             ramenArray.forEach(ramen => {
//                 const ramenImg = document.createElement('img')
//                 ramenImg.addEventListener('click', (e) => {
//                     let ramenName = document.getElementById(' ')
//                 })
//                 ramenImg.src = ramen.image
//                 pictures.appendChild(ramenImg)
//             })
//         }

//     // fetch("http://localhost:3000/ramens/:id")
//     // .then(newResp => newResp.json())
//     // .then(idS => console.log(idS))
// }
// document.addEventListener("DOMContentLoaded", init);

//first try 
    //     function buildImages(ramenData) {
    //         ramenData.forEach(function(ramenObject) {
    //             renderRamen(ramenObject)
    //     })
    //     }
    //     function renderRamen(eachRamen) {
    //         const ramenMenu = document.createElement('div')
    //         console.log(ramenMenu)
    //         // ramenMenu.id = ("#ramen-menu") 

    //         const ramenImages = document.createElement('img')
    //         ramenImages.src = eachRamen.image

    //         ramenMenu.appendChild(ramenImages)
    //     }
    //     //     // => console.log(Element))
    //     // }
    //     // const ramenMenu = document.createElement('div')
    //     // // ramenMenu.textContent = "ramen-menu"
    //     // ramenMenu.id = ("#ramen-menu")

    //     // const ramenImages = document.createElement('img')
    //     // // ramenImages.src = ramenObject.image

    //     // const ramenDetail = document.createElement('div')
    //     // ramenDetail.textContent = ("ramen detail")

    //     // document.getElementById

    //     // document.body.appendChild(ramenMenu)
    //     // ramenMenu.append(ramenImages, ramenDetail)

    //     // const addNewRamenBtn = document.querySelector('h4')
    //     // addNewRamenBtn.addEventListener("click", function(e) {
    //     //     console.log(e)
    //     // })

    //     // const createBtn = document.querySelector('#create-button')
    //     // createBtn.addEventListener('submit', function() {
    //     //     alert("clicked");
    //     // })

    //     // const newName = document.getElementById("#new-name")
    //     //     function send () {
    //     //         console.log(newName)
    //     //     }


    //     // newName.onkeyup = function () {
    //     //     document.getElementById('printNameBox').textContent = newName.value
    //     // }


    // fetch("http://localhost:3000/ramens/:id")
    // .then(newResp => newResp.json())
    // .then(idS => console.log(idS))



// }
// document.addEventListener("DOMContentLoaded", init);