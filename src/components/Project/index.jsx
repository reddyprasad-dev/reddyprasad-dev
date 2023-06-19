import {useParams} from 'react-router-dom'

import './index.css'

import Header from '../Header'

import Footer from '../Footer'

import projectsList from '../../assets/ProjectsList'

const Project = () => {

    const params = useParams()

    const {id} = params

    console.log(typeof id)

    const project = projectsList.filter(eachProject => eachProject.id === id)

    return (
        <>
            <Header />
            <section className='project-container'>
                <h1 className='project-title'> {project[0].projectName} </h1>
                <div className='project-image'>
                    <img src={project[0].imageUrl} alt={project[0].projectName} />
                </div>
                <h1 className='project-description-and-technologies-title'> Description: </h1>
                <p className='project-description'> {project[0].projectDescription.split("*")[0]} </p>
                <ol className='project-description-and-technologies-points'>
                    {project[0].projectDescription.split("*").slice(1).map(each => (
                        <li className='point'>
                            {each} 
                        </li>
                    ))}
                </ol>
                <h1 className='project-description-and-technologies-title'> Technologies Used: </h1>
                <ul className='project-description-and-technologies-points'>
                    {project[0].technologies.map(each => (
                        <li className='technology'> {each} </li>
                    ))}
                </ul>
                <h1 className='project-description-and-technologies-title'> Source code </h1>
                <a href={project[0].gitHubLink} target='_blank' className='git-link'> {project[0].gitHubLink} </a>        
            </section>
            <Footer />
        </>
    )
}

export default Project