/*!
 * SynthesisLogic - Product Development Platform
 * 
 * Main application component showcasing our product portfolio
 * Built with React and modern web technologies
 * 
 * @author SynthesisLogic Team
 * @version 1.0.0
 * @copyright 2025 SynthesisLogic. All rights reserved.
 * @description Interactive showcase of AI-powered applications including AItist, 
 *              BurnTracker, and SketchGenius with responsive design and App Store integration
 */

// React Icons - SVG Components
const ChevronRight = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 18 6-6-6-6" />
  </svg>
);

const Download = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3" />
  </svg>
);

const Mail = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4 8 5 8-5" />
  </svg>
);

const ExternalLink = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
  </svg>
);

const Star = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const SynthesisLogic = () => {
  const apps = [
      {
          name: "AItist",
          tagline: "AI: Any Photo to Any Style",
          description: "Transform ordinary photos into extraordinary artwork in just 15 seconds with 34 unique artistic styles.",
          category: "Photo & Video",
          price: "Free",
          features: [
              "15-second transformations",
              "34 artistic styles", 
              "Credits never expire",
              "Social media ready"
          ],
          appStoreUrl: "https://apps.apple.com/us/app/aitist/id6745760049",
          iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
          iconText: "AI"
      },
      {
          name: "BurnTracker",
          tagline: "Track Workouts & Burn Calories",
          description: "All-in-one fitness companion with real-time tracking and HealthKit integration.",
          category: "Health & Fitness", 
          price: "Free",
          features: [
              "20+ workout types",
              "Real-time GPS",
              "HealthKit sync",
              "Progress reports"
          ],
          appStoreUrl: "https://apps.apple.com/us/app/burntracker-fitness-calorie/id6745753122",
          iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
          iconText: "BT"
      },
      {
          name: "SketchGenius", 
          tagline: "Draw, Write, Create with AI",
          description: "Turn simple drawings into stunning AI art with 130+ professional styles and Apple Pencil support.",
          category: "Graphics & Design",
          price: "Free",
          features: [
              "130+ AI styles",
              "Apple Pencil support",
              "Text overlays", 
              "Photo collages"
          ],
          appStoreUrl: "https://apps.apple.com/us/app/sketchgenius/id6748335765",
          iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
          iconText: "SG"
      }
  ];

  return (
      <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="bg-gray-900 text-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
                  <div className="text-center">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                          <span className="font-bold">Synthesis</span>Logic
                      </h1>
                      
                      <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
                          We create new products and bring them to market with intelligent engineering and strategic marketing
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 px-4">
                          <span>Product Development</span>
                          <span>•</span>
                          <span>Full-Stack Solutions</span>
                          <span>•</span>
                          <span>Market Launch</span>
                      </div>
                  </div>
              </div>
          </header>

          {/* Apps Showcase */}
          <section className="py-20 bg-gray-50">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                  <div className="text-center mb-12 sm:mb-16">
                      <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">Our Products</h2>
                      <p className="text-base sm:text-lg text-gray-600 font-light px-4">
                          From concept to market - complete product solutions
                      </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {apps.map((app, index) => (
                          <div 
                              key={index}
                              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                          >
                              <div className="text-center">
                                  <div className="mb-6 flex justify-center">
                                      <div className={`w-20 h-20 rounded-2xl ${app.iconBg} flex items-center justify-center shadow-lg`}>
                                          <span className="text-white font-bold text-lg">{app.iconText}</span>
                                      </div>
                                  </div>
                                  
                                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-gray-900">{app.name}</h3>
                                  <p className="text-gray-600 mb-4 font-light text-sm sm:text-base">{app.tagline}</p>
                                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">{app.description}</p>
                                  
                                  <div className="space-y-2 mb-8 text-left">
                                      {app.features.map((feature, idx) => (
                                          <div key={idx} className="flex items-center space-x-3 text-sm">
                                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                                              <span className="text-gray-700">{feature}</span>
                                          </div>
                                      ))}
                                  </div>

                                  <div className="flex items-center justify-between mb-6">
                                      <div className="text-left">
                                          <div className="text-xs text-gray-500 mb-1">{app.category}</div>
                                          <div className="font-medium text-gray-900">{app.price}</div>
                                      </div>
                                      
                                      <div className="text-right">
                                          <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                                              {[...Array(5)].map((_, i) => (
                                                  <div key={i} className="w-3 h-3">
                                                      <Star />
                                                  </div>
                                              ))}
                                          </div>
                                          <div className="text-xs text-gray-500">App Store</div>
                                      </div>
                                  </div>

                                  <a 
                                      href={app.appStoreUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center justify-center w-full space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors group-hover:scale-105 transform duration-300"
                                  >
                                      <div className="w-4 h-4">
                                          <Download />
                                      </div>
                                      <span className="font-medium">Check on App Store</span>
                                      <div className="w-4 h-4">
                                          <ExternalLink />
                                      </div>
                                  </a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                  <div className="text-center mb-12 sm:mb-16">
                      <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">Our Approach</h2>
                      <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto px-4">
                          From backend infrastructure to market strategy - we build complete solutions
                      </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                      <div className="text-center group">
                          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white text-2xl">⚡</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-medium mb-4 text-gray-900">Engineering</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light px-2">
                              Full-stack development from server architecture to user interfaces. Every layer optimized for performance.
                          </p>
                      </div>

                      <div className="text-center group">
                          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white text-2xl">✨</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-medium mb-4 text-gray-900">Innovation</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light px-2">
                              We don't just build products - we create new categories and solve problems others haven't identified yet.
                          </p>
                      </div>

                      <div className="text-center group">
                          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white text-2xl">🚀</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-medium mb-4 text-gray-900">Marketing</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light px-2">
                              Strategic market entry and growth. We understand how to position and scale new products effectively.
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                              <Mail />
                          </div>
                      </div>
                      
                      <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 sm:mb-6">Let's Connect</h2>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 font-light max-w-2xl mx-auto px-4">
                          Have an idea? Want to collaborate? We'd love to hear from you.
                      </p>
                      
                      <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                          <div className="text-gray-700 text-sm sm:text-base">
                              <a href="mailto:hello@synthesislogic.com" className="text-gray-900 hover:text-gray-600 transition-colors break-all">
                                  hello@synthesislogic.com
                              </a>
                          </div>
                      </div>

                      <a 
                          href="mailto:hello@synthesislogic.com"
                          className="inline-flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors group text-sm sm:text-base"
                      >
                          <div className="w-5 h-5">
                              <Mail />
                          </div>
                          <span className="font-medium">Start a Conversation</span>
                          <div className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                              <ChevronRight />
                          </div>
                      </a>
                  </div>
              </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-400 py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2">SynthesisLogic</h3>
                  <p className="text-sm font-light mb-4">Building tomorrow's products today</p>
                  <div className="text-xs">
                      © 2025 SynthesisLogic. All rights reserved.
                  </div>
              </div>
          </footer>
      </div>
  );
};

// Render
ReactDOM.createRoot(document.getElementById('root')).render(<SynthesisLogic />);
