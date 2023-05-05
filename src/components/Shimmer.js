const Shimmer = (props) => {
    return (
        <div className="res-container">
            {Array(10).fill(" ").map(() => <div className="res-card"></div>)}
        </div>
    )
}

export default Shimmer;