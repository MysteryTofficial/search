const input = document.getElementById("txt");
const btn1 = document.getElementById("srchbtn");

input.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        fun1();
    }
})

function fun1() {
    let org = input.value;
    if (org.includes("yt")) {
        window.location.href = org.replace("yt", "https://www.youtube.com/results?search_query=");
    }

    else if (org.includes("git")){
        window.location.href = org.replace("git", "https://github.com/search?q=");
    } 

    else if (org.includes("sto")) {
        window.location.href = org.replace("sto", "https://stackoverflow.com/search?q=");
    }
    else if (org.includes("tw")) {
        window.location.href = org.replace("tw", "https://www.twitch.tv/search?term=");
    }
    else if (org.includes("num")) {
        window.location.href = org.replace("num", "http://");
    }
    else if (org.includes("mthome")) {
        window.location.href = org.replace("mthome", "https://mysterytofficial.github.io/home/");
    }
    else {window.location.href = "https://www.google.com/search?q=" + org;}
}


btn1.addEventListener('click', fun1);