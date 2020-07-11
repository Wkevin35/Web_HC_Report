var index = 0;
var maxIndex = 1;

var item0 = [{
    id: 1,
    title: "粗麵",
    src: "./style/img/noodle1.png"
}, {
    id:2,
    title: "細麵",
    src: "./style/img/noodle2.png"
}];

var item1 = [
    {
        id: 11,
        title: "味增湯頭",
        src: "./style/img/miso.png"
    },
    {
        id: 12,
        title: "醬油湯頭",
        src: "./style/img/logo.png"
    }
];

$(document).ready(function() {
    item0.forEach(element => {
        creatElement(element);
    });
});

function onClick(event, id) {
    ++index;
    
    if (index > maxIndex) {
        return;
    }

    const myItem = chooseItem();


    $("#choose").children().remove();
    myItem.forEach(element => {
        creatElement(element);
    });
}

function creatElement(element) {
    const child = `<div class="item" id="item_${element.id}">
                        <img src="${element.src}" alt="${element.title}">
                        </img>
                        <span>${element.title}</span>
                   </div>`;

    $("#choose").append(child);
    $(`#item_${element.id}`).click(function(e){
        onClick(e, element.id);
    });
}

function chooseItem() {
    switch(index) {
      case 0:
           return item0;
      case 1:
           return item1;     
      default:
           return item0;  
    }
}