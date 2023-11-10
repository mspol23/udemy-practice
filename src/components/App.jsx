import Cards from './Cards/Cards'

function App() {
    return (
        <div className='container'>
            <h1>teste</h1>
            <Cards 
                name='Marcos' 
                tel='+5522888886666' 
                imgUrl='https://picsum.photos/200' 
                email='qaz@qaz.com' 
            />
            
            <Cards name='José' tel='+5522888844444' imgUrl='https://picsum.photos/100' email='edc@qaz.com' />
            <Cards name='Claudio' tel='+55228883333' imgUrl='https://picsum.photos/300' email='tgb@qaz.com' />
        </div>
    )
}

export default App;