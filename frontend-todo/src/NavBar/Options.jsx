function Option(props){
    return(
        <div className="opt">
        <img className={props.name} src={props.image}></img>
        <span>{props.name}</span>
        </div>
    )
}
export default Option