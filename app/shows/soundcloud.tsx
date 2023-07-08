interface SoundCloudProps {
  url: string;
  id: string;
}

export default function SoundCloudPlayer({ url, id }: SoundCloudProps) {
  console.log(url, id);
  // https://developers.soundcloud.com/docs/api/html5-widget#parameters
  const defaultProps = {
    width: "100%",
    height: "300px",
    url,
    autoPlay: false,
    hideRelated: true,
    showComments: false,
    showUser: false,
    showReposts: false,
    visual: true,
    color: "ff5500",
  };

  const {
    width,
    height,
    autoPlay,
    hideRelated,
    showComments,
    showUser,
    showReposts,
    visual,
    color,
  } = defaultProps;

  const src = visual
    ? `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}`
    : `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`;

  return (
    <iframe
      id={id}
      width={width}
      height={visual ? height : "auto"}
      src={src}
      className="overflow-hidden border-0"
    />
  );
}
