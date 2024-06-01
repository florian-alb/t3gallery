import {getImage} from "~/server/queries";
import {clerkClient} from "@clerk/nextjs/server";

export default async function FullImagePageView(props: { id: number }) {
    const image = await getImage(props.id)

    const uploaderInfo = await clerkClient.users.getUser(image.userId)
    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex w-full justify-center items-center">
                <img src={image.url} alt={image.name} className="flex-shrink object-contain"/>
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 border-l gap-2">
                <div className="text-lg border-b text-center p-2">{image.name}</div>
                <div className="flex flex-col p-2">
                    <span>Uploaded By: {uploaderInfo.fullName}</span>
                </div>
                <div className="flex flex-col p-2">
                    <span>Created On: {new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}