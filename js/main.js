var arrayComments
function myFunction() {
  // To get the name of the user and save it into a variable
  var userName = document.getElementById("username").value;
  console.log(userName);
  // Get the comment into a variable
  var comment = document.getElementById("comment").value;
  console.log(comment);
  // create a variable for the existing div
  var newDiv = document.getElementById("userComments")
  // create a new div to put all the information (username and comment)
  var newComment = document.createElement("div");
  // set an id for the new div
  newComment.setAttribute ("id","newComment");
  // create a h3 which will show the user name
  var user = document.createElement("h3");
  // create a variable with the username and then append it to the h3
  var name = document.createTextNode (userName);
  console.log(name);
  user.appendChild(name);
  // append the h3 to the new div
  newComment.appendChild(user);
  // create a paragraph which will show the comment
  var userComments = document.createElement("p");
  // create a variable with comment and then append it to the paragraph
  var userWords = document.createTextNode(comment)
  userComments.appendChild(userWords);
  // append the paragraph to the new div
  newComment.appendChild(userComments);
  // create a button to delete the comment
  var remove = document.createElement("button");
  var erase = document.createTextNode ("Delete Comment")
  remove.appendChild(erase)
  remove.setAttribute ("type","button")
  remove.setAttribute ("onclick","erase()")
  newComment.appendChild(remove)

  // create a span which will show the date of the comment
  var datePost = document.createElement("span")
  // get the date of the comment
  var date = new Date();
  // to write the date in variable to append it to the span
  var realDate = document.createTextNode(date);
  datePost.appendChild(realDate)
  console.log(realDate);
  newComment.appendChild(datePost)



  // append the new div to the existing div
  newDiv.appendChild(newComment);
  userName.value = " ";
  comment.value = " ";

  remove.addEventListener("click",function(){
    userComments.style.display = "none"
    user.style.display = "none"
    remove.style.display = "none"
    datePost.style.display = "none"
  })


// function erase(){
//   document.getElementById("newComment").innerHTML = "   ";
// }
}
function dataStorage(){
  var userName = document.getElementById("username").value;
  var comment = document.getElementById("comment").value;
  var date = new Date();
  var commentArray = {  userName,comment,date}
  console.log(commentArray);
  localStorage.arrayComments = commentArray;
}
// count every comment
// function clickCounter() {
//     if(typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//             localStorage.clickcount = Number(localStorage.clickcount)+1;
//         } else {
//             localStorage.clickcount = 1;
//         }
//         document.getElementById("counter").innerHTML = localStorage.clickcount + " comments";
//       }
//
//     }
