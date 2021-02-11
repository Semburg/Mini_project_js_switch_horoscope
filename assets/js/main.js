

function sendMessage(){
    let textEingabe = document.getElementById("messageText");
    let picturesAfter = document.getElementById("messageAfter");
    let emtpyErrorMessage = document.getElementById("emptyField")

    let text1Change = document.getElementById("text1");
    let text2Change = document.getElementById("text2");
    let imgChange = document.getElementById("pic")


    switch(textEingabe.value){
        case "mar":
        case "march":
        case "Mar":
        case "März":
            console.log("mar works");
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is Aries"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_aries.png";
            text1Change.style.color ="rgb(230,0, 50)"

            break;

        case "apr":
        case "april":
        case "April":
            console.log("apr works");
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is TAURUS"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_taurus.png";
            text1Change.style.color ="rgb(100,230,0)"
            break;

        case "may":
        case "May":
            console.log("may works");
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is GEMINI"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_gemini.png";
            text1Change.style.color ="rgb(85,135,250)"
            break;


        case "jun":
        case "juny":
        case "Juny":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is CANCER"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_cancer.png";
            text1Change.style.color ="rgb(200,200,200)"
            break;


        case "jul":
        case "july":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is LEO"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_leo.png";
            text1Change.style.color ="rgb(255,210,0)"
            break;

        case "aug":
        case "august":
        case "August":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is VIRGO"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_virgo.png";
            text1Change.style.color ="rgb(0,214,140)"
            break;

        case "sep":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is LIBRA"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
            imgChange.src = "https://www.horoscopedates.com/img/icon_libra.png";
            text1Change.style.color ="rgb(0, 230, 255)"
            break;

        case "oct":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is SCORPIO"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_scorpio.png";
            text1Change.style.color ="rgb(150, 0,185)"
            break;

        case "nov":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is SAGITTARIUS"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            imgChange.src = "https://www.horoscopedates.com/img/icon_sagittarius.png";
            text1Change.style.color ="rgb(250,120,70)"
            break;

        case "dec":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is CAPRICORN"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
            imgChange.src = "https://www.horoscopedates.com/img/icon_capricorn.png";
            text1Change.style.color ="rgb(250,120,70)"
            break;
        case "jan":
        case "january":
        case "Januar":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is AQUARIUS"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_aquarius.png";
            text1Change.style.color ="rgb(140,45,250)"
            break;

        case "feb":
        case "february":
        case "Februar":
            emtpyErrorMessage.innerHTML = "";
            text1Change.innerHTML = "Your horoscope is PISCES"
            picturesAfter.style.opacity = "100%";
            text2Change.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
            imgChange.src = "https://www.horoscopedates.com/img/icon_pisces.png";
            text1Change.style.color ="rgb(55,150,220)"
            break;

        default:
            picturesAfter.style.opacity = "0";
            emtpyErrorMessage.innerHTML = "Enter the month pls!"
            break;
    }
}

function onEnter(event){
    var code = 0;
    code = event.keyCode;
    if(code==13){
        sendMessage();
        event.preventDefault();
    }
}