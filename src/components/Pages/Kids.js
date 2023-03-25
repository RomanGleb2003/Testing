import NavComponent from "../navigation/NavComponent/NavComponent";

const Kids = () => {
    const Way = "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page="

    return(
        <div>
            <NavComponent way={Way} text="Kids"/>
        </div>
    )
}

export default Kids;