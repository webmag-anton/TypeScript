
// namespace'ы - сущности в TS, позволяющие декомпозировать, делать 
//               модульным код, объединять определенные элементы в 
//               группы. namespace'ы удобны в больших проектах


/*
type FormType = 'inline' | 'block'
type FormState = 'active' | 'disabled'

interface FormInfo {
  type: FormType
  state: FormState
}

импортируем все это ^ из form-namespace.ts с помощью такого синтаксиса:   /// <reference path="form-namespace.ts" />
*/

/// <reference path="form-namespace.ts" />

namespace Form {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'disabled'
  
    constructor(public email: string) {
    }
  
    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
  
  export const myForm = new MyForm('v@mail.ru') 
}

console.log(Form.myForm) // чтобы вне namespace Form ^ было что то доступно, это нужно экспортировать


/* 
у нас много типов, интерфейсов описывающих определенные данные внутри формы; 
их можно было бы объединить, т.к. все они относятся к определенной группе,
отвечающей за описание формы

создаю отдельный файл form-namespace.ts (название любое), в котором с помощью
ключевого слова namespace создаю неймспейс c любым именем. Синтаксис такой:
namespace namespaceName {
  all types, interfaces...
} 

далее импортирую этот файл таким способом: /// <reference path="form-namespace.ts" />

далее помещаю область кода, в которой использую все типы, интерфейсы... из 
импортируемого файла с namespace'ом, в такую конструкцию:

namespace sameNamespaceName {
  ...
}

но это еще не все, т.к. внутри объявленного namespace'а все сущности приватные! 
чтобы они стали не приватными, мы должны перед нужными типами, инерфейсами поставть
ключевое слово export
*/