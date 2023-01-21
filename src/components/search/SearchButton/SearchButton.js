import classes from "./SearchButton.module.css";

const SearchButton = (props) => {
    return(
        <button onClick={props.handleClick} className={classes.btn_submit}>Search</button>
    )
}

export default SearchButton;