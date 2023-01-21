import classes from "./Links.module.css";
import {useLayoutEffect, useRef, useState} from "react";

const Links = (props) => {
    const [isToggled, setToggle] = useState()
    const [item1Width, setItem1Width] = useState();
    const [item2Width, setItem2Width] = useState();
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);

    useLayoutEffect(() => {
        setItem1Width(item1Ref.current.offsetWidth);
        setItem2Width(item2Ref.current.offsetWidth);
    }, []);

    const handleToggle = (selectedItem, toggleState) => {
        setToggle(toggleState)
        console.log(isToggled ? 'true' : 'fslse')
        props.onToggle(selectedItem)
    }

    const activeTextColor = classes.active;

    return (
        <div className={classes.selector_wrap}>
            <div className={classes.selector}>
                <div className={classes.anchor}>
                    <div className={classes.anchor_link}>
                        <div
                            ref={item1Ref}
                            onClick={() => {
                                handleToggle(props.items[0])
                            }}
                            className={isToggled || activeTextColor}
                        >{props.items[0]}</div>
                    </div>
                    <div className={classes.anchor_link}>
                        <div
                            ref={item2Ref}
                            onClick={handleToggle.bind(null, props.items[1])}
                            className={isToggled && activeTextColor}
                        >{props.items[1]}</div>
                    </div>
                    <div className={classes.link} style={
                        isToggled ? {
                            left: `${item1Width + 41}px`,
                            width: `${item2Width + 40}px`
                        } : {
                            left: '0',
                            width: `${item1Width + 45}px`
                        }
                    }></div>
                </div>
            </div>
        </div>
    )
}

export default Links;