var nav_exp = '';
var nav_exp_mh = 0;

function expand(elem_id) {
    const elem = document.getElementById(elem_id);
    if (elem) {
        if (nav_exp === elem_id) {
            elem.style.maxHeight = nav_exp_mh + 'px';
            nav_exp = '';
            nav_exp_mh = 0;
            return;
        } else if (nav_exp !== '') {
            const exp_elem = document.getElementById(nav_exp);
            exp_elem.style.maxHeight = nav_exp_mh + 'px';
        }
        nav_exp = elem_id;
        nav_exp_mh = elem.clientHeight;
        elem.style.maxHeight = 'none';
        const elem_h = elem.clientHeight;
        elem.style.maxHeight = nav_exp_mh + 'px';
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
