import HomeNav from "./../components/HomeNav";
import "./../style/Home.css"

function Home() {
    return (
        <>
            <HomeNav />
                <div className="body">
                    <div className="homeText">Craving for a feast?!<br />Order now!!</div>
                </div>
        </>
    );
}

export default Home;