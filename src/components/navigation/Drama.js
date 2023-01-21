import NavComponent from "./NavComponent/NavComponent";

const Drama = () => {
    const Way = "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&page="

    return(
        <div>
            <NavComponent way={Way} text="Drama"/>
        </div>
    )
}

export default Drama;