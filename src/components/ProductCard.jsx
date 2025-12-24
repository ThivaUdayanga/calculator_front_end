export default function ProductCard(props){

    console.log("Props received:", props);

    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.image}/>
            <p>{props.price}</p>
        </div>
    )
}