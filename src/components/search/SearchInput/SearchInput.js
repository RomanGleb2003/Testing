const SearchInput = (props) => {
    return (
            <input
                type="text"
                placeholder="search movie, tv show....."
                onChange={props.handleChange}
                value={props.search}
            />
    )
}

export default SearchInput;