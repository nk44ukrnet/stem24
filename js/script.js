let currentYear = document.getElementById('currentYear');
if(currentYear) {
    let date = new Date().getFullYear();
    currentYear.innerHTML = date;
}