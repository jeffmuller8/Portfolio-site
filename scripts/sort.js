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

// var filtering = function (obj) {
//   console.log(obj);
//   for (i = 0; i < cardArray.length; i++) {
//       if (dataType[i] != obj.data("type")) {
//       hide(card);
//     } else {
//       show(obj);
//     }
//   }
// };

var filtering = function(obj) {
  // var nodesArray = [].slice.call(document.querySelectorAll(".portfolioCard"));
      //  var foo = nodesArray.filter(function(el) {
      for (i = 0; i <dataType.length; i++) {
          if(dataType[i] === obj.data("type")) {
          show(nodesArray[i]);
          } else {
          hide(nodesArray[i]);
          console.log("different type");
        }
      }
    }

var show = function (el) {
  $(el).slideDown();
}

var hide = function (el) {
  $(el).slideUp();
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
  card.slideDown();
})
