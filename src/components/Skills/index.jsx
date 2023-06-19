import './index.css'

import skillsList from '../../assets/skillsList'

const Skills = () => (
    <div className='skills'>
        <h1 className='skills-heading'> Skills </h1>
        <section>
            <h1 className='skill-type-text'> Frontend </h1>
            <ul className='skills-section' >
                {skillsList.map(eachSKill => {
                    if (eachSKill.type === "frontend") {
                        return (
                            <li key={eachSKill.id} className='skill-card' style={{borderLeftWidth: "5px", borderLeftStyle: "solid", borderLeftColor: `${eachSKill.color}`}}> 
                                <img src={eachSKill.imgUrl} alt={eachSKill.technology} className='technology-image'/>
                                <p className='technology-text'> {eachSKill.technology} </p>
                            </li>
                        )
                    }
                })}
            </ul>
        </section>
        <section>
            <h1 className='skill-type-text'> Backend </h1>
            <ul className='skills-section'>
                {skillsList.map(eachSKill => {
                    if (eachSKill.type === "backend") {
                        return (
                            <li key={eachSKill.id} className='skill-card' style={{borderLeftWidth: "5px", borderLeftStyle: "solid", borderLeftColor: `${eachSKill.color}`}}> 
                                <img src={eachSKill.imgUrl} alt={eachSKill.technology} className='technology-image'/>
                                <p className='technology-text'> {eachSKill.technology} </p>
                            </li>
                        )
                    }
                })}
            </ul>
        </section>
        <section>
            <h1 className='skill-type-text'> Database </h1>
            <ul className='skills-section'>
                {skillsList.map(eachSKill => {
                    if (eachSKill.type === "database") {
                        return (
                            <li key={eachSKill.id} className='skill-card' style={{borderLeftWidth: "5px", borderLeftStyle: "solid", borderLeftColor: `${eachSKill.color}`}}> 
                                <img src={eachSKill.imgUrl} alt={eachSKill.technology} className='technology-image'/>
                                <p className='technology-text'> {eachSKill.technology} </p>
                            </li>
                        )
                    }
                })}
            </ul>
        </section>
    </div>
)

export default Skills