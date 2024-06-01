import {getImage} from "~/server/queries";
import Image from "next/image";
import {Modal} from "~/app/@modal/(.)img/[id]/modal";
import FullImagePageView from "~/components/full-image-page";

export default function ImgPage({params: {id: photoId},}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")
    return  <FullImagePageView id={idAsNumber}/>
}