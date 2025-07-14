export default [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  {
    id: 'q8',
    text: 'What is the primary role of the Virtual DOM in React?',
    answers: [
      'To minimize direct DOM manipulations by diffing and updating efficiently.',
      'To provide a backup of the UI in case of errors.',
      'To handle server-side rendering automatically.',
      'To store component state between renders.',
    ],
  },
  {
    id: 'q9',
    text: 'Which lifecycle method is invoked immediately after a component is mounted?',
    answers: [
      'componentDidMount',
      'componentWillMount',
      'render',
      'componentDidUpdate',
    ],
  },
  {
    id: 'q10',
    text: 'What is a React “key” used for in lists?',
    answers: [
      'To uniquely identify elements for efficient re-rendering.',
      'To encrypt data before rendering.',
      'To bind event handlers to list items.',
      'To specify the default state of a list.',
    ],
  },
  {
    id: 'q11',
    text: 'How do you create a ref in a class component?',
    answers: [
      'By calling React.createRef() in the constructor.',
      'By using the useRef() hook.',
      'By setting ref as a string in JSX.',
      'By using document.getElementById().',
    ],
  },
  {
    id: 'q12',
    text: 'Which hook would you use to perform side effects in a functional component?',
    answers: [
      'useEffect',
      'useState',
      'useCallback',
      'useContext',
    ],
  },
  {
    id: 'q13',
    text: 'What does the dependency array in useEffect control?',
    answers: [
      'When the effect should re-run based on changes of listed values.',
      'How many times the effect can run concurrently.',
      'The cleanup behavior of the effect.',
      'Whether the effect runs before rendering.',
    ],
  },
  {
    id: 'q14',
    text: 'How do you memoize a functional component to prevent unnecessary renders?',
    answers: [
      'Wrap it with React.memo().',
      'Use useState() inside the component.',
      'Call shouldComponentUpdate().',
      'Use PropTypes validations.',
    ],
  },
  {
    id: 'q15',
    text: 'Which of these hooks helps memoize callback functions?',
    answers: [
      'useCallback',
      'useMemo',
      'useReducer',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q16',
    text: 'What is the difference between useMemo and useCallback?',
    answers: [
      'useMemo memoizes values, useCallback memoizes functions.',
      'useMemo runs after render, useCallback runs before render.',
      'useMemo requires a cleanup, useCallback does not.',
      'useMemo is only for class components, useCallback for functions.',
    ],
  },
  {
    id: 'q17',
    text: 'Which hook is suitable for managing complex state logic?',
    answers: [
      'useReducer',
      'useState',
      'useContext',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q18',
    text: 'What does React context provide?',
    answers: [
      'A way to pass data through the component tree without props drilling.',
      'A method for fetching data from APIs.',
      'A built-in state management solution replacing Redux.',
      'A styling mechanism for scoped CSS.',
    ],
  },
  {
    id: 'q19',
    text: 'How do you create a context object?',
    answers: [
      'By calling React.createContext().',
      'By using new Context() from react-dom.',
      'By wrapping components in a <Context> tag.',
      'By importing Context from Redux.',
    ],
  },
  {
    id: 'q20',
    text: 'Which of these is the correct way to consume context in a class component?',
    answers: [
      'static contextType = MyContext;',
      'const value = useContext(MyContext);',
      '<MyContext.Consumer>{value => ...}</MyContext.Consumer> cannot be used here.',
      'By passing context as a prop manually.',
    ],
  },
  {
    id: 'q21',
    text: 'What is a Higher-Order Component (HOC)?',
    answers: [
      'A function that takes a component and returns a new component.',
      'A component with higher priority in rendering.',
      'A special hook for managing state.',
      'A utility for styling components.',
    ],
  },
  {
    id: 'q22',
    text: 'What is the primary use of React.Fragment?',
    answers: [
      'To group a list of children without adding extra nodes to the DOM.',
      'To create portal-like behavior.',
      'To lazy-load components.',
      'To apply context providers.',
    ],
  },
  {
    id: 'q23',
    text: 'Which method would you use to catch errors in child components?',
    answers: [
      'componentDidCatch',
      'getDerivedStateFromError',
      'useErrorBoundary',
      'onError',
    ],
  },
  {
    id: 'q24',
    text: 'What does the getDerivedStateFromError lifecycle do?',
    answers: [
      'Allows updating state when an error is thrown in a child component.',
      'Logs the error to an external service.',
      'Prevents the component from unmounting.',
      'Automatically retries rendering.',
    ],
  },
  {
    id: 'q25',
    text: 'When would you use React.PureComponent?',
    answers: [
      'When you want shallow prop and state comparison for performance optimization.',
      'When you need lifecycle methods only.',
      'When you want deep comparison by default.',
      'When you need server-side rendering.',
    ],
  },
  {
    id: 'q26',
    text: 'Which build tool is commonly used to bundle React applications?',
    answers: [
      'Webpack',
      'Gulp',
      'Grunt',
      'Parcel is not commonly used.',
    ],
  },
  {
    id: 'q27',
    text: 'What is Babel used for in a React project?',
    answers: [
      'To transpile modern JavaScript and JSX into browser-compatible code.',
      'To bundle JavaScript modules.',
      'To serve the application in development.',
      'To manage application state.',
    ],
  },
  {
    id: 'q28',
    text: 'Which of these is a valid way to lazy-load components?',
    answers: [
      'const Other = React.lazy(() => import(\'./Other\'));',
      'import Other from \'./Other\' with suspense.',
      '<Other suspense>',
      'const Other = import(\'./Other\');',
    ],
  },
  {
    id: 'q29',
    text: 'What is the purpose of the <Suspense> component?',
    answers: [
      'To show a fallback while a lazy-loaded component is being loaded.',
      'To catch errors in asynchronous rendering.',
      'To manage global state between components.',
      'To define server-side rendering behavior.',
    ],
  },
  {
    id: 'q30',
    text: 'Which command generates a new React app using Create React App?',
    answers: [
      'npx create-react-app my-app',
      'npm init react-app my-app',
      'react-create-app my-app',
      'yarn init react-app',
    ],
  },
  {
    id: 'q31',
    text: 'What feature allows components to return multiple elements without a wrapper div?',
    answers: [
      'React.Fragment',
      'Portals',
      'Error Boundaries',
      'Context API',
    ],
  },
  {
    id: 'q32',
    text: 'How do you update state based on the previous state?',
    answers: [
      'By passing a function to setState or the updater from useState.',
      'By mutating the state object directly.',
      'By using forceUpdate().',
      'By calling render() manually.',
    ],
  },
  {
    id: 'q33',
    text: 'Which hook replaces componentDidUpdate for subscriptions?',
    answers: [
      'useEffect',
      'useLayoutEffect',
      'useRef',
      'useMemo',
    ],
  },
  {
    id: 'q34',
    text: 'What is the main advantage of Controlled Components?',
    answers: [
      'Form data is handled by React state, giving full control.',
      'They automatically validate inputs.',
      'They require less code than uncontrolled components.',
      'They bypass the Virtual DOM.',
    ],
  },
  {
    id: 'q35',
    text: 'Which of these is an example of an uncontrolled component?',
    answers: [
      '<input defaultValue="foo" />',
      '<input value="foo" onChange={...} />',
      '<input checked={true} />',
      '<textarea value="bar" />',
    ],
  },
  {
    id: 'q36',
    text: 'What is the purpose of the useImperativeHandle hook?',
    answers: [
      'To customize the instance value exposed when using refs with forwardRef.',
      'To manage imperative animations.',
      'To handle form submissions.',
      'To override default context behavior.',
    ],
  },
  {
    id: 'q37',
    text: 'Which of these correctly forwards a ref to a child component?',
    answers: [
      'const MyComp = React.forwardRef((props, ref) => <input ref={ref} />);',
      'function MyComp(props) { return <input ref={props.ref} />; }',
      'const MyComp = (props) => <input ref={props.innerRef} />;',
      'class MyComp extends React.Component { render() { return <input ref={this.props.ref}/>; } }',
    ],
  },
  {
    id: 'q38',
    text: 'What is the React Fiber architecture?',
    answers: [
      'A reimplementation of the reconciliation algorithm to enable incremental rendering.',
      'A new hook for data fetching.',
      'The styling engine in React.',
      'The API for creating context.',
    ],
  },
  {
    id: 'q39',
    text: 'Which hook would you use to read layout from the DOM and synchronously re-render?',
    answers: [
      'useLayoutEffect',
      'useEffect',
      'useRef',
      'useMemo',
    ],
  },
  {
    id: 'q40',
    text: 'What does StrictMode do?',
    answers: [
      'Helps highlight potential problems by intentionally invoking functions twice in development.',
      'Enables production optimizations.',
      'Automatically logs errors to an external service.',
      'Disables deprecated lifecycle methods in production.',
    ],
  },
  {
    id: 'q41',
    text: 'How do you perform code splitting in React?',
    answers: [
      'By using dynamic import() with React.lazy and Suspense.',
      'By creating multiple webpack configs.',
      'By using eval() to load scripts.',
      'By concatenating JS files manually.',
    ],
  },
  {
    id: 'q42',
    text: 'What is hydration in React?',
    answers: [
      'Attaching event listeners to prerendered HTML from the server.',
      'Rendering a component for the first time.',
      'Updating state after initial render.',
      'Cleansing stale data before rendering.',
    ],
  },
  {
    id: 'q43',
    text: 'Which attribute allows dangerously setting raw HTML?',
    answers: [
      'dangerouslySetInnerHTML',
      'innerHTML',
      'rawHTML',
      'setInnerHTML',
    ],
  },
  {
    id: 'q44',
    text: 'What is the purpose of the React DevTools extension?',
    answers: [
      'To inspect React component hierarchies and state/props in the browser.',
      'To bundle React applications.',
      'To lint React code.',
      'To generate documentation.',
    ],
  },
  {
    id: 'q45',
    text: 'Which keyword in JSX prevents XSS by escaping values?',
    answers: [
      'Automatically escapes when using curly braces {}.',
      'The sanitize keyword.',
      'The secure attribute.',
      'The safeJSX function.',
    ],
  },
  {
    id: 'q46',
    text: 'What is prop drilling?',
    answers: [
      'Passing props through multiple intermediary components.',
      'Mutating props directly.',
      'Deep cloning props before passing.',
      'Using context instead of props.',
    ],
  },
  {
    id: 'q47',
    text: 'How can you avoid prop drilling for deeply nested components?',
    answers: [
      'Use the Context API or a state management library.',
      'Pass functions instead of values.',
      'Use defaultProps.',
      'Wrap components in HOCs.',
    ],
  },
  {
    id: 'q48',
    text: 'Which library is commonly used alongside React for global state management?',
    answers: [
      'Redux',
      'Express',
      'Jest',
      'Mocha',
    ],
  },
  {
    id: 'q49',
    text: 'What is the command to install Redux in a React project?',
    answers: [
      'npm install redux react-redux',
      'npm install @redux/core',
      'yarn add redux-toolkit only',
      'npm install redux-saga',
    ],
  },
  {
    id: 'q50',
    text: 'What is the main concept behind Redux?',
    answers: [
      'A single immutable store with state transitions via actions and reducers.',
      'Multiple local stores for each component.',
      'Direct mutation of the state object.',
      'Using class-based context providers.',
    ],
  },
  {
    id: 'q51',
    text: 'Which middleware is commonly used for handling async actions in Redux?',
    answers: [
      'Redux Thunk',
      'Redux Logger',
      'Redux Persist',
      'Redux DevTools',
    ],
  },
  {
    id: 'q52',
    text: 'What is the use of combineReducers in Redux?',
    answers: [
      'To merge multiple reducer functions into one.',
      'To combine actions into a single dispatch.',
      'To create a Redux store.',
      'To apply middleware.',
    ],
  },
  {
    id: 'q53',
    text: 'What hook replaces connect() from react-redux?',
    answers: [
      'useSelector and useDispatch',
      'useStore',
      'useRedux',
      'useContext',
    ],
  },
  {
    id: 'q54',
    text: 'Which testing library is recommended for testing React components?',
    answers: [
      'React Testing Library',
      'Enzyme',
      'Mocha',
      'Chai',
    ],
  },
  {
    id: 'q55',
    text: 'What is a snapshot test?',
    answers: [
      'A test that renders a UI component and compares it to a saved snapshot.',
      'A performance benchmark test.',
      'A test for asynchronous code only.',
      'A test that validates CSS styles.',
    ],
  },
  {
    id: 'q56',
    text: 'Which command runs tests in Create React App?',
    answers: [
      'npm test',
      'npm run jest',
      'npm run spec',
      'npm run test-watch',
    ],
  },
  {
    id: 'q57',
    text: 'How do you simulate user events in React Testing Library?',
    answers: [
      'Using the userEvent or fireEvent utilities.',
      'By calling component.props.onClick().',
      'By directly modifying the DOM.',
      'By using act() only.',
    ],
  },
  {
    id: 'q58',
    text: 'What is React Router used for?',
    answers: [
      'Client-side routing in React applications.',
      'Animating route transitions.',
      'Fetching data for routes.',
      'Server-side routing only.',
    ],
  },
  {
    id: 'q59',
    text: 'How do you declare a route in React Router v6?',
    answers: [
      '<Route path="/home" element={<Home />} />',
      '<Route path="/home" component={Home} />',
      '<Route to="/home" render={<Home />} />',
      '<Route url="/home" view={Home} />',
    ],
  },
  {
    id: 'q60',
    text: 'Which hook does React Router provide to access route parameters?',
    answers: [
      'useParams',
      'useRouteMatch',
      'useLocation',
      'useHistory',
    ],
  },
  {
    id: 'q61',
    text: 'What is server-side rendering (SSR) in React?',
    answers: [
      'Rendering components on the server and sending HTML to the client.',
      'Rendering components only on the client after initial load.',
      'Pre-rendering components at build time only.',
      'Hydrating components with client-side scripts.',
    ],
  },
  {
    id: 'q62',
    text: 'Which framework is built on top of React for SSR and static site generation?',
    answers: [
      'Next.js',
      'Gatsby',
      'Create React App',
      'Angular Universal',
    ],
  },
  {
    id: 'q63',
    text: 'In Next.js, which function fetches data at build time?',
    answers: [
      'getStaticProps',
      'getServerSideProps',
      'getInitialProps',
      'getBuildData',
    ],
  },
  {
    id: 'q64',
    text: 'What is incremental static regeneration in Next.js?',
    answers: [
      'Updating static pages after deployment without a full rebuild.',
      'Regenerating all pages on every request.',
      'Building pages only on the first request.',
      'Fetching data client-side only.',
    ],
  },
  {
    id: 'q65',
    text: 'Which React feature allows interruptible rendering for better responsiveness?',
    answers: [
      'Concurrent Mode (useTransition/useDeferredValue).',
      'Legacy Mode.',
      'StrictMode.',
      'Batching.',
    ],
  },
  {
    id: 'q66',
    text: 'What does the useTransition hook return?',
    answers: [
      'A startTransition function and isPending boolean.',
      'A promise that resolves when transition ends.',
      'A ref for transition timings.',
      'The current route and parameters.',
    ],
  },
  {
    id: 'q67',
    text: 'Which hook lets you defer updating a non-critical state value?',
    answers: [
      'useDeferredValue',
      'usePriorityState',
      'useTransition',
      'useEffect',
    ],
  },
  {
    id: 'q68',
    text: 'What is a React Server Component?',
    answers: [
      'A component rendered entirely on the server without client-side JavaScript.',
      'A component that only runs on client during hydration.',
      'A component that uses serverless functions.',
      'A special component in React Native.',
    ],
  },
  {
    id: 'q69',
    text: 'How do you enable strict mode in a React application?',
    answers: [
      'Wrap your app in <React.StrictMode> at the root.',
      'Set strict: true in package.json.',
      'Use the --strict flag with npm start.',
      'Enable it in the React DevTools settings.',
    ],
  },
  {
    id: 'q70',
    text: 'Which attribute is used to apply CSS modules in React?',
    answers: [
      'import styles from \'./App.module.css\'; and use className={styles.className}',
      'link rel="stylesheet" module',
      'class="module"',
      'data-module-css',
    ],
  },
  {
    id: 'q71',
    text: 'What is tree shaking?',
    answers: [
      'Eliminating unused code during bundling.',
      'Removing old React versions from node_modules.',
      'Cleaning up console.log statements.',
      'Optimizing CSS selectors.',
    ],
  },
  {
    id: 'q72',
    text: 'Which package.json field specifies browser compatibility targets for Babel?',
    answers: [
      'browserslist',
      'babelTargets',
      'compatibility',
      'browserlist',
    ],
  },
  {
    id: 'q73',
    text: 'What is reconciliation in React?',
    answers: [
      'The process of comparing Virtual DOM trees and updating the real DOM.',
      'Synchronizing client and server state.',
      'Merging component props with state.',
      'Combining multiple reducers.',
    ],
  },
  {
    id: 'q74',
    text: 'Which of these improves performance by skipping deep updates?',
    answers: [
      'PureComponent or React.memo',
      'Context API',
      'Error Boundaries',
      'Portals',
    ],
  },
  {
    id: 'q75',
    text: 'What is lazy loading?',
    answers: [
      'Deferring loading of components or resources until needed.',
      'Loading everything at startup.',
      'Preloading all images on mount.',
      'Fetching data in componentDidMount.',
    ],
  },
  {
    id: 'q76',
    text: 'Which hook would you use to access previous prop or state values?',
    answers: [
      'useRef',
      'usePrevious',
      'useCallback',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q77',
    text: 'How do you access the current value of a ref in a functional component?',
    answers: [
      'ref.current',
      'ref.value',
      'useRefValue(ref)',
      'ref.getValue()',
    ],
  },
  {
    id: 'q78',
    text: 'Which of these is a benefit of using TypeScript with React?',
    answers: [
      'Static type checking for props and state.',
      'Faster runtime performance.',
      'Automatic CSS scoping.',
      'Built-in testing utilities.',
    ],
  },
  {
    id: 'q79',
    text: 'How do you define props types in a TypeScript React component?',
    answers: [
      'interface Props { ... } function Comp(props: Props) { ... }',
      'Comp.propTypes = { ... }',
      'type Props = PropTypes.shape({ ... })',
      'const props: any = { ... }',
    ],
  },
  {
    id: 'q80',
    text: 'What is an Error Boundary in React?',
    answers: [
      'A component that catches JavaScript errors in its child tree and displays a fallback UI.',
      'A hook for handling errors in functional components.',
      'A middleware for catching API errors.',
      'A server-side error handler.',
    ],
  },
  {
    id: 'q81',
    text: 'Which lifecycle method is deprecated in React 17 and beyond?',
    answers: [
      'componentWillReceiveProps',
      'componentDidMount',
      'componentDidUpdate',
      'getDerivedStateFromProps',
    ],
  },
  {
    id: 'q82',
    text: 'What does ReactDOM.createPortal allow you to do?',
    answers: [
      'Render children into a DOM node outside the parent component hierarchy.',
      'Create a new React root for hydration.',
      'Portal events from child to parent.',
      'Load remote components dynamically.',
    ],
  },
  {
    id: 'q83',
    text: 'Which prop prevents React from re-rendering a component with the same props?',
    answers: [
      'React.memo wraps the component to skip renders when props are shallowly equal.',
      'shouldComponentUpdate prevents all renders.',
      'PureComponent prevents all updates.',
      'componentDidUpdate prevents re-renders.',
    ],
  },
  {
    id: 'q84',
    text: 'What is the main advantage of Server Components over Client Components?',
    answers: [
      'They reduce client-side JavaScript by rendering on the server.',
      'They support hooks that run only in the browser.',
      'They enable direct DOM manipulation.',
      'They are automatically interactive without hydration.',
    ],
  },
  {
    id: 'q85',
    text: 'Which feature enables you to batch multiple state updates into a single render?',
    answers: [
      'Automatic batching in React 18+.',
      'unstable_batchedUpdates only.',
      'ReactDOM.unstable_batchedUpdates required always.',
      'Manual batching with setTimeout.',
    ],
  },
  {
    id: 'q86',
    text: 'What is a controlled form component?',
    answers: [
      'A form element whose value is driven by React state.',
      'A form element managed by the browser.',
      'A form element without onChange handler.',
      'A form element using defaultValue.',
    ],
  },
  {
    id: 'q87',
    text: 'How do you optimize large lists rendering in React?',
    answers: [
      'Use windowing/virtualization libraries like react-window or react-virtualized.',
      'Render all items and rely on pagination.',
      'Use deep cloning of list items.',
      'Convert list to a string and render once.',
    ],
  },
  {
    id: 'q88',
    text: 'Which hook would you use to subscribe to a data source?',
    answers: [
      'useEffect with a subscription and cleanup.',
      'useLayoutEffect only.',
      'useContext only.',
      'useReducer with middleware.',
    ],
  },
  {
    id: 'q89',
    text: 'What is the recommended way to handle forms in React?',
    answers: [
      'Use controlled components or libraries like Formik or React Hook Form.',
      'Use document.getElementById to read values.',
      'Use uncontrolled components only.',
      'Use inline HTML forms without React state.',
    ],
  },
  {
    id: 'q90',
    text: 'Which hook do you use to read the current route location?',
    answers: [
      'useLocation from React Router.',
      'useRoute from React Redux.',
      'useURL from React Core.',
      'usePath from Context API.',
    ],
  },
  {
    id: 'q91',
    text: 'What is the purpose of React’s key warning when rendering lists?',
    answers: [
      'To alert when list items lack unique keys, which hampers reconciliation.',
      'To prevent duplicate data rendering.',
      'To validate prop types in lists.',
      'To enforce styling rules.',
    ],
  },
  {
    id: 'q92',
    text: 'Which attribute passes a ref to a function component?',
    answers: [
      'You must wrap the function component in forwardRef to pass ref.',
      'ref can be passed directly without forwardRef.',
      'useRef attribute is used instead of ref.',
      'innerRef attribute must be used.',
    ],
  },
  {
    id: 'q93',
    text: 'How do you prevent a component from updating?',
    answers: [
      'Return false in shouldComponentUpdate or use React.memo with a custom compare.',
      'Call event.preventDefault in render.',
      'Use stopPropagation in componentDidMount.',
      'Throw an error in render.',
    ],
  },
  {
    id: 'q94',
    text: 'What does the term “hydration mismatch” refer to?',
    answers: [
      'When server-rendered HTML doesn’t match the client render.',
      'When event handlers aren’t attached.',
      'When CSS modules fail to load.',
      'When contexts have different values.',
    ],
  },
  {
    id: 'q95',
    text: 'Which of these are valid React element types?',
    answers: [
      'Strings, functions, and classes.',
      'Only strings and numbers.',
      'Only classes.',
      'Only functions.',
    ],
  },
  {
    id: 'q96',
    text: 'What is the default value of React.createContext?',
    answers: [
      'The value passed as an argument to createContext when no Provider is used.',
      'null if no default is provided.',
      'An empty object.',
      'undefined always.',
    ],
  },
  {
    id: 'q97',
    text: 'Which hook can replace componentWillUnmount lifecycle?',
    answers: [
      'Return a cleanup function from useEffect.',
      'useCleanup hook.',
      'useUnmount hook.',
      'useBeforeUnload hook.',
    ],
  },
  {
    id: 'q98',
    text: 'What is the purpose of the useDebugValue hook?',
    answers: [
      'To display a label for custom hooks in React DevTools.',
      'To debug state updates in the console.',
      'To log performance metrics.',
      'To validate hook dependencies.',
    ],
  },
  {
    id: 'q99',
    text: 'Which pattern helps reuse component logic without HOCs?',
    answers: [
      'Custom hooks.',
      'Render props.',
      'Mixin classes.',
      'Inline functions.',
    ],
  },
  {
    id: 'q100',
    text: 'What is the benefit of using React.lazy for code splitting?',
    answers: [
      'It allows components to be loaded only when rendered, reducing initial bundle size.',
      'It preloads all components at startup.',
      'It replaces webpack for bundling.',
      'It automatically optimizes images.',
    ],
  },
];
