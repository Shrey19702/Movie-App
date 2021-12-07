async function scrolling(dist, index){
    console.log('clicked');
    for(let i=0; i<20; i++){
        setTimeout(()=>{document.querySelectorAll('.movie-list')[index].scrollLeft +=dist;}, 25*i);
    }
}

const button_right = document.querySelectorAll('.move-right-arrow');
button_right[0].addEventListener('click', ()=>{scrolling(15, 0)});
button_right[1].addEventListener('click', ()=>{scrolling(15, 1)});


const button_left = document.querySelectorAll('.move-left-arrow');
button_left[0].addEventListener('click', ()=>{scrolling(-15, 0)});
button_left[1].addEventListener('click', ()=>{scrolling(-15, 1)});