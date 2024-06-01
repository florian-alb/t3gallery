import {getImage} from "~/server/queries";
import Image from "next/image";

export default async function ImgModal({
                                           params: {id: photoId},
                                       }: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")

    const image = await getImage(idAsNumber)
    return <Image src={image.url} alt={image.name} height={480} width={480} className="h-96"/>
}