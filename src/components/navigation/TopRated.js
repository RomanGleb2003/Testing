import NavComponent from "./NavComponent/NavComponent";

const TopRated = () => {
    const Way = "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&page="

    return(
        <div>
            <NavComponent way={Way} text="Top Rated"/>
        </div>
    )
}

export default TopRated;