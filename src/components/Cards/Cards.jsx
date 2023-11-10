import './cards.css'

function Cards(props) {
    return (
        <div className='cardsContainer'>
            <h1>Name: {props.name}</h1>
            <h3>Tel: {props.tel}</h3>
            <img src={props.imgUrl} alt="picture" />
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Cards;