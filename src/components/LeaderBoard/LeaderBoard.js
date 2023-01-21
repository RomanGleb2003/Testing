import classes from "./LeaderBoard.module.css"
import LeaderBoardComponent from "./LeaderBoardComponent/LeaderBoardComponent";
const LeaderBoard = () => {
    return(
        <div className={classes.board}>
            <div className={classes.head}>
                <h3>LeaderBoard</h3>
                <div>
                    <p><span className={classes.span}/>All Time Edits</p>
                    <p><span className={classes.span}/>Edits This Week</p>
                </div>
            </div>
                <div className={classes.column}>
                    <div>
                        <LeaderBoardComponent
                            name={"RuiZafon"}
                            h2={"R"}
                            filled={40}
                            linear={70}
                        />
                        <LeaderBoardComponent
                            name={"Yosomaha"}
                            h2={"Y"}
                            filled={15}
                            linear={65}
                        />
                        <LeaderBoardComponent
                            name={"Krylancelo"}
                            h2={"K"}
                            filled={15}
                            linear={25}
                        />
                        <LeaderBoardComponent
                            name={"pingu51"}
                            h2={"P"}
                            filled={30}
                            linear={90}
                        />
                        <LeaderBoardComponent
                            name={"simonsmad"}
                            h2={"S"}
                            filled={31}
                            linear={36}
                        />
                    </div>
                    <div>
                        <LeaderBoardComponent
                            name={"kreepykonl"}
                            h2={"K"}
                            filled={13}
                            linear={84}
                        />
                        <LeaderBoardComponent
                            name={"buszmen201 (Jarek)"}
                            h2={"B"}
                            filled={75}
                            linear={34}
                        />
                        <LeaderBoardComponent
                            name={"qualitylover"}
                            h2={"Q"}
                            filled={70}
                            linear={40}
                        />
                        <LeaderBoardComponent
                            name={"h000000"}
                            h2={"H"}
                            filled={11}
                            linear={28}
                        />
                        <LeaderBoardComponent
                            name={"Sheigutn"}
                            h2={"S"}
                            filled={63}
                            linear={20}
                        />
                    </div>
                </div>
        </div>
    )
}

export default LeaderBoard;