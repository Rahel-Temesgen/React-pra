const reactContentRoot = document.getElementById('root');
const firstElement = React.createElement('div', null, "React practice")
const unorderedList = React.createElement('ul', null, 
    React.createElement('li', null, 'item1')
)
const listOfUnorderedList = React.createElement('ul', null, [
    React.createElement('li', null ,'item1'),
    React.createElement('li', null ,'item2'),
])

// ReactDOM.render('Hello world!', reactContentRoot);
// ReactDOM.render(firstElement, reactContentRoot);
// ReactDOM.render(unorderedList, reactContentRoot);
ReactDOM.render(listOfUnorderedList, reactContentRoot);




