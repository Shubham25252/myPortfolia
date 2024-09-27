// import Contact from "./Contact"
// import Home from "./Home"
const Header = () => {
    return (
        <>
            <div className="Container">
                <div className="homeContainer">
                    <div className="header">
                        <h3><a href="#Home">Home</a></h3>
                        <h3><a href="#About">About</a></h3>
                        <h3><a href="#projects">Projects</a></h3>
                       
                        <h3><a href="#Contact">Contact Me</a></h3>
                        <button>Dowload CV</button>
                    </div>
                    {/* <Home /> */}
                </div>
                {/* <Contact /> */}
            </div>
        </>
    )
}
export default Header