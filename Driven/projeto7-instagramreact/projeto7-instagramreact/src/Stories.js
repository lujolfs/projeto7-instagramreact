const story = [
    {
        "user": '9gag',
        "userurl": 'img/9gag.svg'
    },
    {
        "user": 'meowed',
        "userurl": 'img/meowed.svg'
    },
    {
        "user": 'barked',
        "userurl": 'img/barked.svg'
    },
    {
        "user": 'nathanwpylestrangeplanet',
        "userurl": 'img/nathanwpylestrangeplanet.svg'
    },
    {
        "user": 'wawawicomics',
        "userurl": 'img/wawawicomics.svg'
    },
    {
        "user": 'respondeai',
        "userurl": 'img/respondeai.svg'
    },
    {
        "user": 'filomoderna',
        "userurl": 'img/filomoderna.svg'
    },
    {
        "user": 'memeriagourmet',
        "userurl": 'img/memeriagourmet.svg'
    }
]



export default function Stories() {
    return (
        <div class="stories">
            {story.map((post) => 
                        <div class="story">
                        <div class="imagem">
                            <img src={post.userurl} />
                        </div>
                        <div class="usuario">
                            {post.user}
                        </div>
                    </div>
            )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}