const activities =
document.querySelectorAll(".activity");

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");
        }

    });

},

{
    threshold:0.15
}

);

activities.forEach(activity => {

    observer.observe(activity);

});