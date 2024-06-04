import {Modal} from "~/app/@modal/(.)img/[id]/modal";
import FullImagePageView from "~/common/full-page-image-view";

export default function ImgModal({params: {id: photoId},}: {
    params: { id: string };
}) {
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")
    return (
        <Modal>
            <FullImagePageView id={idAsNumber}/>
        </Modal>
    )
}