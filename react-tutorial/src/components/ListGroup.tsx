function ListGroup() {

    var items = [
        "London",
        "New York",
        "Philadelphia",
        "Istanbul",
        "Barcelona"
    ]

    return (
        <>
            <h1>Cities</h1>
            {items.length === 0 && <p>no items found</p>}
            <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>    
        </>
     );
}

export default ListGroup