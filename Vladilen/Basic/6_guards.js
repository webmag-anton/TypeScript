// guards - вспомагательные конструкции для работы с типами
// их суть сводится к проверке передаваемого аргумента
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return { info: res.header + res.result };
    }
    return { info: res.header + res.message };
}
function setAlertType(type) {
    // ....
}
setAlertType('success');
setAlertType('warning');
// setAlertType('default')  // ошибка
