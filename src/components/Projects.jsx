import ProjectsCards from "./ProjectsCard";
const Projects = () => {
    return (
        <div id="projects" className="mainProjectContainer">
            <h1>Projects</h1>
            <div className="projectContainer">
                <div className="filterProjects">
                    <button>All</button>
                    <button>HTML & CSS</button>
                    <button>JAVASCRIPT</button>
                    <button>React</button>
                    <button>Front-End</button>
                    <button>Active Projects</button>
                   
                </div>
                <div className="ProjectList">
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                <ProjectsCards/>
                </div>
                {/* Add more projects */}
            </div>
        </div>
    )
};
export default Projects;