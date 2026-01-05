interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="slider-track flex gap-4">
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-64 md:w-72 lg:w-80 h-40 md:h-48 lg:h-52 rounded-xl overflow-hidden group shadow-soft"
          >
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-primary-foreground text-xs font-medium">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
