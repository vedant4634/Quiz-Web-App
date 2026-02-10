let a =document.querySelector(".start");
let pre=document.querySelector(".prev")
let q =document.querySelector(".qns-1");
let q2 =document.querySelector(".qns-2");
let next1=document.querySelector(".next-1")
let q3=document.querySelector(".qns-3");
let next2=document.querySelector(".next-2");
let pre1=document.querySelector(".prev-1");
let pre2=document.querySelector(".prev-2");
let q4=document.querySelector(".qns-4");
let next3=document.querySelector(".next-3");
let submit=document.querySelector(".sub");
let tu=document.querySelector(".tu");
let form=document.querySelector(".cont");
let bg=document.querySelector(".bg");
const options = document.querySelectorAll(".options p, .options-1 p");
let s=document.querySelector(".score");


a.addEventListener("click", (e)=>
{
    e.preventDefault();  
    q.style.display="block";
    form.style.display="none";
    s.innerText = `Your score is ${score}`;
    bg.classList.add("blur")
    
})

next1.addEventListener("click",()=>{
    q.style.display="none";
    q2.style.display="block"
    s.innerText = `Your score is ${score}`;
})

pre.addEventListener("click",(e)=>
{
     e.preventDefault();  
    q.style.display="block";
    q2.style.display="none";
}
)
next2.addEventListener("click",(e)=>{
    q.style.display="none";
    q2.style.display="none"
    q3.style.display="block"
     e.preventDefault(); 
     s.innerText = `Your score is ${score}`; 
})

pre1.addEventListener("click",(e)=>
{
    q.style.display="none";
    q2.style.display="block"
    q3.style.display="none"
    e.preventDefault();  
})
pre2.addEventListener("click",(e)=>
{
    q.style.display="none";
    q2.style.display="none"
    q3.style.display="block";
    e.preventDefault();  
})
next3.addEventListener("click",(e)=>{
    q.style.display="none";
    q2.style.display="none"
    q3.style.display="none";
    q4.style.display="block";
     e.preventDefault();  
     s.innerText = `Your score is ${score}`;
})

submit.addEventListener("click",(e)=>{
    q.style.display="none";
    q2.style.display="none"
    q3.style.display="none";
    q4.style.display="none";
    e.preventDefault(); 
    alert("Exam is finished");
    tu.style.display="block";
    s.innerText = `Your score is ${score} Out of 4 questions correct`;


})
let score=0;

options.forEach(option => {
  option.addEventListener("click", () => {

    
    if (option.parentElement.classList.contains("answered")) return;

    option.parentElement.classList.add("answered");

    if (option.dataset.correct === "true") {
      option.classList.add("correct");
      score++;
    } else {
      option.classList.add("wrong");

      
      option.parentElement
        .querySelector('[data-correct="true"]')
        .classList.add("correct");
    }

    console.log("Score:", score);
  });
});
console.log("Score:", score);



