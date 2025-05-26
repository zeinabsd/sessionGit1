
const stu = [{name: "ali", grade: 16}, {name: "sara", grade: 18}, {name: "reza", grade: 19}];
const behtarin = [];
for (let i=0; i<stu.length;i++) {
  if (stu[i].grade > 17) {
    behtarin.push(stu[i].name);
  }
}
console.log(behtarin);