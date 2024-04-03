function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views < 1000000){
        viewStr = Math.trunc(views / 1000) + "K";
    }
    else if (views < 1000000000){
        viewStr = Math.trunc(views / 1000000) + "M";
    }
    else if (views < 1000000000000) {
        viewStr = Math.trunc(views / 1000000000) + "B";  
    }
    else {
        viewStr = Math.trunc (views / 1000000000000) + "T";
    }

    let html = ` <div class="card">
    <div class="container">
    <div class="image">
    <img src="${thumbnail}" alt="">
    <div class="capsule">${duration}</div>
</div>
<div class="text">
    <h2>${title}</h2>
    <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
</div> 
</div>
</div>`

document.querySelector(".card").innerHTML = document.querySelector(".card").innerHTML + html;


}

createCard("Hello my name is Manish | Sigma course web dev", "Manish Vlogs", 50000, 7, "32:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")