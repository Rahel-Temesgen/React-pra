import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {items.length ? (
                <ItemList 
                    items={items}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your List is Empty.</p>
            )}
        </main>
    )
}

export default Content;





