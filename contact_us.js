
function return_solution(){
    url_base = 'localhost:8000'
    slug = document.URL.split(url_base).pop()
    slug_cleaned = slug.split('?')[0]
    url_cleaned = document.URL.split('?')[0]
    form_redirect = document.querySelector('[name="_next"]')

    if (form_redirect){
        form_redirect.setAttribute('value',url_cleaned+'#contact?thankyou=true')
    }
}

function thankyou_message(){
    footer_contact = document.querySelector('#contact')
    header = footer_contact.querySelector('h2')
    form = footer_contact.querySelector('form')
    if (document.URL.includes('thankyou=true')){
        form.setAttribute('style','display: none')
        header.textContent = "Thank You For Reaching Out!"
    }
}


function checkbox_solution() {
    footer_contact = document.querySelector('#contact')
    checkboxes = footer_contact.querySelectorAll('[type="checkbox"]')
    checkbox_value = footer_contact.querySelector('#checkbox-value')

    console.log(checkboxes)

    function check_value(trigger, target) {
        if (trigger.checked == true) {
            target.value += trigger.value + ' '
            target.setAttribute('value', target.value)

        } else {
            target.value = target.value.replace(trigger.value + ' ', "")
            target.setAttribute('value', target.value)

        }

        console.log(target)
    }

    checkboxes.forEach(elem => {

        console.log(elem.value)

        elem.addEventListener('change', function () {
            console.log('checkbox state has changed', elem)

            check_value(elem, checkbox_value)
        })
    });
}

function script_manager(){
    console.log('contact_us.js active')
    return_solution()
    thankyou_message()
    // checkbox_solution()
}

script_manager()