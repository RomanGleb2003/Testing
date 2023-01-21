import NavComponent from "./NavComponent/NavComponent";

const TvShows = () => {
    const Way = "discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&page="

    return(
        <div>
            <NavComponent way={Way} text="Tv Shows"/>
        </div>
    )
}

export default TvShows;