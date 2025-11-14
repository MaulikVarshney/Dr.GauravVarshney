const videoLinks = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://drive.google.com/file/d/FILE_ID/preview'
];

const Videos = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4 text-center'>My Videos</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {videoLinks.map((link, i) => (
          <div key={i} className='aspect-video rounded-xl overflow-hidden shadow'>
            <iframe src={link} title={`Video ${i}`} allow='autoplay; encrypted-media' allowFullScreen className='w-full h-full'></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
