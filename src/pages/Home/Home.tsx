import CarouselUploader from '../../components/CarouselUploader/CarouselUploader '
import "../../index.css"
const Home = () => {
  return (
    <>
      <CarouselUploader />
      <a href='https://joaovsz.netlify.app'
        target='_blank'
        style={{ position: 'absolute', top: '1rem', right: '1rem', filter: 'invert(1)', border: '1px solid white', borderRadius: '.5rem', display: 'flex', alignItems: "center", padding: '.5rem' }}>
        <img src="https://joaovsz.netlify.app/images/minimalLogoWhite.svg" width="50px" alt="logo" />
      </a>
    </>
  )
}

export default Home