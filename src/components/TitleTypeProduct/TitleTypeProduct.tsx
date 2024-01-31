type Prop = {
    type: string;
}
const TitleTypeProduct = ({ type }: Prop) => {
    return (
        
        <h2 className="text text_type_main-medium pb-6" >{type}</h2>
    )
}



export default TitleTypeProduct