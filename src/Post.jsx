export function Post(props) { // o componente é nomeado na exportação
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

// export default Post // o componente será nomeado na importação

// Default Exports vs named Exports