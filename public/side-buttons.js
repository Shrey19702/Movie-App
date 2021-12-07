async function scrolling(dist){
    console.log('clicked');
    for(let i=0; i<20; i++){
        setTimeout(()=>{document.querySelector('.movie-list').scrollLeft +=dist;}, 25*i);
    }
}

const button_right = document.querySelector('.move-right-arrow');
button_right.addEventListener('click', ()=>{scrolling(15)});

const button_left = document.querySelector('.move-left-arrow');
button_left.addEventListener('click', ()=>{scrolling(-15)});