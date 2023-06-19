import Header from '../Header'

import { Link } from 'react-router-dom'

import Footer from '../Footer'

import './index.css'

import projectsList from '../../assets/projectsList'


const Projects = () => (
            <>
                <Header />
                <div className='projects'>
                    <h1 className='projects-title'> Projects</h1>
                    <ul className='projects-list'>
                        {projectsList.map(eachProject => (
                            <Link to={`/projects/${eachProject.id}`} key={eachProject.id} >
                                <li className='project-item'> 
                                    <h1 className='project-name'> {eachProject.projectName} </h1>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <Footer />
                </div>
            </>
    )


export default Projects