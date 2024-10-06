

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


// ADVANCED SEARCH
let advanced_words_all = document.getElementById("advanced-words-all")

let advanced_exact = document.getElementById("advanced-exact")

let advanced_words_any = document.getElementById("advanced-words-any")

let advanced_words_none = document.getElementById("advanced-words-none")

let advanced_num_min = document.getElementById("advanced-number-min")

let advanced_num_max = document.getElementById("advanced-number-max")



search_form.addEventListener("submit", (e) => {
    let words_all_input = advanced_words_all.value
    let words_exact_input = advanced_exact.value
    let words_any_input = advanced_words_any.value
    let words_none_input = advanced_words_none.value
    let num_min_input = advanced_num_min.value
    let num_max_input = advanced_num_max.value
    let advanced_url = `https://www.google.com/search?as_q=${words_all_input}&as_epq=${words_exact_input}&as_oq=${words_any_input}&as_eq=${words_none_input}&as_nlo=${num_min_input}&as_nhi=${num_max_input}&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=`
    if (!words_all_input && !words_exact_input && !words_any_input && !words_none_input && !num_min_input && !num_max_input 
    ){
        alert('Please enter search')
    }else {
        location.href = advanced_url
    }
    
})

let advanced_button = () => {
    let words_all_input = advanced_words_all.value
    let words_exact_input = advanced_exact.value
    let words_any_input = advanced_words_any.value
    let words_none_input = advanced_words_none.value
    let num_min_input = advanced_num_min.value
    let num_max_input = advanced_num_max.value
    let advanced_url = `https://www.google.com/search?as_q=${words_all_input}&as_epq=${words_exact_input}&as_oq=${words_any_input}&as_eq=${words_none_input}&as_nlo=${num_min_input}&as_nhi=${num_max_input}&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=`
    if (!words_all_input && !words_exact_input && !words_any_input && !words_none_input && !num_min_input && !num_max_input 
    ){
        alert('Please enter search')
    }else {
        location.href = advanced_url
    }
}

// COMPARING SEARCHES
// GOOGLE
// tricolor rat terrier miniature OR OR OR standard "rat terrier" --rodent 10..35 lb
// PROJECT
// tricolor rat terrier miniature OR OR OR standard "rat terrier" --rodent 10..35 lb