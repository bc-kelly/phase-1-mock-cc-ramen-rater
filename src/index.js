// write your code here
let menuContent;

const init = () => {

    fetch ("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramenData => {
        buildImages(ramenData)
            console.log(ramenData)
        renderImages(buildImages(ramenData))
    })
        // console.log(ramenData)
    
        function buildImages (ramenData){
            ramenData.forEach(ramenObject) 
            
        //     // => console.log(Element))
        // }
        const ramenMenu = document.createElement('div')
        // ramenMenu.textContent = "ramen-menu"
        ramenMenu.id = ("#ramen-menu")

        const ramenImages = document.createElement('img')
        // ramenImages.src = ramenObject.image

        const ramenDetail = document.createElement('div')
        ramenDetail.textContent = ("ramen detail")

        document.getElementById

        document.body.appendChild(ramenMenu)
        ramenMenu.append(ramenImages, ramenDetail)

        const addNewRamenBtn = document.querySelector('h4')
        addNewRamenBtn.addEventListener("click", function(e) {
            console.log(e)
        })

        const createBtn = document.querySelector('#create-button')
        createBtn.addEventListener('submit', function() {
            alert("clicked");
        })

        const newName = document.getElementById("#new-name")
            function send () {
                console.log(newName)
            }


        // newName.onkeyup = function () {
        //     document.getElementById('printNameBox').textContent = newName.value
        // }


    fetch("http://localhost:3000/ramens/:id")
    .then(newResp => newResp.json())
    .then(idS => console.log(idS))



}
document.addEventListener("DOMContentLoaded", init);