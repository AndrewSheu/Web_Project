const breakfect_name = ["Avo-Toast", "Smoke Salmon Avo", "Photo & P Croquare", "Rendt Benny", "Egg Benny", "Big Breakfect", "Acai Bowl"]
const breakfect_ingrediate = []
const breakfect_price = [16, 19, 20.5, 20, 20.5, 24.5, 18]

const lunch_name = ["Terri Noddle", "Frie Chiecken Rice", "Kac Curry", "Class Beef Buger", "Green Curry Noodle/Rice", "Aiocl", "Acai Bowl"]
const lunch_ingrediate = []
const lunch_price = []

const drinks_name = ["", "", ""]
const drinks_size = []
const drinks_price = []


const backToHome = document.querySelector("#Back-To-Home");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageXOffset > 300) {
        backToHome.style.display = "back";
    }
    else {
        backToHome.style.display = "none";
    }
}

backToHome.addEventListener("click", backToHome);

function backToHome() {
    window.scrollTo(0,0);
}

<div class="menu-container4">
<div class="menu-container5">
</div>
    <div class="menu-container6">
        <div class="menu-container7">
            <div class="menu-container8">
                <img src="">
                <h4>Food Name</h4>
                <p>ingredits</p>
                <h6>price</h6>
            </div>
        </div>
    </div>
</div>
</div>