var all = $('#all');
var industrialButton = $('#industrialButton');
var uiButton = $('#uiButton');
var uiuxButton = $('#uiuxButton');

var card = $('.portfolioCard');
var cardArray = card.toArray();
var industrial = $('[data-type="industrial"]');
var uiux = $('[data-type="uiux"]');
var ui = $('[data-type="ui"]');
// var ux = $('[data-type="ux"]');

var nodesArray = [].slice.call(document.querySelectorAll(".portfolioCard"));

var dataType = nodesArray.map(function(el) {
       return el.dataset.type;
     });

console.log(dataType);

var filtering = function (obj) {
  // card.show();
  // console.log(obj.data("type"));
  for (i = 0; i < card.length; i++) {
    // console.log(nodesArray[i].dataset.type, "nodesArray[i]");
      if (dataType[i] == obj.data("type")) {
      console.log("true");
      show(obj);
    } else {
      hide(card);
    }
  }
};

var show = function (obj) {
  obj.show();
}

var hide = function (obj) {
  obj.hide();
}

industrialButton.click(function(e) {
  e.preventDefault();
  filtering(industrial);
});

uiButton.click(function(e) {
  e.preventDefault();
  filtering(ui);
});

uiuxButton.click(function(e) {
  // console.log("works");
  e.preventDefault();
  filtering(uiux);
});

all.click(function(e) {
  e.preventDefault();
  card.show();
})
