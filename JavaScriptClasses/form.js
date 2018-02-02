let result = (function() {

    class Textbox {

        constructor(selector, regex) {
            if (!window.jQuery) {
                throw new Error('jQuery lib is not loaded');
            }

            this._elements = $(selector);
            this.value = '';
            this._invalidSymbols = regex;

            this._elements.on('input', (ev) => this.value = $(ev.target).val());
        }

        get elements() {
            return this._elements;
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            this._elements.val(value);
        }

        isValid() {
            return !this._invalidSymbols.test(this.value);
        }
    }

    class Form {

        constructor() {
            if (!window.jQuery) {
                throw new Error('jQuery lib is not loaded');
            }

            this._element = document.createElement('div');
            this._element.className = 'form';
            this.textboxes = arguments;

            this.appendTextboxes(arguments)

        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(boxes) {
            this._textboxes = [];

            for (let box of boxes) {
                if (!box instanceof Textbox) {
                    throw new Error('Invalid instance of the text box item');
                }

                this._textboxes.push(box);
            }
        }

        appendTextboxes(boxes) {
            for (let box of this.textboxes) {
                for (let element of box.elements) {
                    this._element.appendChild(element);
                }
            }
        }

        submit() {
            let isValid = true;

            for (let box of this.textboxes) {
                if (box.isValid()) {
                    box.elements.css('border', '2px solid green');
                } else {
                    box.elements.css('border', '2px solid red');
                    isValid = false;
                }
            }

            return isValid;
        }

        attach(selector) {
            let element = $(selector);
            element.append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");

$('#submit').on('click', function() {
    form.submit();
});