import React from "react"

export default function Usuario() {
    const [nome, setNome] = React.useState("Catana")
    const [foto, setFoto] = React.useState("img/catanacomics.svg")
    return (
            <DadosUser imagem={foto} texto="catanacomics" nome={nome} />
    )

    function DadosUser(props) {
        return (
            <div class="usuario">
                <img onClick={() => setFoto(prompt("Insira o link para a foto desejada:"))} src={props.imagem} />
                <div class="texto">
                    <strong>{props.texto}</strong>
                    <span>
                    {props.nome}
                    <ion-button onClick={() => setNome(prompt("Insira o nome desejado:"))}><ion-icon name="pencil"></ion-icon></ion-button>
                    </span>
                </div>
            </div>
        )
    }

}

