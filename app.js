window.onload=()=>{
    
    let tab = document.querySelectorAll('.tabItem');
    let contents = document.querySelectorAll('.tabItemContent');
    
    function selectItem(e) {
        removeBorder();
        removeShow();
        this.classList.add('tabBorder');
        let content = document.querySelector(`#${this.id}Content`)
        content.classList.add('show');
    }

    function removeBorder() {
        tab.forEach(item => item.classList.remove('tabBorder'));
    }
    
    
    function removeShow() {
        contents.forEach(item => item.classList.remove('show'));
    }

    tab.forEach(item => item.addEventListener('click', selectItem));


    let burger = document.querySelector('.burger');
    let toggle = document.querySelector('.toggle');
    
    burger.addEventListener('click', ()=>{
        if(toggle.style.display==="none"){
            toggle.style.display="block";
        }
        else{
            toggle.style.display="none";
        }
    })    
}