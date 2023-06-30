import Link from "next/link";
import SoundCloudPlayer from "./soundcloud";
import Image from "next/image";

interface ISlideProps {
    backgroundColor: string;
    data: IData;
}

interface IData {
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

export default function Slide({ backgroundColor, data }: ISlideProps) {
    return (
        <div className={`card ${backgroundColor} h-full md:max-h-[600px]`}>
            <div className="card-body">
                <div className="card-actions justify-end">
                    {data.artist.genres.map(genre => {
                        return (<div key={genre} className="badge badge-outline">#{genre}</div>);
                    })}
                </div>
                <div className="avatar place-content-center">
                    <div className="w-24 rounded-full">
                        <Image src={data.artist.imageUrl} alt={`${data.artist.stageName}`} width={96} height={96} />
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
                        <div>{data.show.price === 0 ? "FREE" : `$${data.show.price}`}</div>
                        {/* <Link href={data.show.ticketsLink} target="_blank"><div className="link link-primary ">Tickets</div></Link> */}
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <div className="card-actions justify-end">
                        <Link href={data.show.ticketsLink} target="_blank"><button className="btn btn-primary">Tickets</button></Link>
                    </div>
                </div>
            </div>
            <SoundCloudPlayer url={data.soundCloudLink} />
        </div >
    );
}