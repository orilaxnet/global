import React, { useState } from 'react';
import { ArrowRight, Download, Smartphone, Zap, Mail, ExternalLink, Check, Star } from 'lucide-react';

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
      iconText: "AI",
      iconPath: "aitist.webp"
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
      iconText: "BT",
      iconPath: "burntracker.webp"
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
      iconText: "SG",
      iconPath: "sketchgenius.webp"
    }
  ];

  const AppIcon = ({ app }) => (
    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
      <img 
        src={app.iconPath} 
        alt={`${app.name} app icon`}
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to gradient icon if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className={`w-full h-full ${app.iconBg} flex items-center justify-center`} style={{display: 'none'}}>
        <span className="text-white font-bold text-lg">{app.iconText}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400 mb-8">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Innovation Studio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
              <span className="font-bold">Synthesis</span>Logic
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
              We create new products and bring them to market with intelligent engineering and strategic marketing
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 px-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Product Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Full-Stack Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Market Launch</span>
              </div>
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
                    <AppIcon app={app} />
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
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
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
                    <Download className="w-4 h-4" />
                    <span className="font-medium">Download</span>
                    <ExternalLink className="w-4 h-4" />
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
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-4 text-gray-900">Engineering</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light px-2">
                Full-stack development from server architecture to user interfaces. Every layer optimized for performance.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-4 text-gray-900">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light px-2">
                We don't just build products - we create new categories and solve problems others haven't identified yet.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
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
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
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
              <Mail className="w-5 h-5" />
              <span className="font-medium">Start a Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

// Render the component
ReactDOM.render(<SynthesisLogic />, document.getElementById('root'));
