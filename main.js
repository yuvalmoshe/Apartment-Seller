let curr = 0;
$("#filter").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
   
    let relevantApts = findRelevantApts( address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments)
    let source = $('#apartments-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template(apartments[curr]);
    $('#results').append(newHTML);
}

renderApts(apartments);


$("#left").on("click", function () {
    curr-=1;
renderApts(apartments);
updateTransition();
})


$("#right").on("click", function () {
    curr+=1;
renderApts(apartments);
updateTransition();
})

// function updateTransition() {
//     let el = document.querySelector("div.box");
     
//     if (el) {
//       el.className = "box1";
//     } else {
//       el = document.querySelector("div.box1");
//       el.className = "box";
//     }
     
//     return el;
//   }
  