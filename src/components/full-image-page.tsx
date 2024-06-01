import {getImage} from "~/server/queries";
import Image from "next/image";
import {Modal} from "~/app/@modal/(.)img/[id]/modal";

export default async function FullImagePageView(props: { id: number }) {
    const image = await getImage(props.id)
    return <Image src={image.url} alt={image.name} height={480} width={480} className="h-96"/>
}