import { type ReactElement, type JSXElementConstructor, type ReactNode, type ReactPortal, useState } from "react"
import { Sun, Droplet, Thermometer, Heart, Share2, BookOpen, ArrowRight, Flower, LeafyGreen, Trees, CloudRain, Footprints, Squirrel } from 'lucide-react';
import { type PlantDetails } from "~/model/PlantDetails"


export function PlantDetailsPage(
  plant: PlantDetails,
) {
const [isBookmarked, setIsBookmarked] = useState(false);
  
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return <div className="mx-auto bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="h-96 bg-green-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-700 z-0"></div>
        <img 
          src="/api/placeholder/1200/600" 
          alt="Monstera Deliciosa" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute bottom-0 left-0 p-8 text-white z-10">
          <h1 className="text-4xl font-bold mb-2">{plant.scientific_name}</h1>
          <p className="text-lg italic text-gray-100">{plant.name}</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="px-6 py-8 md:px-12">
        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <div className="flex gap-4">
            <button 
              className="flex items-center gap-1 text-gray-600 hover:text-green-700"
              onClick={toggleBookmark}
            >
              <Heart 
                size={18} 
                className={isBookmarked ? "fill-green-700 text-green-700" : ""} 
              /> 
              Save
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-green-700">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        {/* Two-column layout for larger screens */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="md:w-2/3">
            <article className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The <em>{plant.scientific_name}</em>, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lacinia magna. Donec condimentum, neque ac vulputate iaculis, diam eros iaculis elit, et imperdiet nulla tortor sit amet felis. Etiam molestie nibh vel urna mollis pulvinar. Fusce in nisi dui. Duis tincidunt sem nec nulla efficitur, et consectetur elit dapibus. Etiam at erat ac metus laoreet interdum. Nulla finibus velit non tortor fermentum, at bibendum ex ultricies. Integer congue ipsum et nulla dapibus, at dictum dolor semper.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Description</h2>
              <p className="mb-4">
                Suspendisse vel est quis justo fermentum fermentum eget in leo. Cras in magna ullamcorper, bibendum odio vitae, luctus diam. Praesent gravida mi et tristique tincidunt. Vestibulum nec lobortis nisl, et interdum leo. Aliquam auctor, purus a aliquet scelerisque, ipsum justo euismod justo, non luctus quam ipsum id nunc. Nam diam ex, vulputate vel tellus vel, eleifend semper diam. Morbi sed blandit lacus, vitae posuere diam. Vestibulum ornare mattis augue ut commodo. Cras a tortor a arcu auctor molestie eu id purus. Proin dictum lorem id turpis sodales, euismod blandit nulla varius.
              </p>

              <div className="my-8 grid grid-cols-2 gap-4">
                <img 
                  src="/api/placeholder/400/300" 
                  alt={plant.name + " image 1"} 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img 
                  src="/api/placeholder/400/300" 
                  alt={plant.name + " image 2"}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Cultivation and Uses</h2>
              <p className="mb-4">
                Fusce lacinia nibh nec aliquam molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras malesuada, dolor ut fringilla sagittis, nibh enim bibendum mi, a elementum nisi urna tincidunt odio. Praesent lobortis neque ut felis vulputate euismod. Quisque ornare lectus eget libero rutrum, vitae placerat lorem pellentesque. Integer non convallis sapien, et sagittis nulla. Etiam fringilla nunc nec lacus rutrum, vel posuere nulla convallis.
              </p>
              
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Related Species</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Other Plant" 
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Other Plant 1</h4>
                    <div className="flex items-center text-green-700 text-sm">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Other Plant" 
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Other Plant 2</h4>
                    <div className="flex items-center text-green-700 text-sm">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">All Stats</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Sun className="text-yellow-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Light</span>
                      <span className="text-sm text-gray-600">Bright, indirect light</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Droplet className="text-blue-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Water</span>
                      <span className="text-sm text-gray-600">Allow soil to dry between waterings</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Thermometer className="text-red-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Temperature</span>
                      <span className="text-sm text-gray-600">65-85°F (18-29°C)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Flower className="text-pink-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Flower Color</span>
                      <span className="text-sm text-gray-600">{plant.flower_color}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <LeafyGreen className="text-emerald-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Evergreen?</span>
                      <span className="text-sm text-gray-600">{plant.evergreen? "Yes":"No"}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CloudRain className="text-yellow-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Drought Tolerant?</span>
                      <span className="text-sm text-gray-600">{plant.drought_tolerant? "Yes":"No"}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Footprints className="text-amber-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Clay Soil Tolerant?</span>
                      <span className="text-sm text-gray-600">{plant.clay_soil_tolerant? "Yes":"No"}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Squirrel className="text-slate-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Animal Tolerant?</span>
                      <span className="text-sm text-gray-600">{plant.animal_tolerance}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Trees className="text-orange-500 mt-1" size={20} />
                    <div>
                      <span className="font-medium block">Fall Color</span>
                      <span className="text-sm text-gray-600">{plant.fall_color}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white px-6 py-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="font-bold text-xl mb-4">Leaf Link</h4>
              <p className="text-green-100 max-w-xs">
                Find the perfect plants for your space
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h5 className="font-medium mb-3">Connect</h5>
                <ul className="space-y-2 text-green-100">
                  <li className="hover:text-white cursor-pointer">About Us</li>
                  <li className="hover:text-white cursor-pointer">Contact</li>
                  <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-white cursor-pointer">Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-6 text-sm text-green-200">
            © 2025 Leaf Link. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
 
}