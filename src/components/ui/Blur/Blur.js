import {memo} from "react";
import classes from "./Blur.module.css"

const Blur = memo(() => {
    return(
        <div className={classes.scroller_wrap_right}></div>
    )
});

export default Blur;