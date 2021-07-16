var sortArray=[];
function Submit()
{var studentArray=[];
var name1=document.getElementById("name_of_the_student_1").value;
var name2=document.getElementById("name_of_the_student_2").value;
var name3=document.getElementById("name_of_the_student_3").value;
var name4=document.getElementById("name_of_the_student_4").value;
var name5=document.getElementById("name_of_the_student_5").value;
var name6=document.getElementById("name_of_the_student_6").value;
var name7=document.getElementById("name_of_the_student_7").value;
var name8=document.getElementById("name_of_the_student_8").value;
studentArray.push(name1);
studentArray.push(name2);
studentArray.push(name3);
studentArray.push(name4);
studentArray.push(name5);
studentArray.push(name6);
studentArray.push(name7);
studentArray.push(name8);
document.getElementById("rupesh").innerHTML=studentArray;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
sortArray=studentArray;
}
function Sort(){ sortArray.sort();
var display_Array=[];
for (let ayush = 0; ayush < sortArray.length; ayush++) 
{display_Array.push("<button> Name: "+sortArray[ayush]+
"</button> <br>");} 
document.getElementById("rupesh").innerHTML=sortArray;
document.getElementById("pranay").innerHTML=display_Array.join("");
}