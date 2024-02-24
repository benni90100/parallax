import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";

export function Component1  ()  {
    const background: BannerLayer = {
        image:
          '../../public/photo-1638341685295-f08d75cc7802.jpg',
        rotate: [0, 5],
        scale: [0.8, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true
      };
    
      
    
      const headline: BannerLayer = {
        translateX: [-50, 30],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl text-white font-bold">
              Palermo
            </h1>
          </div>
        ),
      };
    
      const gradientOverlay: BannerLayer = {
        opacity: [0, 0],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900 " />
        ),
      };
    
      return (
        <ParallaxBanner
          layers={[background, headline, gradientOverlay]}
          className="aspect-[2/1] bg-gray-900  h-full w-full overflow-hidden "
        />
      );
  };