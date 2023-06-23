import Link from "next/link";
import SoundCloudPlayer from "./soundcloud";

interface ISlide {
    show: IShow;
    soundCloudLink: string;
    artist: IArtist;
}

interface IArtist {
    stageName: string;
    genres: string[];
    imageUrl: string;
}

interface IVenue {
    coords?: [number, number];
    name: string;
}

interface IShow {
    price: number;
    minAge: "All Ages" | "21+" | "18+";
    time: string;
    date: string;
    dateTime: Date,
    venue: IVenue;
    ticketsLink: string;
}

export default function Slide() {
    const data: ISlide = {
        soundCloudLink: 'https://soundcloud.com/ericvtheg/sets/golden-features',
        artist: {
            stageName: "Golden Features",
            genres: ["House"],
            imageUrl: "/photos/golden_features.jpg"
        },
        show: {
            minAge: "21+",
            price: 0,
            date: "06/18",
            time: "9PM - 2AM",
            dateTime: new Date(),
            ticketsLink: "https://www.eventbrite.com/e/house-beats-4-happy-hour-weekly-music-experience-tickets-592930811017?aff=ebdsoporgprofile",
            venue: {
                name: "Pattern Bar",
            }
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="card-actions justify-end">
                    {data.artist.genres.map(genre => {
                        return (<div key={genre} className="badge badge-outline">#{genre}</div>);
                    })}
                </div>
                <div className="avatar place-content-center">
                    <div className="w-24 rounded-full">
                        <img src={data.artist.imageUrl} />
                    </div>
                </div>
                <h2 className="card-title place-content-center">
                    {data.artist.stageName}
                </h2>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                        <div>{data.show.date}</div>
                        <div>{data.show.time}</div>
                        <div>{data.show.venue.name}</div>
                    </div>
                    <div className="flex flex-col text-right">
                        <div>{data.show.minAge}</div>
                        <div>{data.show.price === 0 ? "FREE" : data.show.price}</div>
                        <Link href={data.show.ticketsLink} target="_blank"><div className="link link-primary">Tickets</div></Link>
                    </div>
                </div>
            </div>
            <figure><SoundCloudPlayer url={data.soundCloudLink} /></figure>
        </div >
    );
}