function DadosUser(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.texto}</strong>
                <span>
                {props.nome}
                <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {
    return (
            <DadosUser imagem="img/catanacomics.svg" texto="catanacomics" nome="Catana" />
    )
}