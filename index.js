let freeLt = [
  [
    "LT 2 , 3 , 4 , 6 , 7 , 8",
    "No LT is Empty",
    "No LT is Empty",
    "No LT is Empty",
    "LT 2 , 3 , 5 , 6 , 7",
    "LT 2 , 4",
    "LT 6",
    "LT 2 , 4 , 6",
    "LT 2 , 3 , 4 , 7 , 8"
  ],
  [
    "LT 2 , 3 , 5 , 6 , 7 , 8",
    "No LT is Empty",
    "LT 6",
    "No LT is Empty",
    "LT 2 , 3 , 4 , 5 , 6 , 7",
    "LT 2 , 3 , 4 , 5 , 8",
    "No LT is Empty",
    "LT 2",
    "LT 1 , 2 , 5 , 8"
  ],
  [
    "LT 1 , 2 , 3 , 6 , 7 ",
    "LT 3 , 8",
    "LT 3 , 8",
    "LT 3 , 5 , 6 , 7",
    "LT 4 , 7 , 8",
    "LT 2 , 4 , 5 , 7 , 8",
    "LT 2 , 6 , 7 , 8",
    "LT 6",
    "LT 6"
  ],
  [
    "LT 1 , 3 , 6 , 7 , 8",
    "No LT is Empty",
    "LT 1",
    "LT 3 , 6 , 8",
    "LT 1 , 2 , 3 , 4 , 5 , 6",
    "LT 2 , 6 , 7 , 8",
    "LT 8",
    "LT 3 , 6",
    "LT 1 , 3 , 6"
  ],
  [
    "LT 1 , 3 , 6 , 7 , 8",
    "No LT is Empty",
    "No LT is Empty",
    "LT 4",
    "LT 1 , 2 , 3 , 4 , 5 , 7",
    "LT 1 , 3 , 6",
    "LT 2",
    "LT 1 , 6 , 7",
    "LT 1 , 2 , 4"
  ]
];

var d = document.getElementById("thedropdownD");
var t = document.getElementById("thedropdownT");


function ltDisplay(){
    document.getElementById('Display').innerHTML = "<p><h1>"+ freeLt[d.options[d.selectedIndex].value][t.options[t.selectedIndex].value] + "</h1></p>";
}