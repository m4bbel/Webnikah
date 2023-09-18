
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

// make new const and foreach, each animation
const hiddenElements = document.querySelectorAll('.hidden');
const hidden1Elements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));
hidden1Elements.forEach((el) => observer.observe(el));