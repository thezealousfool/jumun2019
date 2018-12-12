var nav_exp = '';

function expand(elem_id) {
    const elem = document.getElementById(elem_id);
    if (elem) {
        if (nav_exp === elem_id) {
            elem.classList.remove('show-ul');
            nav_exp = '';
            return;
        } else if (nav_exp !== '') {
            const exp_elem = document.getElementById(nav_exp);
            exp_elem.classList.remove('show-ul');
        }
        elem.classList.add('show-ul');
        nav_exp = elem_id;
    } else {
        console.log(elem_id, "not found");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('nav');
    nav.classList.add('js');
});
