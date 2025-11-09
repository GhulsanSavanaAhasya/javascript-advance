const box = document.querySelector('.box');

box.addEventListener('click', function() {
    let first = 'size';
    let second = 'caption'
    
    if (this.classList.contains(first)){
        [first, second] = [second, first];
    }

    this.classList.toggle(first);

    setTimeout(() => {
        this.classList.toggle(second);
    }, 600);
});