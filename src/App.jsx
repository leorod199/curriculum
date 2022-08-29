import './App.scss'
import Header from './components/Header'
import ListItems from './components/ListItems'
import ListItemsWithIcons from './components/ListItemsWithIcons'
import Text from './components/Text'
import Title from './components/Title'
import TitleSecondary from './components/TitleSecondary'
import data from "../data.json"

function App() {
  document.title = `CV - ${data.name}`
  return (
    <div className="App">
      <Header name={data.name} career={data.career} />
      <section className='Info'>
        <div className="container">
          <div className="wrapper">

            <div className='block objective'>
              <Title title="Objetivo" />
              <Text text={data.intro} />
            </div>

            <div className='block experiences'>
              <Title title="experiência" />
              {data.experiences.map(((item, index) =>
                <div className='item' key={index}>
                  <TitleSecondary title={item.title} />
                  <Text text={item.date} fontSize="smaller" textTransform="uppercase" />
                  <ListItems Items={item.abilitys} />
                </div>
              ))}
            </div>

            <div className='block contact'>
              <Title title="Contato" />
              <ListItemsWithIcons items={data.contacts} />
            </div>

            <div className='block skills'>
              <Title title="Habilidades" />
              <ListItems Items={data.skills} />
            </div>

            <div className='block formation'>
              <Title title="Formação" />
              {data.formation.map(((item, index) =>
                <div className='item' key={index}>
                  <TitleSecondary title={item.title} />
                  <Text text={item.date} fontSize="smaller" textTransform="uppercase" />
                </div>
              ))}
            </div>

            <div className='block courses'>
              <Title title="Cursos" />
              {data.courses.map(((item, index) =>
                <div className='item' key={index}>
                  <TitleSecondary title={item.title} />
                  <Text text={item.date} fontSize="smaller" textTransform="uppercase" />
                </div>
              ))}
            </div>

            <div className='block portifolio'>
              <Title title="Portifólio" />
              <ListItemsWithIcons items={data.projects} />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
export default App
