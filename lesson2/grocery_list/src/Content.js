import AddColor from "./AddColor";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (
                <ItemList 
                    items={items}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your List is Empty.</p>
            )}
            <AddColor />
        </>
    )
}

export default Content;





