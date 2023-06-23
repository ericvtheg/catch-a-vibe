export default function SoundCloudPlayer() {
    const defaultProps = { 
        width: "100%",
        height: "300px",
        url: "https://soundcloud.com/ericvtheg/sets/fucking-filth-workout-playlist?si=5756b26af4f34b2082bd5c2543046368&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        autoPlay: false,
        hideRelated: false,
        showComments: true,
        showUser: true,
        showReposts: false,
        visual: true,
        color: "ff5500"
      };

      const { url, width, height, autoPlay, hideRelated, 
        showComments, showUser, showReposts, visual, color } = defaultProps;

    const src = visual ? 
    `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}` :
    `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`; 

    return (
        <>
            test1
            <iframe
                width={width}
                height={visual ? height : "auto"}
                src={src} 
                className="overflow-hidden border-0"
            />
                
        </>
    )
}