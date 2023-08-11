const Zodiac=document.getElementById("Zodiac");
const body=document.body;

const changebackground=()=>{
    switch (Zodiac.value) {
        case "aries":
            body.style.backgroundColor="#8AEA92";
            break;
        case "taurus":
            body.style.backgroundColor="#DD7230";
            break;
        case "gemini":
            body.style.backgroundColor="#D1FAFF";
            break;
        case "cancer":
            body.style.backgroundColor="#BA2C73";
            break;
        case "leo":
            body.style.backgroundColor="#FF0035";
            break;
        case "virgo":
            body.style.backgroundColor="#731DD8";
            break;
        case "libra":
            body.style.backgroundColor="#cdb4db";
            break;
        case "scorpius":
            body.style.backgroundColor="#fcf6bd";
            break;
        case "sagittarius":
            body.style.backgroundColor="#eaac8b";
            break;
        case "aquarius":
            body.style.backgroundColor="#240046";
            break;
        case "pisces":
            body.style.backgroundColor="#7bdff2";
            break;
        case "capricornus":
            body.style.backgroundColor="#ffeedd";
            break;
    
        default:
            break;
    }
};