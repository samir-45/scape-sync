// components/FeaturesSection.jsx
import Image from 'next/image';

export default function FeaturesSection() {
    const features = [
        {
            title: "Easy Service Booking",
            description: "Streamlined booking process for clients with service catalogs and availability.",
            icon: (
                <img src="/stroke-icon-1.svg" alt="Easy Service Booking" />
            )
        },
        {
            title: "Real-Time Tracking",
            description: "Monitor job progress, employee hours, and project timelines with live updates.",
            icon: (
                <img src="/stroke-icon-2.svg" alt="Real-Time Tracking" />
            )
        },
        {
            title: "Performance Analytics",
            description: "Comprehensive reporting and insights to improve business operations and efficiency.",
            icon: (
                <img src="/stroke-icon-3.svg" alt="Easy Service Booking" />
            )
        },
        {
            title: "Secure & Reliable",
            description: "Enterprise-grade security with 98.9% uptime guarantee and data protection.",
            icon: (
                <img src="/stroke-icon-4.svg" alt="Easy Service Booking" />
            )
        }
    ];

 return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-white rounded-lg overflow-hidden  border-gray-100">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`
                p-8 relative
             transition-all duration-300
                ${index < features.length - 1 ? 'md:border-r md:border-gray-200' : ''}
                ${index < features.length - 2 ? 'lg:border-r lg:border-gray-200' : ''}
                ${index >= 2 ? 'md:border-t md:border-gray-200 lg:border-t-0' : ''}
              `}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg  transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="mt-4 text-xl font-semibold text-gray-900  transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="mt-2 text-gray-600  transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Mobile divider - show between all items on mobile */}
              {index < features.length - 1 && (
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gray-200 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Alternative layout with cleaner dividers */}
        <div className="hidden mt-12"> {/* This is an alternative option - remove if you prefer the above */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className=" p-6 bg-gray-50 rounded-lg  transition-all duration-300 relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg   transition-colors duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="mt-4 text-xl font-semibold text-gray-900  transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-2 text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Divider for desktop - between columns */}
                {index < features.length - 1 && index % 2 !== 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-4 w-px h-16 bg-gray-200 transform -translate-y-1/2"></div>
                )}
                
                {/* Divider for large screens - between columns except last */}
                {index < features.length - 1 && index % 4 !== 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-16 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}