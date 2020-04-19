const windows = document;
const menuIconSize = document.querySelector(".menu_icon_size");
const article = document.querySelector("article");
const articleH2 = document.querySelector("article h2");
const cardContentBlock = document.querySelectorAll(".card_content_block");
const card = document.querySelectorAll(".card");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu_icon");
const main = document.querySelector("main");
const menuLi = document.querySelectorAll("nav li");
const cardContents = document.querySelectorAll(".card_contents");
const htmlWords = document.querySelectorAll(".card_contents h2");
const cardPadding = document.querySelectorAll(".card_padding");
const rusWords = document.querySelectorAll(".rus_words");
const but = document.querySelectorAll(".but");
const audio = document.getElementById("audio");
const tagA = document.querySelectorAll("a");
const checkbox = document.querySelector(".toggle-button-cover");
const buttonPlay = document.querySelector(".button_P");

let articleFlag = 0;
let checkPlay;




const pictures = [["Action_a_1", "Action_b_1", "Action_с_1", "Adjective_1", "animalA_0", "animalB_0", "Clothes_1", "Emotion_1"],
["actionSetA_0", "actionSetA_1", "actionSetA_2", "actionSetA_3", "actionSetA_4", "actionSetA_5", "actionSetA_6", "actionSetA_7"],
["actionSetB_0", "actionSetB_1", "actionSetB_2", "actionSetB_3", "actionSetB_4", "actionSetB_5", "actionSetB_6", "actionSetB_7"],
["actionSetC_0", "actionSetC_1", "actionSetC_2", "actionSetC_3", "actionSetC_4", "actionSetC_5", "actionSetC_6", "actionSetC_7"],
["Adjective_0", "Adjective_1", "Adjective_2", "Adjective_3", "Adjective_4", "Adjective_5", "Adjective_6", "Adjective_7"],
["animalA_0", "animalA_1", "animalA_2", "animalA_3", "animalA_4", "animalA_5", "animalA_6", "animalA_7"],
["animalB_0", "animalB_1", "animalB_2", "animalB_3", "animalB_4", "animalB_5", "animalB_6", "animalB_7"],
["Clothes_0", "Clothes_1", "Clothes_2", "Clothes_3", "Clothes_4", "Clothes_5", "Clothes_6", "Clothes_7"],
["Emotion_0", "Emotion_1", "Emotion_2", "Emotion_3", "Emotion_4", "Emotion_5", "Emotion_6", "Emotion_7"]];

const words = [["Action (set A)", "", "Action (set B)", "", "Action (set C)", "", "Adjective", "", "Animal (set A)", "", "Animal (set B)", "", "Clothes", "", "Emotion", ""],
["cry", "плакать", "dance", "танцевать", "dive", "нырять", "draw", "рисовать", "fish", "ловить рыбу", "fly", "летать", "hug", "обнимать", "jump", "прыгать"],
["open", "открывать", "play", "играть", "point", "указывать", "ride", "ездить", "run", "бегать", "sing", "петь", "skip", "пропускать, прыгать", "swim", "плавать"],
["arge", "спорить", "build", "строить", "raise", "поднимать", "catch", "ловить", "drive", "водить", "drop", "падать", "pull", "тянуть", "push", "толкать"],
["small", "маленький", "big", "большой", "fast", "быстрый", "slow", "медленный", "friendly", "дружелюбный", "unfriendly", "недружелюбный", "young", "молодой", "old", "старый"],
["pig", "свинья", "chick", "цыпленок", "chicken", "курица", "dog", "собака", "horse", "лошадь", "cat", "кот", "rabbit", "кролик", "sheep", "овца"],
["fish", "рыба", "bird", "птица", "frog", "жаба", "giraffe", "жираф", "lion", "лев", "mouse", "мышь", "turtle", "черепаха", "dolphin", "дельфин"],
["skirt", "юбка", "boot", "ботинок", "pants", "брюки", "blouse", "блуза", "dress", "платье", "shirt", "рубашка", "coat", "пальто", "shoe", "туфли"],
["sad", "грустный", "smile", "улыбчевый", "surprised", "удивленный", "scared", "испуганный", "tired", "уставший", "laugh", "смех", "happy", "счастливый", "angry", "сердитый"]];



const articleId = ["Main page", "Action (set A)", "Action (set B)", "Action (set C)", "Adjective", "Animal (set A)", "Animal (set B)", "Clothes", "Emotion"];

//==========клик по карточке===================

cardContentBlock.forEach((el, ind) => {
    el.addEventListener("click", () => {
        if (!articleFlag) {
            toggleCards(event, el, ind, 1)
        } else {
            playAudio(el, ind);
        }
    })
});



nav.addEventListener("click", () => {
    menuLi.forEach((el, ind) => { toggleCards(event, el, ind, 0) })
});


function toggleCards(event, el, ind, n) {
    let test;

    articleId.forEach(el => { event.target.innerText === el && (test = 1) });
    
    if (test) {
        event.target.innerText === el.innerText && (articleFlag = (ind + n));
        changeArticleId();
        changeHtml(event.target.innerText);
        addClassActiveToTagA();
    }

}


function changeArticleId() {
    article.id = `${articleId[articleFlag]}`
}


function changeHtml(params) {
    cardContentsAddClassActive();

    articleH2.innerHTML = `${params}`
    cardContentBlock.forEach((el, ind) => {
        el.style.backgroundImage = `url(./src/assets/${pictures[articleFlag][ind]}.jpg)`
    });

    htmlWords.forEach((el, ind) => {
        el.innerText = `${words[articleFlag][ind * 2]}`
        rusWords[ind].innerText = `${words[articleFlag][ind * 2 + 1]}`
    })
}


function addClassActiveToTagA() {
    tagA.forEach(el => {
        el.classList.remove("active");
        el.innerText === article.id && el.classList.add("active");
    })
}


function cardContentsAddClassActive() {
    if (!!articleFlag) {
        cardContents.forEach(el => { el.classList.add("active") });
        but.forEach(el => { el.classList.add("active") });
    } else {
        cardContents.forEach(el => { el.classList.remove("active") });
        but.forEach(el => { el.classList.remove("active") });
    } 
}

//==========клик по бургеру===================

windows.addEventListener("click", toggleBurgerClass);

function toggleBurgerClass() {
    if (event.target === menuIconSize || event.target === menuIcon) {
        nav.classList.toggle("nav_activ");
        menuIcon.classList.toggle("menu_icon_activ");
    } else {       
        nav.classList.remove("nav_activ");
        menuIcon.classList.remove("menu_icon_activ");   
    }
}


//==========клик на переворот===================

but.forEach((el, ind) => {

    el.addEventListener("click", () => {

        toggleClassRotate(ind)
    });
});

function toggleClassRotate(ind) {

    cardPadding[ind].classList.add("rotate");
    card[ind].onmouseleave = () => {
        cardPadding[ind].classList.remove("rotate");
    };
}

//==========клик на произведение аудио===================

function playAudio(el, ind) {
    if (event.target === el) {
        audio.src = `./src/audio/${words[articleFlag][ind * 2]}.mp3`
        audio.play();
    }
}

//==========клик по чекбоксу===================


checkbox.addEventListener("click", addClassPlay)

function addClassPlay() {
    !checkPlay ? (checkPlay = 1) : (checkPlay = 0);

    menuIcon.classList.toggle("play");
    nav.classList.toggle("play");
    buttonPlay.classList.toggle("play");
    tagA.forEach(el => el.classList.toggle("play"));
    cardPadding.forEach(el => el.classList.toggle("play"));
    cardContents.forEach(el => el.classList.toggle("play"));

}