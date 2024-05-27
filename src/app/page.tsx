import {db} from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
    "https://utfs.io/f/3f3b319f-487d-4a53-a541-2e55aae00bbb-i3e4y5.JPG",
    "https://utfs.io/f/c1a4a518-5eab-4a8d-8be5-a79e3d42732d-8l5rwt.jpg",
    "https://utfs.io/f/477b0491-8a43-4e20-b271-d2a96c7d025f-w0f9dk.gif"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}))

export default async function HomePage() {

    const posts = await db.query.posts.findMany()

    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {
                    posts.map(post => (
                        <div key={post.id}>{post.name}</div>
                    ))
                }
                {
                    mockImages.map((image) => (
                        <div key={image.id} className="w-48">
                            <img src={image.url} alt="image"/>
                        </div>
                    ))
                }
            </div>
        </main>
    );
}
