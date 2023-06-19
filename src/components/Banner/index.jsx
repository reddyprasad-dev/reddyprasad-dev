import './index.css'

const Banner = () => (
    <section className='banner'>
        <div className='banner-text-container'>
            <p className='name'> Hello, <br /> I'm Chandrakanth Mullangi, <br /> Frontend and Backend Developer </p>
            <button type='button' className='download-button'> <a href='*'> <a href='https://drive.google.com/file/d/1PWvUzPjLFIxuRdwy7818xdesjf-vgoV7/view?usp=sharing' target='_blank'> Download Resume </a> </a> </button>
        </div>
        <img src='https://res.cloudinary.com/dcftzujt8/image/upload/v1685951261/photo_y4lu1n.jpg' alt='photo' className='profile-photo'/>  
    </section>
)

export default Banner