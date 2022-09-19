const suggestions = [
    {
        "sugimg": "img/bad.vibes.memes.svg",
        "sugname": "bad.vibes.memes",
        "razao": "Segue você"
    },
    {
        "sugimg": "img/chibirdart.svg",
        "sugname": "chibirdart",
        "razao": "Segue você"
    },
    {
        "sugimg": "img/razoesparaacreditar.svg",
        "sugname": "razoesparaacreditar",
        "razao": "Novo no Instagram"
    },
    {
        "sugimg": "img/adorable_animals.svg",
        "sugname": "adorable_animals",
        "razao": "Segue você"
    },
    {
        "sugimg": "img/smallcutecats.svg",
        "sugname": "smallcutecats",
        "razao": "Segue você"
    },
]

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((users) =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={users.sugimg} />
                        <div class="texto">
                            <div class="nome">{users.sugname}</div>
                            <div class="razao">{users.razao}</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

                    )
                }
                </div>
    )
            }