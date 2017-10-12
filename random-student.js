var students = [
  { name: "Jane", color: "green" },
  { name: "Piet", color: "red" },
  { name: "hein", color: "yellow" },
  { name: "klaas", color: "red" }
];
var random = Math.random() * 100;


var get_color_group =  students.filter(function(student){
    if (random <= 17) {return student.color === "green" };
    if (random > 17 && random <= 50) {return student.color === "yellow" };
    if (random > 50) {return student.color === "red" };
  });

var next_student = get_color_group[Math.floor(Math.random() * get_color_group.length)];



console.log(random);
console.log(get_color_group);
console.log(next_student);
