var Subject= {
name: "DIS",
Stream: {Science: ["Maths","Physics"], Commerce: ["Accountancy","Statics"]},
classes: ["11","12"],
Strength: 20,
}

console.log(Subject.name);
console.log(Subject.classes);
console.log(Subject.Strength);
console.log(Subject.Stream);
console.log(Subject.Stream.Science)

console.log(Subject["name"])
console.log(Subject["classes"])
console.log(Subject["Strength"])
console.log(Subject["Stream"])
console.log(Subject["classes"].length)

const keys= Object.keys(Subject);
console.log(keys)

const values=Object.values(Subject);
console.log(values)

for (let key in Subject) {
    console.log(key, Subject[key]);
  }