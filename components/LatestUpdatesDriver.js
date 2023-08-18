import Image from "next/image"

function LatestUpdatesDriver({ latestUpdatesDriverArray }) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-medium">Recent Posts</h3>

      <div className="grid grid-cols-1 gap-8">
        {latestUpdatesDriverArray.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center gap-4"
          >
            <div className="w-[100px] aspect-square relative">
              <Image
                src={post.imageUrl}
                fill
                className="object-cover rounded-md"
                alt={post.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2 text-gray-900">{post.title}</h3>

              <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestUpdatesDriver
