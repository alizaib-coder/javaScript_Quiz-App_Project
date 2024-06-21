const questions=[
    {
        'que':'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a',
    },
    {
        'que':'What year was JavaScript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b',
    },
    {
        'que':'What does CSS stand for?',
        'a':'Hypertext Markup language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notataion',
        'd':'helicopter Terminals Motorboats Lamborginis',
        'correct':'b',
    },
]

let index=0
let queBox=document.getElementById('queBox')
let input=document.querySelectorAll('input')
let total=questions.length;
let right=0
let wrong=0;
/////////////////////////

const loadQuestion=()=>{
    if (index===total) {
        return endQuiz()
    }
    reset();
const data=questions[index]
// console.log(data);
queBox.innerHTML=`${index+1})${data.que}`
input[0].nextElementSibling.innerText=data.a;
input[1].nextElementSibling.innerText=data.b;
input[2].nextElementSibling.innerText=data.c;
input[3].nextElementSibling.innerText=data.d;
}

const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    const ans=getAnswer()
    const data=questions[index]
    if (ans===data.correct) {
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion()
},false)
const getAnswer=()=>{
    let answer;
    input.forEach(input => {
        if (input.checked) {
            answer= input.value;

        }
    });
    return answer
}
 const reset=()=>{
    input.forEach(input => {
        input.checked=false
    });
}
const endQuiz=()=>{
    
    const style=document.getElementById('box').innerHTML=`
    <style>
    h3,h2{
        font-size: 1.25rem;
        text-align: center;
        color: green;
    }
</style>
    <h3>Thank you for Playing the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    `
}
 
//initial call
loadQuestion()