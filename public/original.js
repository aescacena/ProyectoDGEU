EventManager.once('shop-breadcrumb:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f01', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f01 .shop-breadcrumb', {
        "app": [{
            "@type": "ListItem",
            "position": 1,
            "item": {
                "name": "Catálogo de Productos",
                "@id": "https://www.bestbuy.com.mx/c/productos/c3"
            }
        }, {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "name": "Wearables",
                "@id": "https://www.bestbuy.com.mx/c/wearables/c205"
            }
        }, {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "name": "Smartwatches",
                "@id": "https://www.bestbuy.com.mx/c/smartwatches/c206"
            }
        }]
    }, 'es-MX', configService.getComponentConfig('shop', 'breadcrumb'))
});

EventManager.once('bbmx-product-title:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f02', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f02 .bbmx-product-title', {
        "app": {
            "name": "Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
            "skuId": "1000225853",
            "modelNumber": "MU692LZ/A",
            "publisher": "",
            "releaseDate": "",
            "reviewCount": 1228,
            "averageOverallRating": 4.9,
            "enableWriteReviewsLink": true,
            "writeReviewsLink": "/p/resenas/create/1000225853"
        },
        "metaLayer": {}
    }, 'es-MX', configService.getComponentConfig('bbmx', 'product-title'))
});

EventManager.once('bbmx-badging:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f03', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f03 .bbmx-badging', {
        "badging": {
            "badges": []
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'badging'))
});

[{
    "@context": "http://schema.org/",
    "@type": "ImageObject",
    "name": "Front_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
    "thumbnailUrl": "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_sa.jpg"
}, {
    "@context": "http://schema.org/",
    "@type": "ImageObject",
    "name": "Back_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
    "thumbnailUrl": "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_ba.jpg"
}]

EventManager.once('bbmx-media-gallery-mx:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f03', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f03 .bbmx-media-gallery-mx', {
        "app": {
            "isSmallView": false,
            "skuId": "1000225853",
            "locale": "es-MX"
        },
        "media": {
            "galleryImages": [{
                "id": 0,
                "height": 1000,
                "width": 1000,
                "src": "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_sa.jpg",
                "altText": "Front_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
                "primary": true
            }, {
                "id": 1,
                "height": 1000,
                "width": 1000,
                "src": "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_ba.jpg",
                "altText": "Back_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro"
            }],
            "primaryMediaId": 0,
            "demos": [],
            "videos": []
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'media-gallery-mx'))
});

EventManager.once('bbmx-product-description:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f04', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f04 .bbmx-product-description', {
        "description": "Fundamentalmente rediseñado. Con pantalla más grande. Sensor cardíaco eléctrico\nincorporado. Con corona digital con retroalimentación háptica. Notificaciones de frecuencia cardíaca baja y alta. Detección de caídas y emergencia SOS. Detección automática de ejercicios. Nuevos entrenamientos de yoga y senderismo. Funciones avanzadas para corredores como alertas de cadencia y ritmo. Actividad compartida con amigos. Coaching personalizado. Retos mensuales y premios por logros. Puedes usar Walkie-Talkie, hacer llamadas telefónicas y enviar mensajes. Escucha Apple Music y Apple Podcasts. Y usa Siri de formas completamente nuevas. Apple Watch Serie 4 te permite hacerlo desde tu muñeca."
    }, 'es-MX', configService.getComponentConfig('bbmx', 'product-description'))
});

EventManager.once('bbmx-social-share:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f05', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f05 .bbmx-social-share', {
        "app": {
            "sites": [{
                "name": "Facebook",
                "imageClassName": "ficon-facebook ficon-size-s",
                "title": "Compartir en Facebook",
                "url": "https://www.facebook.com/bestbuymexico",
                "popupUrl": "https://www.facebook.com/sharer/sharer.php?u={shareUrl}",
                "visible": true,
                "width": 700,
                "height": 400
            }, {
                "name": "Twitter",
                "imageClassName": "ficon-twitter ficon-size-s",
                "title": "Compartir en Twitter",
                "url": "https://twitter.com/BestBuyMexico",
                "popupUrl": "https://twitter.com/share?url={shareUrl}&amp;text={shareMessage}",
                "visible": true,
                "width": 700,
                "height": 400
            }, {
                "name": "Google Plus",
                "imageClassName": "ficon-googleplus ficon-size-s",
                "title": "Compartir en Google Plus",
                "url": "https://plus.google.com/u/0/+bestbuymexico",
                "popupUrl": "https://plusone.google.com/_/+1/confirm?hl=en&url={shareUrl}",
                "visible": true,
                "width": 700,
                "height": 500
            }, {
                "name": "YouTube",
                "imageClassName": "ficon-youtube ficon-size-s",
                "title": "Compartir en YouTube",
                "url": "https://www.youtube.com/channel/UCQgSwd0CrkWj2VOSiErN8ZA",
                "popupUrl": "",
                "visible": true,
                "width": "",
                "height": ""
            }, {
                "name": "Pinterest",
                "imageClassName": "ficon-pinterest ficon-size-s",
                "title": "Compartir en Pinterest",
                "url": "https://www.pinterest.com/?next=/pin/create/button/%3Furl%3Dhttp%3A//www.bestbuy.com.mx/",
                "popupUrl": "https://pinterest.com/pin/create/button/?url={shareUrl}&amp;media={metaLayer.env_pisces}/image2/{shareImage};maxHeight=500;maxWidth=500&amp;description={shareMessage}",
                "popurl2": "https://pinterest.com/pin/create/button/?url={shareUrl}&amp;media={metaLayer.env_assets}/pdp/images/missing-image-large.png&amp;description={shareMessage|uc}",
                "visible": false,
                "width": 700,
                "height": 570
            }]
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'social-share'))
});

EventManager.once('shop-add-to-cart:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f06', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f06 .shop-add-to-cart', {
        "app": {
            "buttonState": "ADD_TO_CART",
            "displayText": "Agregar al Carrito",
            "skuId": "1000225853"
        }
    }, 'es-MX', configService.getComponentConfig('shop', 'add-to-cart'))
});

EventManager.once('shop-price-block:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f07', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f07 .shop-price-block', {
        "priceBlock": {
            "freeItemCount": 0,
            "freeItemDetailsContainerID": "bonus-content",
            "customerPrice": "$7,129",
            "priceLabel": "PRECIO DE CONTADO:",
            "priceLabelDescription": "(Contado, Débito, Revolvente)",
            "priceValidUntilMessage": "Precio vigente hasta: 15/01/2020",
            "regularPrice": "$9,499",
            "totalSavings": "$2,370"
        }
    }, 'es-MX', configService.getComponentConfig('shop', 'price-block'))
});

EventManager.once('bbmx-coupon-offers:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f20', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f20 .bbmx-coupon-offers', {
        "couponOffers": {
            "planUrl": "https://www.bestbuy.com.mx/c/servicios-financieros-promociones/1000009",
            "exclusionMessages": [],
            "couponMessages": []
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'coupon-offers'))
});

EventManager.once('bbmx-availability-pop-up:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8d0c-b8f6f87c0f42', '#widget-667a5176-6029-414e-8d0c-b8f6f87c0f42 .bbmx-availability-pop-up', {
        "app": {
            "buttonState": "ADD_TO_CART",
            "disableComponent": false,
            "defaultStoreImageUrl": "https://mexico.bbystatic.com/20.1.2/images/default-store.jpg",
            "enableDriveThru": true,
            "isSmallView": false,
            "locationEndpointFormatString": "/p/api/disponibilidad/{{skuId}}?channel=C&postalCode={{postalCode}}&locationType={{locationType}}&quantity={{quantity}}",
            "multiProduct": false,
            "productDescription": "Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
            "productImageSrc": "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_sa.jpg",
            "selectedLocationType": "store",
            "shippingOptions": ["StandardShipping", "StorePickup"],
            "skuId": "1000225853",
            "rushSTO": true
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'availability-pop-up'))
});

EventManager.once('bbmx-warranty-tiles:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c0f09', '#widget-667a5176-6029-414e-8c0c-b8f6f87c0f09 .bbmx-warranty-tiles', {
        "app": {
            "planUrl": "https://www.bestbuy.com.mx/c/s180/s180",
            "deviceClass": "l",
            "warranties": [{
                "skuId": "1000197427",
                "presentationOrder": 2,
                "type": "I",
                "termInMonths": 12,
                "skuDescription": "1 Año Plan Contra Robo y Accidentes Geek Squad",
                "customerPrice": 1999
            }],
            "warrantyModalContent": {
                "planModalTitle": "BENEFICIO TECH SERVICES",
                "planModalText": "Mantén tu equipo como nuevo con los agentes Tech Services. Quiénes te ayudarán por si algo le llega a pasar. Ahórrate la compostura agregando alguno de nuestros servicios y planes de protección a tu compra.",
                "planModalLinkText": "Más Información",
                "planModalLink": "/c/tech-services/s180",
                "insurancePlanHeading": "Plan de Protección contra Robo y Daño Accidental",
                "replacementPlanHeading": "Plan de Reemplazo de Producto",
                "servicePlanHeading": "Plan de Servicio de Producto",
                "insurancePlanInfoLightbox": {
                    "lightboxTitle": "Plan de Protección contra Robo y Daño Accidental Tech Services",
                    "paragraphs": [{
                        "text": "Tech Services® mantiene protegido tu dispositivo cuando las garantías del fabricante terminan.",
                        "sequence": "1"
                    }, {
                        "title": "Protege tu compra",
                        "text": "Este Plan de Protección cubre indemnización por robo con violencia, reparaciones sin costo por daños provocados por un accidente, descargas eléctricas, píxeles muertos, reemplazo de batería sin costo.",
                        "sequence": "2"
                    }],
                    "lightboxLinkText": "Conóce más acerca del Plan de Protección contra Robo y Daño Accidental",
                    "lightboxLink": "https://www.bestbuy.com.mx/c/tech-services/s180"
                },
                "replacementPlanInfoLightbox": {
                    "lightboxTitle": "Plan de Reemplazo Tech Services",
                    "paragraphs": [{
                        "text": "Tech Services® mantiene protegido tu dispositivo cuando las garantías del fabricante terminan.",
                        "sequence": "1"
                    }, {
                        "title": "Plan de Reemplazo de Producto",
                        "text": "Si tu producto presenta una falla de funcionamiento, llévalo a una Tienda Best Buy y saldrás con un reemplazo de tu compra.",
                        "sequence": "2"
                    }, {
                        "text": "Este plan incluye reparación por fallas funcionales o calificadas, te ofrece indemnización o cambio inmediato en cualquier de nuestras tiendas.",
                        "sequence": "3"
                    }],
                    "lightboxLinkText": "Conóce más acerca del Plan de Reemplazo Tech Services",
                    "lightboxLink": "/c/plan-reemplazo-de-producto/1000022"
                },
                "servicePlanInfoLightbox": {
                    "lightboxTitle": "Plan de Servicio de Producto Tech Services",
                    "paragraphs": [{
                        "text": "Tech Services® mantiene protegido tu dispositivo cuando las garantías del fabricante terminan.",
                        "sequence": "1"
                    }, {
                        "title": "Protege tu compra",
                        "text": "Extiende tu cobertura y protege tu producto por fallas funcionales o calificadas + coberturas especiales + servicio de logística y reparación sin costo. Incluye reparación por fallas funcionales, descargas eléctricas, píxeles muertos, reemplazo de batería y de accesorios.",
                        "sequence": "2"
                    }],
                    "lightboxLinkText": "Conóce más acerca del Plan de Servicio de Producto",
                    "lightboxLink": "/c/tech-services/s180"
                }
            }
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'warranty-tiles'))
});

EventManager.once('bbmx-comparison-selector-mx-pdp:gvp-init', function(init) {
    init('widget-667a5176-6029-414e-8c0c-b8f6f87c5843', '#widget-667a5176-6029-414e-8c0c-b8f6f87c5843 .bbmx-comparison-selector-mx-pdp', {
        "app": {
            "sku": {
                "altText": "Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
                "imagePath": "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_sa.jpg",
                "skuId": "1000225853",
                "title": "Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
                "url": "https://www.bestbuy.com.mx/p/apple-apple-watch-series-4-gps-40mm-caja-de-aluminio-oro-correa-sport-loop-rosa-arena-oro/1000225853"
            },
            "enableCompare": true,
            "deviceClass": "l",
            "translations": {
                "promptTitleSmall": "Sólo puedes comparar 4 productos al mismo tiempo.",
                "promptConfirmSmall": "Ok, lo tengo.",
                "promptTitleLarge": "Sólo puedes comparar 4 productos al mismo tiempo.",
                "promptIntroLarge": "Ya has agregado 4 productos para comparar ¿Quieres ver la comparación de estos 4 productos?",
                "promptConfirmLarge": "Si, comparar",
                "selectorAddToCompare": "Comparar artículo",
                "selectorRemoveFromCompare": "Eliminar del comparativo",
                "trayClearAllAria": "Limpiar todo",
                "trayClearAllButton": "Limpiar todo",
                "trayCompareHeader": "Comparar",
                "trayCompareAria": "Comparar",
                "trayCompareButton": "Comparar",
                "confirmProductAdded": "Producto agregado para comparar",
                "confirmProductRemoved": "Producto eliminado del comparativo"
            }
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'comparison-selector-mx-pdp'))
});

EventManager.once('bbmx-included-items:gvp-init', function(init) {
    init('widget-86566779-2dcd-4542-b8fc-5d00f4192dbc', '#widget-86566779-2dcd-4542-b8fc-5d00f4192dbc .bbmx-included-items', {
        "headerText": "Que Incluye",
        "includedItems": ["Adaptador de corriente USB de 5 W", "Apple Watch Series 4 (GPS) 40 mm Caja de aluminio oro", "Cable de carga magnética de 1 m", "Correa sport loop", "Manual de usuario"]
    }, 'es-MX', configService.getComponentConfig('bbmx', 'included-items'))
});

EventManager.once('bbmx-ugc-overview:gvp-init', function(init) {
    init('widget-86566779-2dcd-4542-b8fc-5d00f4192dbd', '#widget-86566779-2dcd-4542-b8fc-5d00f4192dbd .bbmx-ugc-overview', {
        "ugcOverview": {
            "headerText": "Evaluación y Reseñas",
            "recommendedCount": 1217,
            "totalReviewCount": 1228,
            "recommendedPercent": 99,
            "averageOverallRating": 4.9,
            "showRecommended": false,
            "showWriteReviewsLink": true,
            "writeReviewsLink": "/p/resenas/create/1000225853"
        }
    }, 'es-MX', configService.getComponentConfig('bbmx', 'ugc-overview'))
});

EventManager.once('shop-product-features:gvp-init', function(init) {
    init('widget-86566779-2dcd-4542-b8fc-5d00f4192dbc', '#widget-86566779-2dcd-4542-b8fc-5d00f4192dbc .shop-product-features', {
        "features": [{
            "sequence": 0,
            "description": "GPS."
        }, {
            "sequence": 1,
            "description": "Pantalla más del 30% más grande."
        }, {
            "sequence": 2,
            "description": "Sensores cardíacos eléctricos y ópticos."
        }, {
            "sequence": 3,
            "description": "Corona digital con retroalimentación háptica."
        }, {
            "sequence": 4,
            "description": "Altavoz 50% más alto."
        }, {
            "sequence": 5,
            "description": "S4 SiP con un procesador de doble núcleo más rápido de 64 bits."
        }, {
            "sequence": 6,
            "description": "Acelerómetro y giroscopio mejorados para la detección de caídas."
        }, {
            "sequence": 7,
            "description": "Swimproof."
        }, {
            "sequence": 8,
            "description": "watchOS 5."
        }, {
            "sequence": 9,
            "description": "Caja de aluminio."
        }],
        "app": {
            "deviceClass": "l"
        }
    }, 'es-MX', configService.getComponentConfig('shop', 'product-features'))
});

EventManager.once('bbmx-product-reviews:gvp-init', function(init) {
    init('widget-86566779-2dcd-4542-b8fc-5d00f4192dbc', '#widget-86566779-2dcd-4542-b8fc-5d00f4192dbc .bbmx-product-reviews', {
        "skuId": "1000225853",
        "averageOverallRating": 4.9,
        "createMexicoReviews": true,
        "reviews": [],
        "showMexicoReviews": true,
        "totalReviewCount": 1228,
        "usReviewCount": 1228
    }, 'es-MX', configService.getComponentConfig('bbmx', 'product-reviews'))
});
