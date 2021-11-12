const changeColor = () => {
    const change = document.getElementsByClassName("btn-outline-primary");
    for(let i = 0; i < change.length; i++){
        change[i].classList.remove("bg-primary")
    }
}

let domainSelect = 1;

document.getElementById("select-1").addEventListener("click", () => {
    changeColor();
    document.getElementById("select-1").classList.add("bg-primary");
    domainSelect = 1;
});

document.getElementById("select-2").addEventListener("click", () => {
    changeColor();
    document.getElementById("select-3").classList.add("bg-primary");
    domainSelect = 2;
});

document.getElementById("select-3").addEventListener("click", () => {
    changeColor();
    document.getElementById("select-3").classList.add("bg-primary");
    domainSelect = 3;
});

const resultDoc = document.getElementById("resutl-doc");

const getDataShortLink = () => {
    valueLink = document.getElementById("floatingInput").value;
    fetch("https://api.shrtco.de/v2/shorten?url=" + valueLink)
    .then(respond => respond.json())
    .then(data => {
        if(domainSelect=1) {
            resultDoc.innerText = data.result.short_link;
        }
        if(domainSelect=2) {
            resultDoc.innerText = data.result.short_link2;
        }
        if(domainSelect=3) {
            resultDoc.innerText = data.result.short_link3;
        }
    })
}

document.getElementById("clickResult").addEventListener("click", getDataShortLink);