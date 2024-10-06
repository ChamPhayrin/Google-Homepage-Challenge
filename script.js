

// GLOBAL VARIABLES
let search_bar = document.getElementById("search-bar")

let search_form = document.querySelector("form")

let search_bar_img = document.getElementById("search-bar-img")

// GOOGLE PAGE JS
search_form.addEventListener("submit", (e) => {
    e.preventDefault()
    let search_input = search_bar.value
    let search_url = 'https://www.google.com/search?q=' + search_input
    if (search_input === '') {
        alert('Please enter search')
        console.log(search_input)
    } else {
        alert('Searching: ' + search_input)
        location.href = search_url
    }
}) 

let search_button = () => {
    let search_input = search_bar.value
    let search_url = 'https://www.google.com/search?q=' + search_input
    if (search_input === '') {
        alert('Please enter search')
    } else {
        alert('Searching: ' + search_input)
        location.href = search_url
    }
}

// IMAGES PAGE JS
search_form.addEventListener("submit", (e) => {
    e.preventDefault()
    let search_input = search_bar_img.value
    let search_url = 'https://www.google.com/search?tbm=isch&q=' + search_input
    if (search_input === '') {
        alert('Please enter search')
    } else {
        alert('Searching image: ' + search_input)
        location.href = search_url
    }
}) 

let search_button_img = () => {
    let search_input = search_bar_img.value
    let search_url = 'https://www.google.com/search?tbm=isch&q=' + search_input
    if (search_input === '') {
        alert('Please enter search')
    } else {
        alert('Searching image: ' + search_input)
        location.href = search_url
    }
}

// https://www.google.com/search?as_q=tricolor+rat+terrier&as_epq=rat+terrier&as_oq=miniature+OR+standard&as_eq=-rodent&as_nlo=10&as_nhi=35+lb&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=

