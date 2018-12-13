var nav_exp = '';

function expand(elem_id) {
    const elem = document.getElementById(elem_id);
    if (elem) {
        if (nav_exp === elem_id) {
            elem.style.maxHeight = '2.2em';
            nav_exp = '';
            return;
        } else if (nav_exp !== '') {
            const exp_elem = document.getElementById(nav_exp);
            exp_elem.style.maxHeight = '2.2em';
        }
        nav_exp = elem_id;
        elem.style.maxHeight = 'none';
        const elem_h = elem.clientHeight;
        elem.style.maxHeight = '2.2em';
        window.setTimeout(function() {
            elem.style.maxHeight = elem_h + 'px';
        }, 5);
    } else {
        console.log(elem_id, "not found");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    nav.classList.add('js');
});
