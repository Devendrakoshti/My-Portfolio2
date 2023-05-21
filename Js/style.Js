up = document.querySelector(".fa-arrow-up")


function scroll()

{
    if (document.documentElement.scrollTop > 300) {
        up.style.display = "block";

    } else {
        up.style.display = "none";

    }
}