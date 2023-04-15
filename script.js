
let sound = new Audio()
sound.src = "./music/ivan_franko.mp3"
sound.volume = 0.1
sound.play()

document.querySelector("body").style.background = "rgb(96, 96, 119)"
//create an array with people and their photos

let people = [
    {
        name: "Богдан Хмельницький",
        picture: "./img/bogdan_khmelnitskiy.jpeg",
        information: "Підняв українські землі на визвольну війну проти Речі Посполитої у 1648-1657 роках."
    },
    {
        name: "Ізмаїл Гаспринський",
        picture: "./img/ismail_gasprinskyi.png",
        information: "Кримсько-татарський політичний діяч та письменник. Міський голова Бахчисараю. Видав посібник «Ходжа- і - суб'ян» («Учитель дітей»)"
    },
    {
        name: "Іван Франко",
        picture: "./img/ivan_franko.png",
        information: "Український письменник-класик. Один із засновників Русько-української радикальної партії (РУРП)."
    },
    {
        name: "Іван Котляревський",
        picture: "./img/ivan_kotlyarevskiy.png",
        information: "Автор першого твору нової української літератури - 'Енеїда', також написав твір 'Наталка-Полтавка'."
    },
    {
        name: "Маркіян Шашкевич",
        picture: "./img/markiyan_shashkevich.png",
        information: "Діяч західноукраїнського національного відродження. Був лідером 'Руської трійці' (1832р.)."
    },
    {
        name: "Михайло Драгоманов",
        picture: "./img/myhaylo_dragomanov.png",
        information: "Видавав перший український політичний журнал «Громада» (1878р.), поширював ідеї соціалізму."
    },
    {
        name: "Микола Костомаров",
        picture: "./img/mykola_kostomarov.png",
        information: "Один із засновників Кирило-Мефодіївського братства (1846р.) та автор його програмних документів, зокрема «Книги буття українського народу»."
    },
    {
        name: "Микола Лисенко",
        picture: "./img/mykola_lysenko.png",
        information: "Заклав основи національного музичного мистецтва. Автор опери 'Тарас Бульба'."
    },
    {
        name: "Пантелеймон Куліш",
        picture: "./img/panteleymon_kulish.png",
        information: "Один із засновників Кирило-Мефодіївського братства (1846р.), за участь у діяльності якого був заарештований.Автор твору 'Чорна рада'."
    },
    {
        name: "Павло Чубинський",
        picture: "./img/pavlo_chubinskyi.png",
        information: "Написав слова до нашого гімну 'Ще не вмерла Україна'. За це російська влада вислала його з України."
    },
    {
        name: "Тарас Шевченко",
        picture: "./img/taras_shevchenko.png",
        information: "Написав 'Кобзар', у віршах якого, вдало передав стан Українців, як у ті часи, так і досьогодні."
    },
    {
        name: "Володимир Антонович",
        picture: "./img/volodymyr_antonovich.png",
        information: "Голова Історичного товариства Нестора Літописця (1881р.). Автор історичних праць."
    },
]


let dovidka = document.createElement("div")
dovidka.classList.add("dovidka")

// create the button to close the dovidka

let buttonRemove = document.createElement("input")
buttonRemove.setAttribute("type", "button")
buttonRemove.classList.add("button")
buttonRemove.setAttribute("value", "Зрозуміло!")
buttonRemove.addEventListener("click", del)


// block with info and button

let db = document.createElement("div")
db.style.width = "350px"
db.style.height = "250px"
db.style.backgroundColor = "#C5D2DF"
db.classList.add("db")


// block with name

let pers = document.createElement("span")
pers.classList.add("pers")

// timer

let secFour = document.querySelector(".number4")
let secThree = document.querySelector(".number3")
let minTwo = document.querySelector(".number2")
let minOne = document.querySelector(".number1")

function timerSecFour() {

    secFour.innerText++
    secFour.innerText = secFour.innerText
}
function timerSecThree() {
    secThree.innerText++
    secThree.innerText = secThree.innerText
    secFour.innerText = 0

}

function timerMinOne() {
    minOne.innerText++
    minOne.innerText = minOne.innerText
    minTwo.innerText = 0
    secFour.innerText = 0
    secThree.innerText = 0
}
function timerMinTwo() {
    minTwo.innerText++
    minTwo.innerText = minTwo.innerText
    secFour.innerText = 0
    secThree.innerText = 0
}



function repetition() {

    setInterval(timerSecFour, 1000)
    setInterval(timerSecThree, 10000)

    setInterval(timerMinTwo, 60000)
    setInterval(timerMinOne, 600000)

}
let secFourId = setInterval(timerSecFour, 1000)
let secThreeId = setInterval(timerSecThree, 10000)

let minTwoId = setInterval(timerMinTwo, 60000)
let minOneId = setInterval(timerMinOne, 600000)

function stop() {

    clearInterval(secFourId)
    clearInterval(secThreeId)
    clearInterval(minTwoId)
    clearInterval(minOneId)
}


// you won

let winning = document.createElement("p")
winning.classList.add("winning")
winning.innerText = "Вітаю! Ви перемогли. Сподіваюсь ви дізнались більше про українських діячів:)"

function reload() {
    window.location.reload()
}


document.querySelector(".reload").addEventListener("click", reload)






// shuffling cards

function shuffle(arr) { //мішаєм фотки
    return arr.sort(() => Math.random() - 0.5)
}
//double cards

function double(arr) { // подвоюєм фотки
    return arr = [...arr, ...arr]
}


people = double(people)
people = shuffle(people)



function create() {
    for (let i = 0; i < 24; i++) { //create 24 cards on the page
        let card = document.createElement("div") // create card
        card.classList.add("card") // add class to card
        card.style.backgroundImage = "url(./img/guess.jpeg)" //put default image to card
        card.style.backgroundSize = "cover"
        card.style.backgroundPosition = "center"
        card.style.boxShadow = " 5px 5px 11px #4b4b5d"
        card.addEventListener("click", chosen)
        card.setAttribute("id", i)
        document.querySelector(".field").appendChild(card) // show this card on the page into field 
    }

}
let chosens = []
let counter = 0
function chosen() {

    if (chosens.length < 2 && chosens[0] != this.id) {
        this.style.backgroundImage = `url(${people[this.id]["picture"]})` // put picture to the chosen card
        chosens.push(this.id) // push the id of an card to the new array
        if (chosens.length == 2) {
            setTimeout(check, 1300) //func to check if this cards are similar
        }
    }

}
function check() {

    // if cards are similar 

    if (document.getElementById(chosens[0]).style.backgroundImage === document.getElementById(chosens[1]).style.backgroundImage) {
        //create the dovidka block


        dovidka.innerText = people[chosens[0]].information
        pers.innerText = people[chosens[0]].name
        if (counter == 11) {
            stop()
            document.querySelector(".blurBlock").classList.add("blur")
            document.querySelector("body").appendChild(winning)
        }


        document.querySelector(".blurBlock").classList.add("blur")
        document.querySelector("body").appendChild(db)
        document.querySelector(".db").appendChild(pers)
        document.querySelector(".db").appendChild(dovidka)
        document.querySelector(".db").appendChild(buttonRemove)

        chosens = []

    }
    // if they are not similar

    else {
        document.getElementById(chosens[0]).style.backgroundImage = "url(./img/guess.jpeg";
        document.getElementById(chosens[1]).style.backgroundImage = "url(./img/guess.jpeg";
        chosens = []
    }
}



// delete dovidka

function del() {
    dovidka.remove()
    buttonRemove.remove()
    db.remove()
    document.querySelector(".blurBlock").classList.remove("blur")
    pers.remove()
    counter++
}


// create cards

create()