import classes from "./Section.module.css"
import Links from "./links/Links";

const Section = (props) => {
    return (
        <section className={classes.section}>
            <div className={classes.column_wrapper}>
                <div className={classes.column}>
                    <div className={classes.column_header}>
                        <h2>{props.title}</h2>
                        <Links {...props}/>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;