class Textbox {

    constructor(selector, regex) {
        if (!window.jQuery) {
            throw new Error('jQuery lib is not loaded');
        }

        this._elements = $(selector);
        this.value = '';        // $(this._elements[0]).val();
        this._invalidSymbols = regex;

        this._elements.on('input', (ev) => this.value = $(ev.target).val());
        // this.onInput();
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

    onInput() {
        let that = this;

        this.elements.on('input', function() {
            that.value = $(this).val();
        })
    }
}

let textbox = new Textbox('.textbox',/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){
    console.log(textbox.value);
    console.log(textbox.isValid());
});