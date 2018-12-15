var nav_exp = '';
var double_deleg = false;
var deleg1_info = {};
var deleg2_info = {};

function expand(elem_id) {
    const elem = document.getElementById(elem_id);
    if (elem) {
        if (nav_exp === elem_id) {
            elem.style.maxHeight = '2.6em';
            nav_exp = '';
            return;
        } else if (nav_exp !== '') {
            const exp_elem = document.getElementById(nav_exp);
            exp_elem.style.maxHeight = '2.6em';
        }
        nav_exp = elem_id;
        elem.style.maxHeight = 'none';
        const elem_h = elem.clientHeight;
        elem.style.maxHeight = '2.6em';
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
    const form1 = document.forms['del_type'];
    if (form1 !== undefined) {
        form1.style.display = 'block';
    }
});

function send_notif(type, message) {
    console.log(type, message);
}

function validate_name(name) {
    if (name !== "") {
        return true;
    }
    send_notif("e", "Please enter name");
    return false;
}

function validate_phone(p) {
    var valid = true;
    if (p === "") {
        send_notif("e", "Please enter a phone number");
        valid = false;
    } else if (p.length !== 10) {
        send_notif("e", "Please enter a 10 digit phone number");
        valid = false;
    } else if (!/^\d+$/.test(p)) {
        send_notif("e", "Please enter a valid phone number");
        valid = false;
    }
    return valid;
}

function validate_email(e) {
    var valid = true;
    if (e === "") {
        send_notif("e", "Please enter an email address");
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(e)) {
        send_notif("e", "Please enter a valid email address");
        valid = false;
    }
    return valid;
}

function validate_food(o) {
    if (o === "") {
        send_notif("e", "Please select food preference");
        return false;
    }
    return true;
}

function validate_merch(o) {
    if (o === "") {
        send_notif("e", "Please select if you want JUMUN merchandise");
        return false;
    }
    return true;
}

function validate_accom(o) {
    if (o === "") {
        send_notif("e", "Please select if you need accomodation");
        return false;
    }
    return true;
}

function swap_forms(form1, form2) {
    if (form1 === undefined || form2 === undefined)
        return;
    form1.style.display = 'none';
    form2.style.display = 'block';
    window.scrollTo(0, document.getElementById('apply-sec').offsetTop);
}

function del_type_submit() {
    const this_form = document.forms['del_type'];
    const value = this_form['del_type_opt'].value;
    if (value === "") {
        send_notif("e", "Please select a delegation type");
    } else {
        const next_form = document.forms['del1_info'];
        if (value === "single") {
            double_deleg = false;
            document.getElementById("del_text").innerHTML = "Delegate Info";
        } else {
            double_deleg = true;
        }
        swap_forms(this_form, next_form);
    }
    return false;
}

function del1_info_submit() {
    const this_form = document.forms['del1_info'];
    const name = this_form["del_1_name"].value;
    const email = this_form["del_1_email"].value;
    const phone = this_form["del_1_phone"].value;
    const food = this_form["del_1_food"].value;
    const accom = this_form["del_1_accom"].value;
    const merch = this_form["del_1_merch"].value;
    if (validate_name(name) && validate_email(email) && validate_phone(phone) && validate_food(food) && validate_accom(accom) && validate_merch(merch)) {
        deleg1_info = {
            name,
            email,
            phone,
            exp: this_form["del_1_exp"].value,
            food,
            accom,
            merch };
        if (double_deleg) {
            swap_forms(this_form, document.forms['del2_info']);
        } else {
            console.log("Committee pref1 form to be shown");
        }
    }
    return false;
}

function del2_info_submit() {
    const this_form = document.forms['del2_info'];
    const name = this_form["del_2_name"].value;
    const email = this_form["del_2_email"].value;
    const phone = this_form["del_2_phone"].value;
    const food = this_form["del_2_food"].value;
    const accom = this_form["del_2_accom"].value;
    const merch = this_form["del_2_merch"].value;
    if (validate_name(name) && validate_email(email) && validate_phone(phone) && validate_food(food) && validate_accom(accom) && validate_merch(merch)) {
        deleg2_info = {
            name,
            email,
            phone,
            exp: this_form["del_2_exp"].value,
            food,
            accom,
            merch };
        console.log("Committee pref1 form to be shown");
    }
    return false;
}
