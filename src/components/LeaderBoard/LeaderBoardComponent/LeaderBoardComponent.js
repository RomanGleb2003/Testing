import classes from "./LeaderBoardComponent.module.css";

const LeaderBoardComponent = (props) => {
    return(
        <div className={classes.col}>
            <span className={classes.avatar}><h2>{props.h2}</h2></span>
            <div className={classes.data}>
                <div>
                    <h2>{props.name}</h2>
                    <div>
                        <div className={classes.progressbar}>
                            <div style={{
                                height: "100%",
                                width: `${props.filled}%`,
                                background: "linear-gradient(to right, #a0fcaf, #02af58)",
                                transition:"width 0.5s",
                                borderRadius:"40px"
                            }}></div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.progressbar}>
                            <div style={{
                                height: "100%",
                                width: `${props.linear}%`,
                                background: "linear-gradient(to right, #e1a60f, #e8084a)",
                                transition:"width 0.5s",
                                borderRadius:"40px"
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoardComponent;