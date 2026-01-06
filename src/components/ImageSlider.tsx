interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-x-auto md:overflow-hidden py-4 touch-pan-x">
      <div className="slider-track flex gap-4 px-4 w-max select-none">
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            tabIndex={0}
            className="flex-shrink-0 w-64 md:w-72 lg:w-80 h-40 md:h-48 lg:h-52 rounded-xl overflow-hidden group shadow-soft focus:outline-none"
          >
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 md:group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent
                  opacity-0
                  md:group-hover:opacity-100
                  group-focus-within:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* Text content */}
              <div
                className="
                  absolute bottom-3 left-3 right-3
                  opacity-0 translate-y-2
                  md:group-hover:opacity-100 md:group-hover:translate-y-0
                  group-focus-within:opacity-100 group-focus-within:translate-y-0
                  transition-all duration-500
                "
              >
                <p className="text-primary-foreground text-xs font-medium">
                  {image.alt}
                </p>

                {/* Optional mobile hint */}
                <p className="text-primary-foreground/80 text-[10px] md:hidden">
                  Tap to view
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ImageSlider;
