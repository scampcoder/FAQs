//traversing the DOM option
//grab all btns
//const btns = document.querySelectorAll('.question-btn');

//btns.forEach(function(btn){
    //btn.addEventListener('click', function(e){
        //testing to make sure we are grabbing the correct element
        //console.log(e.currentTarget);
        //grabs entire question connected to button
        //console.log(e.currentTarget.parentElement.parentElement)
      //  const question = e.currentTarget.parentElement.parentElement;
    //    question.classList.toggle('show-text');
  //  })
//})


//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        //close open question if it isn't the one clicked on
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})