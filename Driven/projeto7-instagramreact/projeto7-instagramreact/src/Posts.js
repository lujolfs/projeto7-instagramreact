import React from "react"
const posts = [
    {
        "user": "meowed",
        "useravatar": 'img/meowed.svg',
        "content": 'img/gato-telefone.svg',
        "userlikes": "respondeai",
        "numberlikes": 101.523,
        "likesavatar": 'img/respondeai.svg',
    },
    {
        "user": "barked",
        "useravatar": 'img/barked.svg',
        "content": 'img/dog.svg',
        "userlikes": "adorable_animals",
        "numberlikes": 99.159,
        "likesavatar": 'img/adorable_animals.svg',
    }
]

export default function Posts() {
    
const [save, setSave] = React.useState(<ion-icon name="bookmark-outline"></ion-icon>)

return (
    <div class="posts">
        {posts.map((p) =>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={p.useravatar} />
                        {p.user}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={p.content} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-button onClick={() => setSave(<ion-icon name="bookmark"></ion-icon>)}>{save}</ion-button>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={p.likesavatar} />
                        <div class="texto">
                            Curtido por <strong>{p.userlikes}</strong> e <strong>outras {p.numberlikes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

        )}

    </div>
)
}
