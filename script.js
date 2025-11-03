const reactContentRoot = document.getElementById('root');
const firstElement = React.createElement('div', null, "React practice")
const unorderedList = React.createElement('ul', null, 
    React.createElement('li', null, 'item1')
)
const listOfUnorderedList = React.createElement('ul', null, [
    React.createElement('li', null ,'item1'),
    React.createElement('li', null ,'item2'),
])

const myItem = "item3";
const jsxElement = (
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>{myItem}</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
)

// ReactDOM.render('Hello world!', reactContentRoot);
// ReactDOM.render(firstElement, reactContentRoot);
// ReactDOM.render(unorderedList, reactContentRoot);
// ReactDOM.render(listOfUnorderedList, reactContentRoot);
ReactDOM.render(jsxElement, reactContentRoot);




