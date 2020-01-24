// Global state of the App

interface IGlobalState {
    description: string;
    rating: string;
    numberOfReviews: string;
    features: string[];
    numberOfMonths: string;
    monthlyPayment: string;
    fullPayment: string;
    items: string[];
    paymentMethods: string[];
    currentPrice: string;
    discountAmount: string;
    price: string;
    discountExpirationDate: string;
    name: string;
    model: string;
    sku: string;
    warrantyDuration: string;
    warrantyPrice: string;
    shippingPrice: string;
    shippingDescription: string;
    pickUpPrice: string;
    pickUpDescription: string;
    mainFeatures: {};
    basicFeatures: {};
    activity: {};
    conectivity: {};
    performance: {};
    power: {};
    clock: {};
    material: {};
    dimension: {};
    warranty: {};
    general: {};
    others: {};
    paymentMethodsModalTitle: string;
    paymentMethodsNames: string[];
    paymentMethodsLogos: string[];
    paymentMethodsMonths: string[];
}

export default IGlobalState;

// Initial state of the App

export const initialState: IGlobalState = {
    description: "Fundamentalmente rediseñado. Con pantalla más grande. Sensor cardíaco eléctrico incorporado. Con corona digital con retroalimentación háptica. Notificaciones de frecuencia cardíaca baja y alta. Detección de caídas y emergencia SOS. Detección automática de ejercicios. Nuevos entrenamientos de yoga y senderismo. Funciones avanzadas para corredores como alertas de cadencia y ritmo. Actividad compartida con amigos. Coaching personalizado. Retos mensuales y premios por logros. Puedes usar Walkie-Talkie, hacer llamadas telefónicas y enviar mensajes. Escucha Apple Music y Apple Podcasts. Y usa Siri de formas completamente nuevas. Apple Watch Serie 4 te permite hacerlo desde tu muñeca.",
    rating: "4.9",
    numberOfReviews: "1,228",
    features: [
        "GPS.",
        "Pantalla más del 30% más grande.",
        "Sensores cardíacos eléctricos y ópticos.",
        "Corona digital con retroalimentación háptica.",
        "Altavoz 50% más alto.",
        "S4 SiP con un procesador de doble núcleo más rápido de 64 bits.",
        "Acelerómetro y giroscopio mejorados para la detección de caídas.",
        "Swimproof.",
        "watchOS 5.",
        "Caja de aluminio."
    ],
    numberOfMonths: "15",
    monthlyPayment: "$495",
    fullPayment: "$7,415",
    items: [
        "Adaptador de corriente USB de 5 W",
        "Apple Watch Series 4 (GPS) 40 mm Caja de aluminio oro",
        "Cable de carga magnética de 1 m",
        "Correa sport loop",
        "Manual de usuario",
    ],
    paymentMethods: [
        "Contado",
        "Débito",
        "Revolvente"
    ],
    currentPrice: "$7,129",
    discountAmount: "$2,370",
    price: "$9,499",
    discountExpirationDate: "15/01/2020",
    name: "Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro",
    model: "MU692LZ/A",
    sku: "1000225853",
    warrantyDuration: "1-año",
    warrantyPrice: "$1,999",
    shippingPrice: "GRATIS",
    shippingDescription: "En tus compras por internet",
    pickUpPrice: "GRATIS",
    pickUpDescription: "Compra en línea y recoge gratis en tienda",
    mainFeatures: {
        "Sistema Operativo Compatible": ["", "Apple iOS"],
        "Pantalla Touch": ["", "Sí"],
        "capacidad de memoria interna": ["", "16 GB"],
        "Sistema operativo": ["El sistema operativo maneja todo el software y el hardware, incluyendo los archivos, la memoria y los dispositivos conectados. Lo más importante, le permite interactuar con su dispositivo y sus programas de una manera visual; de lo contrario, estaría escribiendo código de computadora para hacer cualquier cosa.", "watchOS"],
        "Medición de actividades": ["", "Cadence, Electrocardiography, Heart rate"],
        "Tamaño de la pantalla": ["Tamaño de la pantalla, en pulgadas, medida diagonalmente de esquina a esquina.", "40 milímetros"],
        "A prueba de agua": ["", "Sí"],
        "Resistencia máxima de profundidad en el agua": ["", "164 feet"],
        "Material de la correa": ["", "Nylon"],
        "Sincronización": ["", "Siri"]
    },
    basicFeatures: {
        "Payment": ["", "Apple Pay"],
        "Alertas vibratorias": ["", "Sí"],
        "Bocina y micrófono": ["", "Sí"],
        "Reproductor de música": ["", "Sí"],
        "Form Factor": ["", "Wristwatch"],
        "Tipo de alerta": ["", "Vibration"],
        "Clock Display": ["", "Sí"],
        "Tecnología de pantalla": ["", "OLED, Retina"],
        "Pantalla": ["", "Sí"],
        "Resolución de Pantalla": ["", "324 x 394"],
        "Color Monitor": ["", "Sí"],
        "Material de la Pantalla": ["", "Ion-X Glass"],
        "Backlit Display": ["", "No"],
        "Tipo de Producto": ["", "Smartwatch"]
    },
    activity: {
        "Tipo de monitor": ["", "Acelerómetro, Altímetro, Sensor Giroscópico, Sensor de Luz Ambiental, Sensor de ritmo cardíaco"],
        "Monitoreo de Actividades": ["", "Sí"]
    },
    conectivity: {
        "Tecnología NFC": ["Les permite establecer comunicaciones de radio peer-to-peer, pasando datos de un dispositivo a otro tocándolos o poniéndolos muy juntos.", "Sí"],
        "Compatibilidad Wi-Fi": ["", "Wireless B, Wireless G, Wireless N"],
        "Bluetooth habilitado": ["Este dispositivo se conectará a otros dispositivos compatibles con Bluetooth sin necesidad de cables. Muchas impresoras, bocinas, teclados, ratones, audífonos, computadoras, tabletas y teléfonos celulares están habilitados para el uso del Bluetooth.", "Sí"],
        "Version Bluetooth": ["", "5.0"]
    },
    performance: {
        "Aprueba de golpes": ["", "No"],
        "Resistente al Polvo": ["", "Sí"]
    },
    power: {
        "Interfaz": ["", "Inalámbrico"],
        "Tipo de Batería": ["", "iones de Litio"],
        "Recargable": ["", "Sí"]
    },
    clock: {
        "Color de la correa": ["", "Rosa arena"],
        "Tipo de correa": ["", "Sport Loop"]
    },
    material: {
        "Material de la Banda": ["", "Aluminio"]
    },
    dimension: {
        "Correa ajustable": ["", "Sí"],
        "Minimum Wrist Size": ["", "5.12 pulgadas"],
        "Tamaño Máximo de la Muñeca": ["", "7.87 pulgadas"]
    },
    warranty: {
        "Garantía del fabricante - Partes": ["", "1 Año"],
        "Garantía del fabricante - Mano de Obra": ["", "1 Año"]
    },
    general: {
        "Modelo": ["", "MU692LZ/A"],
        "Generaciòn": ["", "Apple Watch Series 4"],
        "Color de Producto": ["", "Oro Rosa"],
        "Gama de color": ["", "Rosa"],
        "Nombre del Producto": ["", "Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro"],
        "Marca": ["", "Apple"]
    },
    others: {
        "EAN/UPC": ["", "190198842534"]
    },
    paymentMethodsModalTitle: "Tarjetas participantes en el servicio de financiación",
    paymentMethodsNames: [
        "Best Buy Citibanamex",
        "Citibanamex",
        "BBVA",
        "PayPal",
        "American Express"
    ],
    paymentMethodsLogos: [
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MXBank_BBYCitibanamex.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MXBank_Citibanamex2-87547.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MXBank_BBVA2-87548.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MX_Bank_Paypal-27663.png",
        "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/MXBank_American_Express.jpg"
    ],
    paymentMethodsMonths: [
        "12",
        "12",
        "18",
        "12",
        "24"
    ]
}
