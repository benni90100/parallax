import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";

export function Component  ()  {
    const background: BannerLayer = {
        image:
          '../../public/istockphoto-1470217929-1024x1024.jpg',
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
      };
    
      const headline: BannerLayer = {
        translateX: [50, -30],
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
        opacity: [0, 0.5],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
        ),
      };
    
      return (
        <ParallaxBanner
          layers={[background, gradientOverlay, headline]}
          className="aspect-[2/1] bg-gray-900 bg-cover h-screen w-full overflow-hidden"
        />
      );
  };