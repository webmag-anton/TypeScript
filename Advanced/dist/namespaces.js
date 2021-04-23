"use strict";
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'disabled';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.myForm = new MyForm('v@mail.ru');
})(Form || (Form = {}));
console.log(Form.myForm);
//# sourceMappingURL=namespaces.js.map