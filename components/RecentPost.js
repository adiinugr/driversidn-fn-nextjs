import Image from "next/image"

function RecentPost({ recentPostArray }) {
  return (
    <div className="mb-16">
      <h3 className="mb-4 text-xl font-medium">Latest Updated Drivers</h3>

      <div className="grid grid-cols-1 gap-8">
        {recentPostArray.map((post) => (
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
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2 text-gray-900">{post.title}</h3>

              <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                {post.description}
              </p>

              <p className="text-xs">
                <span className="font-medium">{post.author}</span> -{" "}
                {post.published}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPost
