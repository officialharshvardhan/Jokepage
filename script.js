let arr = ["What do you call a boomerang that won’t come back? A stick.",
  "What does a cloud wear under his raincoat? Thunderwear.",
  "Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.",
  "What time is it when the clock strikes 13? Time to get a new clock.",
  "How does a cucumber become a pickle? It goes through a jarring experience.",
  "What did one toilet say to the other? You look a bit flushed.",
  "What do you think of that new diner on the moon? Food was good, but there really wasn’t much atmosphere.",
  "Why did the dinosaur cross the road? Because the chicken wasn’t born yet.",
  "Why can’t Elsa from Frozen have a balloon? Because she will let it go, let it go.",]
 document.getElementsByClassName("joke").innerHTML=arr[(Math.floor(Math.random() * arr.length))];
// console.log(;
function joke() {
  let randomElement =random(arr);
  document.getElementById("joke").innerHTML=randomElement;
  console.log("done");
}
function random(arr){
  return arr[(Math.floor(Math.random() * arr.length))];
}