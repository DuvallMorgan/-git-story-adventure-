// inside Feed.jsx map
videos.map((video) => (
  <div key={video.id} className="animate-in fade-in duration-700">
    <VideoCard video={video} />
  </div>
))
