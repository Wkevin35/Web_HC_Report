let index = 0;
let maxIndex = 1;

let item = [];

const noodels = [
   {
    id: 1,
    title: "粗麵",
    src: "./style/img/noodle1.png"
   }, 
   {
    id:2,
    title: "細麵",
    src: "./style/img/noodle2.png"
   }
];

const soup = [
    {
        id: 11,
        title: "味增湯頭",
        src: "./style/img/miso.png"
    },
    {
        id: 12,
        title: "醬油湯頭",
        src: "./style/img/soy_source.jpg"
    }
];

const burden = [
    {
        id: 21,
        title: "叉燒",
        src: ""
    },
    {
        id: 22,
        title: "塘心蛋",
        src: ""
    }
];

$(document).ready(function() {
    noodels.forEach(element => {
        creatElement(element);
    });
    
    // $("#banner-left").css("right", 100);
});

function onClick(event, id) {
    const tempIndex = chooseItem(index);
    if (index <= maxIndex) {
        item.push(tempIndex.find(x=> {return x.id === id}));
        console.log(item);
    }
    ++index;

    if (index > maxIndex) {
        return;
    }
   
    const myItem = chooseItem(index);


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

function chooseItem(localIndex) {
    switch(localIndex) {
      case 0:
           return noodels;

      case 1:
           return soup;

      case 2:
           return burden;   

      default:
           return noodels;  

    }
}