console.log("🟢 app.js started loading");

// Check if React and ReactDOM are available
console.log("React available:", typeof React !== 'undefined' ? '✅' : '❌');
console.log("ReactDOM available:", typeof ReactDOM !== 'undefined' ? '✅' : '❌');
console.log("ReactFeather available:", typeof ReactFeather !== 'undefined' ? '✅' : '❌');

if (typeof React === 'undefined') {
    console.error("❌ React is not loaded!");
    throw new Error("React is required but not loaded");
}

if (typeof ReactDOM === 'undefined') {
    console.error("❌ ReactDOM is not loaded!");
    throw new Error("ReactDOM is required but not loaded");
}

console.log("🟡 Destructuring React hooks...");
const { useState, useEffect } = React;
console.log("useState:", typeof useState);
console.log("useEffect:", typeof useEffect);

console.log("🟡 Destructuring React Feather icons...");
let ArrowRight, Download, Smartphone, Zap, Mail, ExternalLink, Check, Star;

try {
    if (typeof ReactFeather !== 'undefined') {
        ({ ArrowRight, Download, Smartphone, Zap, Mail, ExternalLink, Check, Star } = ReactFeather);
        console.log("✅ React Feather icons destructured successfully");
    } else {
        console.warn("⚠️ ReactFeather not available, using fallback");
        // Fallback icon component
        const FallbackIcon = ({ className }) => React.createElement('div', { className }, '🔗');
        ArrowRight = Download = Smartphone = Zap = Mail = ExternalLink = Check = Star = FallbackIcon;
    }
} catch (error) {
    console.error("❌ Error destructuring React Feather icons:", error);
    // Fallback icon component
    const FallbackIcon = ({ className }) => React.createElement('div', { className }, '🔗');
    ArrowRight = Download = Smartphone = Zap = Mail = ExternalLink = Check = Star = FallbackIcon;
}

console.log("🟡 Defining SynthesisLogic component...");

const SynthesisLogic = () => {
    console.log("🟢 SynthesisLogic component rendered");
    
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

    console.log("🟡 Apps data:", apps);

    const AppIcon = ({ app }) => {
        console.log("🟡 Rendering AppIcon for:", app.name);
        
        return React.createElement('div', {
            className: "w-20 h-20 rounded-2xl overflow-hidden shadow-lg bg-gray-100"
        }, [
            React.createElement('img', {
                key: 'img',
                src: app.iconPath,
                alt: `${app.name} app icon`,
                className: "w-full h-full object-cover",
                onError: (e) => {
                    console.log(`🟡 Image failed to load for ${app.name}, showing fallback`);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                }
            }),
            React.createElement('div', {
                key: 'fallback',
                className: `w-full h-full ${app.iconBg} flex items-center justify-center`,
                style: { display: 'none' }
            }, React.createElement('span', {
                className: "text-white font-bold text-lg"
            }, app.iconText))
        ]);
    };

    console.log("🟡 Creating main component JSX...");

    return React.createElement('div', {
        className: "min-h-screen bg-white"
    }, [
        // Header
        React.createElement('header', {
            key: 'header',
            className: "bg-gray-900 text-white"
        }, React.createElement('div', {
            className: "max-w-6xl mx-auto px-4 sm:px-6 py-20"
        }, React.createElement('div', {
            className: "text-center"
        }, [
            React.createElement('div', {
                key: 'badge',
                className: "inline-flex items-center space-x-2 text-gray-400 mb-8"
            }, [
                React.createElement(Smartphone, {
                    key: 'icon',
                    className: "w-4 h-4"
                }),
                React.createElement('span', {
                    key: 'text',
                    className: "text-sm font-medium"
                }, "Digital Innovation Studio")
            ]),
            
            React.createElement('h1', {
                key: 'title',
                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight"
            }, [
                React.createElement('span', {
                    key: 'synthesis',
                    className: "font-bold"
                }, "Synthesis"),
                "Logic"
            ]),
            
            React.createElement('p', {
                key: 'description',
                className: "text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4"
            }, "We create new products and bring them to market with intelligent engineering and strategic marketing"),

            React.createElement('div', {
                key: 'features',
                className: "flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 px-4"
            }, [
                React.createElement('div', {
                    key: 'feature1',
                    className: "flex items-center space-x-2"
                }, [
                    React.createElement(Star, {
                        key: 'icon',
                        className: "w-4 h-4"
                    }),
                    React.createElement('span', { key: 'text' }, "Product Development")
                ]),
                React.createElement('div', {
                    key: 'feature2',
                    className: "flex items-center space-x-2"
                }, [
                    React.createElement(Zap, {
                        key: 'icon',
                        className: "w-4 h-4"
                    }),
                    React.createElement('span', { key: 'text' }, "Full-Stack Solutions")
                ]),
                React.createElement('div', {
                    key: 'feature3',
                    className: "flex items-center space-x-2"
                }, [
                    React.createElement(Check, {
                        key: 'icon',
                        className: "w-4 h-4"
                    }),
                    React.createElement('span', { key: 'text' }, "Market Launch")
                ])
            ])
        ]))),

        // Apps Showcase
        React.createElement('section', {
            key: 'apps',
            className: "py-20 bg-gray-50"
        }, React.createElement('div', {
            className: "max-w-6xl mx-auto px-4 sm:px-6"
        }, [
            React.createElement('div', {
                key: 'header',
                className: "text-center mb-12 sm:mb-16"
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: "text-3xl sm:text-4xl font-light text-gray-900 mb-4"
                }, "Our Products"),
                React.createElement('p', {
                    key: 'subtitle',
                    className: "text-base sm:text-lg text-gray-600 font-light px-4"
                }, "From concept to market - complete product solutions")
            ]),

            React.createElement('div', {
                key: 'grid',
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            }, apps.map((app, index) => {
                console.log(`🟡 Rendering app card: ${app.name}`);
                
                return React.createElement('div', {
                    key: index,
                    className: "bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                }, React.createElement('div', {
                    className: "text-center"
                }, [
                    React.createElement('div', {
                        key: 'icon-container',
                        className: "mb-6 flex justify-center"
                    }, React.createElement(AppIcon, { app })),
                    
                    React.createElement('h3', {
                        key: 'name',
                        className: "text-xl sm:text-2xl font-medium mb-3 text-gray-900"
                    }, app.name),
                    
                    React.createElement('p', {
                        key: 'tagline',
                        className: "text-gray-600 mb-4 font-light text-sm sm:text-base"
                    }, app.tagline),
                    
                    React.createElement('p', {
                        key: 'description',
                        className: "text-sm text-gray-700 mb-6 leading-relaxed"
                    }, app.description),
                    
                    React.createElement('div', {
                        key: 'features',
                        className: "space-y-2 mb-8 text-left"
                    }, app.features.map((feature, idx) => 
                        React.createElement('div', {
                            key: idx,
                            className: "flex items-center space-x-3 text-sm"
                        }, [
                            React.createElement('div', {
                                key: 'bullet',
                                className: "w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"
                            }),
                            React.createElement('span', {
                                key: 'text',
                                className: "text-gray-700"
                            }, feature)
                        ])
                    )),

                    React.createElement('div', {
                        key: 'meta',
                        className: "flex items-center justify-between mb-6"
                    }, [
                        React.createElement('div', {
                            key: 'category',
                            className: "text-left"
                        }, [
                            React.createElement('div', {
                                key: 'cat',
                                className: "text-xs text-gray-500 mb-1"
                            }, app.category),
                            React.createElement('div', {
                                key: 'price',
                                className: "font-medium text-gray-900"
                            }, app.price)
                        ]),
                        
                        React.createElement('div', {
                            key: 'rating',
                            className: "text-right"
                        }, [
                            React.createElement('div', {
                                key: 'stars',
                                className: "flex items-center space-x-1 text-yellow-500 mb-1"
                            }, Array(5).fill().map((_, i) => 
                                React.createElement(Star, {
                                    key: i,
                                    className: "w-3 h-3 fill-current"
                                })
                            )),
                            React.createElement('div', {
                                key: 'store',
                                className: "text-xs text-gray-500"
                            }, "App Store")
                        ])
                    ]),

                    React.createElement('a', {
                        key: 'download',
                        href: app.appStoreUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center justify-center w-full space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors group-hover:scale-105 transform duration-300"
                    }, [
                        React.createElement(Download, {
                            key: 'download-icon',
                            className: "w-4 h-4"
                        }),
                        React.createElement('span', {
                            key: 'text',
                            className: "font-medium"
                        }, "Download"),
                        React.createElement(ExternalLink, {
                            key: 'external-icon',
                            className: "w-4 h-4"
                        })
                    ])
                ]));
            }))
        ])),

        // Rest of the component would go here...
        // For now, let's just add a simple footer to test
        React.createElement('footer', {
            key: 'footer',
            className: "bg-gray-900 text-gray-400 py-12"
        }, React.createElement('div', {
            className: "max-w-6xl mx-auto px-4 sm:px-6 text-center"
        }, [
            React.createElement('h3', {
                key: 'title',
                className: "text-xl sm:text-2xl font-light text-white mb-2"
            }, "SynthesisLogic"),
            React.createElement('p', {
                key: 'subtitle',
                className: "text-sm font-light mb-4"
            }, "Building tomorrow's products today"),
            React.createElement('div', {
                key: 'copyright',
                className: "text-xs"
            }, "© 2025 SynthesisLogic. All rights reserved.")
        ]))
    ]);
};

console.log("🟡 Component defined, attempting to render...");

try {
    // Check if root element exists
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        console.error("❌ Root element not found!");
        throw new Error("Root element with id 'root' not found");
    }
    
    console.log("✅ Root element found, rendering component...");
    
    // Use React 18 createRoot API
    if (ReactDOM.createRoot) {
        console.log("✅ Using React 18 createRoot API");
        const root = ReactDOM.createRoot(rootElement);
        root.render(React.createElement(SynthesisLogic));
    } else {
        console.log("✅ Using React 17 render API (fallback)");
        ReactDOM.render(React.createElement(SynthesisLogic), rootElement);
    }
    
    console.log("🟢 ✅ Component rendered successfully!");
    
} catch (error) {
    console.error("❌ Error rendering component:", error);
    console.error("Error stack:", error.stack);
    
    // Show error in the page
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = `
            <div style="padding: 20px; background: #fee; border: 1px solid #fcc; margin: 20px; border-radius: 5px;">
                <h2 style="color: #c00;">Rendering Error</h2>
                <p><strong>Error:</strong> ${error.message}</p>
                <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${error.stack}</pre>
            </div>
        `;
    }
}

console.log("🟢 app.js execution completed");