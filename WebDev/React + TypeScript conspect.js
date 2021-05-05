/*

        типизация: 
  - функциональных и классовых компонентов
  - методов жизненного цикла
  - событий

  - портала
  - контекста

  - React hook'ов
  - React HOC'ов

        типизация библиотек: 
  - React Router (react-router-dom)
  - Redux

*/




    /* Типизация фунционального компонента: */

const Title: React.FunctionComponent = () => <h1>Hello World!</h1>
// или
const Title: React.FC = () => <h1>Hello World!</h1>




    /* 2 способа типизирования пропсов (убийца библиотеки prop-types): */

// 1. Использование Generic типов. 
// После определения функционального компонента 
// указываем generic и внутри него описываем значение
const Title: React.FC<{title: string}> = ({title}) => <h1>{title}</h1>

// 2. Если пропсов много, то лучше использовать type или interface; 
// в таком случае функциональный компонент можно не типизировать:
type TitleProps = {
  title: string,
}
const Title = ({title = 'default'}: TitleProps) => <h1>{title}</h1>




    /* Типизация классового компонента и методов жизненного цикла + стилей и ссылки: */

type CounterState = {
  count: number
}

type CounterProps = {
  title?: string
}
// типизация стилей
const styles: React.CSSProperties = {}

// синатксис такой: используем Generic тип и определяем 2 параметра: 
// 1й - типизация пропсов, 2й - типизация state'a, например: <{}, { count: number }>;
// или можно создать отдельные типы как в этом примере:
class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) { // пропсы в конструкторе обязательно типизировать
    super(props)

    this.state = {
      count: 0,
    }
  }

  // Задание значений по умолчанию для пропсов, это функционал react:
  static defaultProps: CounterProps = {
    title: "Default counter:"
  }

  // типизируем созданную ссылку (может добавляться только на <div>)
  private rootRef = React.createRef<HTMLDivElement>()

  static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    return false ? { count: 2 } : null
  }

  componentDidMount():void {
  }

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true
  }

  render() {
    return (
      <div styles={styles} ref={rootRef}>
        {this.props.title}
      </div>
    );
  }
}




    /* Типизация событий: */

// т.к. в React все события оборачиваются в syntetic event 
// для обеспечения лучшей кроссбраузерности, то для каждой 
// такой обертки разработан свой событийный тип.

// React.SyntheticEvent - расплывчатый тип, т.к. мы не уточняем 
// какой конкретно тип события произошел (событие мыши, клавиатуры...);
// список всех синтетических событий есть в документации React
handleClick = (e: React.SyntheticEvent) => {
  console.log(`${e.clientX}, ${e.clientY}`)
}

// конкретизируем тип события
handleClick = (e: React.MouseEvent) => {
  console.log(`${e.clientX}, ${e.clientY}`)
}

// элемент по которому срабатывает событие так же можно типизировать:
// после задания типа события используется Generic <HTML+тип_элемента>.
// <HTMLButtonElement | HTMLAnchorElement> означает что можно вешать 
// обработчик события только на теги <button> или <a>
handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
  console.log(`${e.clientX}, ${e.clientY}`)
}




    /* Типизация портала: */

// Порталы позволяют рендерить дочерние элементы в DOM-узел, 
// который находится вне DOM-иерархии родительского компонента.

// ReactElement - это DOM-элемент (тег)
// ReactNode - более общая сущность (boolean | React.ReactChild | 
//                                   React.ReactFragment | React.ReactPortal)

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// чтобы не дублировать React.ReactNode в типе 
// класса и для типизации пропса в ReactDOM.createPortal
type PortalProps = {
  children: React.ReactNode
}

// простейшая реализация портала:
class Portal extends Component<PortalProps> {
  // создается элемент разметки
  el: HTMLDivElement = document.createElement('div');
  componentDidMount():void {
    document.body.appendChild(this.el)
  }
  componentWillUnmount():void {
    document.body.removeChild(this.el)
  }
  // возвращает ReactElement с пропсами (children с типом React.ReactNode)
  render(): React.ReactElement<PortalProps> {
    // внутри этого элемента можно рендерить нужные компоненты
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}




    /* Типизация контекста: */

// Контекст - это способ передачи данных через дерево компонентов 
// без нобходимости передавать св-ва вручную на каждом уровне;
// т.е. использование контекста помогает избежать т.н. props driling




    /* Типизация hook'ов (почти не требуется): */


// --------- useState ---------

// если использовать простое значение, то типизация е требуется
const [value, setValue] = useState(0)

// если значение комплексное или оно отсутствет 
// при инициализации, то может понадобиться TS:
const [value, setValue] = useState<number | undefined>(undefined)
// или
const [value, setValue] = useState<Array<number>>([])
// или
interface IUser {
  name: string;
  age?: number;
}
const [value, setValue] = useState<IUser>({ name: 'Yauhen' })


// --------- useRef ---------

// сделает ref1.current доступной только для 
// чтения и управляемой только через react
const ref1 = useRef<HTMLElement>(null!)

// сделает ref2.current модифицируемым и предназначимым 
// для изменяемых экземпляров, которыми управляем уже мы
const ref2 = useRef<HTMLElement | null>(null)


// --------- useContext ---------

interface ITheme {
  backgroundColor: string;
  color: string;
}

// Context creation
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white'
})

// Accessing context in a child component
const themeContext = useContext<ITheme>(ThemeContext)


// --------- useReducer ---------

interface State { count: number; }
type Action = { type: 'increment' | 'decrement' }

const counterReducer = ({ count }: State, { type }: Action) => {
  switch (type) {
    case 'increment': return { count: count + 1 }
    case 'decrement': return { count: count - 1 }
    default: return {}
  }
}

const [state, dispatch] = useReducer(counterReducer, { count: 0 })

dispatch({ type: 'increment' })
dispatch({ type: 'decrement' })


// --------- useCallback & useMemo ---------

const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b])
const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b])


// --------- useEffect & useLayoutEffect ---------
// никакой дополнительной типизыции не требуется




    /* Типизация HOC'ов: */

type BaseProps = {   // пропсы компонента кнопки
  primTitle: string,
  secTitle?: string
}
type InjectedProps = {   // пропсы компонента обертки
  toggleStatus: Boolean,
  toggle: () => void
}
// компонент кнопки
const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => (
  <button onClick={toggle}>
    {toggleStatus ? primTitle: secTitle}
  </button>
)
// HOK - компонент, принимающий другой компонент и оборачивающий его 
// своей логикой (тем самым расширяя его возможности) и возвращает новый
const withToggle = <BaseProps extends InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => {
  return (props: BaseProps) => {
    const [toggleStatus, toggle] = useState(false)

    return (
      <PassedComponent
        {...props as BaseProps}
        toggle={() => toggle(!toggleStatus)}
        toggleStatus={toggleStatus}
      />
    )
  }
}

const ToogleButton = withToggle(Button)
const App:React.FC = () => <ToogleButton primTitle="Maint Title" secTitle="Additional Title" />




    /* Типизация React Router (react-router-dom): */
  
// помимо react-router-dom нужно установить @types/react-router-dom (npm i @types/react-router-dom)

// недоконспектировал !!!