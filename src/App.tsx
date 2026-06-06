/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Heart, 
  RefreshCw, 
  Send, 
  Clipboard, 
  ChevronDown, 
  Award, 
  Smile, 
  Map,
  CheckCircle2,
  Lock,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- CUSTOM HIGH END BRAND WORK ---

// Logo representing old gold stars and brush background and old-rose colors
const BrandLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Handcrafted paint brush-stroke backdrop */}
      <div className="absolute w-32 h-9 bg-brand-rose/25 rounded-full filter blur-md -rotate-6 pointer-events-none"></div>
      
      {/* Decorative stars / old gold framing */}
      <div className="absolute -top-1.5 -right-1 text-brand-gold animate-pulse">
        <Sparkles className="w-4 h-4" />
      </div>
      
      <div className="relative text-center px-4 py-1 border-y border-dashed border-brand-gold/30">
        <span className="font-display text-2xl tracking-widest font-bold uppercase text-brand-dark block leading-none">
          María Ruz
        </span>
        <span className="text-[10px] tracking-[0.35em] font-sans font-semibold text-brand-gold uppercase block mt-1 ml-0.5">
          Beauty
        </span>
      </div>
    </div>
  );
};

// Animated old rose butterflies crossing the screen to convey delicacy & femininity
const FloatingButterflies = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Butterfly 1 */}
      <motion.div
        className="absolute w-5 h-5 text-brand-rose opacity-40"
        initial={{ x: "8%", y: "85%", rotate: 0 }}
        animate={{ 
          x: ["8%", "18%", "14%", "30%", "22%"],
          y: ["85%", "60%", "45%", "25%", "-10%"],
          rotate: [0, 35, -20, 25, 0]
        }}
        transition={{ 
          duration: 25, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full scale-x-[-1]">
          <path d="M12,10C11.3,9.1 9.5,7.2 7,7.2C4.1,7.2 2,9.3 2,12.2C2,15.7 5.7,19.2 12,22C18.3,19.2 22,15.7 22,12.2C22,9.3 19.9,7.2 17,7.2C14.5,7.2 12.7,9.1 12,10Z" />
        </svg>
      </motion.div>

      {/* Butterfly 2 */}
      <motion.div
        className="absolute w-6 h-6 text-brand-rose opacity-30"
        initial={{ x: "88%", y: "75%", rotate: 0 }}
        animate={{ 
          x: ["88%", "72%", "78%", "55%", "62%"],
          y: ["75%", "50%", "33%", "15%", "-10%"],
          rotate: [0, -30, 20, -40, 10]
        }}
        transition={{ 
          duration: 30, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 4
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,10C11.3,9.1 9.5,7.2 7,7.2C4.1,7.2 2,9.3 2,12.2C2,15.7 5.7,19.2 12,22C18.3,19.2 22,15.7 22,12.2C22,9.3 19.9,7.2 17,7.2C14.5,7.2 12.7,9.1 12,10Z" />
        </svg>
      </motion.div>
    </div>
  );
};

// --- DATA STRUCTURES ---

interface Service {
  id: string;
  name: string;
  category: "masajes" | "faciales";
  price: number;
  duration: number;
  description: string;
  benefits: string[];
  isPopular?: boolean;
}

const SERVICES_DATA: Service[] = [
  // --- QUIROMASAJES ---
  {
    id: "ms-1",
    name: "Masaje Descontracturante o Relajante",
    category: "masajes",
    price: 50,
    duration: 60,
    description: "Masaje profundo para aliviar tensiones profundas o inducir un estado de paz absoluto.",
    benefits: ["Alivio de contracturas", "Mejora muscular", "Aceites esenciales calientes"],
    isPopular: true
  },
  {
    id: "ms-2",
    name: "Masaje Relajante o Descontracturante Forte",
    category: "masajes",
    price: 45,
    duration: 45,
    description: "Masaje focalizado de duración intermedia con técnicas manuales de recuperación muscular.",
    benefits: ["Presión personalizable", "Alivio del estrés diario", "Toallas calientes reconfortantes"]
  },
  {
    id: "ms-3",
    name: "Masaje Espalda y Cuello",
    category: "masajes",
    price: 30,
    duration: 30,
    description: "Terapia manual concentrada en la zona cervical, hombros y lumbar donde se retiene la crispación.",
    benefits: ["Atenúa cefaleas tensionales", "Recupera rango articular", "Alivio rápido en 30 minutos"]
  },
  {
    id: "ms-4",
    name: "Masaje Piernas Cansadas",
    category: "masajes",
    price: 30,
    duration: 30,
    description: "Combinación de masaje ascendente drenante y geles fríos que reactivan el flujo circulatorio.",
    benefits: ["Alivio inmediato de pesadez", "Drenaje circulatorio", "Ideal para embarazadas u horas de pie"]
  },
  {
    id: "ms-5",
    name: "Masaje + Diatermia Especial (Dolores y Lesiones)",
    category: "masajes",
    price: 60,
    duration: 60,
    description: "Biotecnología profunda que calienta los tejidos biológicos desde el interior acelerando la recuperación.",
    benefits: ["Regeneración muscular express", "Eficacia contra dolores crónicos", "Resultados desde la sesión 1"],
    isPopular: true
  },
  {
    id: "ms-6",
    name: "Masaje Craneofacial",
    category: "masajes",
    price: 20,
    duration: 20,
    description: "Masaje craneal y rostro centrado en liberar micro-tensiones emocionales acumuladas.",
    benefits: ["Inducción a la calma profunda", "Sedación nerviosa", "Puntos reflejos activados"]
  },
  {
    id: "ms-7",
    name: "Masaje de Pies",
    category: "masajes",
    price: 20,
    duration: 20,
    description: "Masaje de reflexología podal que equilibra el bienestar de todo tu organismo.",
    benefits: ["Estimulante y reconfortante", "Alivio articular en pies", "Crema orgánica de menta y lavanda"]
  },

  // --- TRATAMIENTOS FACIALES ---
  {
    id: "fc-1",
    name: "Limpieza Facial Profunda",
    category: "faciales",
    price: 45,
    duration: 60,
    description: "Higiene facial exhaustiva no invasiva que retira toxinas y restaura el pH de la piel.",
    benefits: ["Peeling sutil", "Extracción indolora de poros", "Mascarilla purificante botánica"],
    isPopular: true
  },
  {
    id: "fc-2",
    name: "Limpieza Facial + Vitamina C + Mesoterapia",
    category: "faciales",
    price: 55,
    duration: 60,
    description: "Tratamiento hidratante intensivo con antioxidantes que devuelven la luminosidad del rostro canino.",
    benefits: ["Luminosidad destelleante inmediata", "Absorción ultra-profunda soluble", "Cóctel de vitaminas de alta gama"]
  },
  {
    id: "fc-3",
    name: "Tratamiento de Exosomas",
    category: "faciales",
    price: 65,
    duration: 50,
    description: "Protocolo biotecnológico avanzado para regenerar las células faciales y atenuar la edad biológica.",
    benefits: ["Renovación de elastina", "Atenúa marcas de acné o líneas", "Tecnología celular antienvejecimiento"],
    isPopular: true
  },
  {
    id: "fc-4",
    name: "Hilos Tensores Faciales de Seda",
    category: "faciales",
    price: 55,
    duration: 45,
    description: "Filamentos de colágeno absorbidos por la piel que forman un soporte tensor sin infiltraciones ni agujas.",
    benefits: ["Relleno progresivo de surcos", "Firmeza evidente sin dolor", "Aspecto jugoso y rejuvenecido"]
  },
  {
    id: "fc-5",
    name: "Diatermia Facial Reafirmante",
    category: "faciales",
    price: 45,
    duration: 45,
    description: "Reafirmación profunda que fomenta la producción biológica de colágeno mediante calor interno.",
    benefits: ["Efecto lifting acumulativo", "Mejora el óvalo facial", "Sesión térmica sumamente relajante"]
  },
  {
    id: "fc-6",
    name: "Lifting y Tinte de Pestañas",
    category: "faciales",
    price: 35,
    duration: 45,
    description: "Tratamiento estético que alarga y curva tus pestañas naturales tiñéndolas para dar espesor.",
    benefits: ["Ojos hermosos de inmediato", "No daña tus pestañas", "Efecto durante 5-6 semanas"]
  },
  {
    id: "fc-7",
    name: "Laminado y Tinte de Cejas",
    category: "faciales",
    price: 30,
    duration: 40,
    description: "Estilizado preciso de cejas rebeldes para lograr un diseño uniforme, denso y expresivo.",
    benefits: ["Cejas pobladas y peinadas", "Definición impecable de mirada", "Nutrición con queratina botánica"]
  },
  {
    id: "fc-8",
    name: "Tinte de Cejas o Pestañas",
    category: "faciales",
    price: 10,
    duration: 15,
    description: "Aplicación focalizada de pigmento hipoalergénico para resaltar tus rasgos naturales.",
    benefits: ["Definición de color óptimo", "Excelente para canas o vello claro", "Duradero al agua"]
  },
  {
    id: "fc-9",
    name: "Mesoterapia Virtual Facial",
    category: "faciales",
    price: 35,
    duration: 35,
    description: "Corrientes electromagnéticas que abren microporos transitorios para nutrir las capas dérmicas.",
    benefits: ["Cero pinchazos ni molestias", "Piel sedosa de inmediato", "Nutrición celular garantizada"]
  },
  {
    id: "fc-10",
    name: "Tratamiento Despigmentante",
    category: "faciales",
    price: 45,
    duration: 45,
    description: "Terapia orientada a modular la melamina y atenuar manchas solares o de edad.",
    benefits: ["Tono cutáneo homogéneo", "Aclara e ilumina", "Prevención de nuevas hiperpigmentaciones"]
  },
  {
    id: "fc-11",
    name: "Dermapen + Vitamina C",
    category: "faciales",
    price: 40,
    duration: 45,
    description: "Dispositivo de microagujas que regenera la tersura cutánea e introduce vitamina C antioxidante.",
    benefits: ["Previene líneas de expresión", "Estimulación epidérmica controlada", "Unifica textura de poros"]
  },
  {
    id: "fc-12",
    name: "BB Glow Color Velvet",
    category: "faciales",
    price: 40,
    duration: 45,
    description: "Tratamiento coreano semipermanente que proporciona un efecto de piel de porcelana uniforme.",
    benefits: ["Camufla rojeces y ojeras ligeras", "Aspecto de cutis maquillado suave", "Hidratación integral y diaria"]
  },
  {
    id: "fc-13",
    name: "Hidralips Hidratación Labial",
    category: "faciales",
    price: 30,
    duration: 30,
    description: "Protocolo de nutrición profunda con ácido hialurónico no reticulado que restaura la carnosidad del labio.",
    benefits: ["Elimina labios agrietados", "Aporta brillo y tono natural", "Efecto jugoso seductor"]
  }
];

interface Testimonial {
  name: string;
  rating: number;
  date: string;
  comment: string;
  servicesTag: "masajes" | "faciales";
  source: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Nani Ureña",
    rating: 5,
    date: "Hace 4 meses",
    comment: "María es una malagueña súper profesional y muy simpática. El masaje descontracturante ha sido un 10. Volveré sin dudarlo a probar sus tratamientos faciales. Súper recomendable. Saludos desde Almagro.",
    servicesTag: "masajes",
    source: "Google Maps"
  },
  {
    name: "María Vera",
    rating: 5,
    date: "Hace 4 meses",
    comment: "La experiencia ha sido maravillosa de principio a fin. El espacio estaba impecable, un ambiente de paz absoluto y con un masaje con diatermia que fue espectacular. Totalmente recomendable.",
    servicesTag: "masajes",
    source: "Google Maps"
  },
  {
    name: "Ana Millán Chico",
    rating: 5,
    date: "Hace 5 meses",
    comment: "Trato 10/10, es encantadora y te hace relajarte completamente. Me hice la limpieza facial con vitamina C y mi piel ha salido luminosa y renovada. Sin duda volveré a repetir.",
    servicesTag: "faciales",
    source: "Google Maps"
  },
  {
    name: "Isabel R.",
    rating: 5,
    date: "Hace 2 meses",
    comment: "He ido a darme un masaje de espalda y cuello y ha sido de otro mundo. María tiene unas manos increíbles y te hace sentir muy cómoda. La salita está impecable y huele a calma.",
    servicesTag: "masajes",
    source: "Google Maps"
  },
  {
    name: "Clara Sanz",
    rating: 5,
    date: "Hace 1 mes",
    comment: "María es un encanto de persona, simpática y súper profesional. He probado el tratamiento de exosomas y el laminado de cejas, el resultado es impecable y dura muchísimo.",
    servicesTag: "faciales",
    source: "Google Maps"
  }
];

export default function App() {
  // Navigation & Categorias
  const [activeCategory, setActiveCategory] = useState<"all" | "masajes" | "faciales">("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Quiz states
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    objective: "",
    stress: "",
    time: ""
  });
  const [quizRecommendation, setQuizRecommendation] = useState<Service | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceId: "ms-1",
    date: "",
    time: "",
    comments: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStepMessage, setFormStepMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  // Testimonials filter
  const [testimonialFilter, setTestimonialFilter] = useState<"all" | "masajes" | "faciales">("all");

  // FAQ state
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(null);

  // Address copy state
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Refs for navigation
  const bookingFormRef = useRef<HTMLDivElement>(null);
  const quizSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (targetRef: React.RefObject<HTMLDivElement | null>) => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredServices = activeCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const filteredTestimonials = testimonialFilter === "all"
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.servicesTag === testimonialFilter);

  // Quiz Recommendation logic
  const handleQuizAnswer = (key: "objective" | "stress" | "time", value: string) => {
    const updatedAnswers = { ...quizAnswers, [key]: value };
    setQuizAnswers(updatedAnswers);
    
    if (key === "objective") {
      setQuizStep(2);
    } else if (key === "stress") {
      setQuizStep(3);
    } else if (key === "time") {
      calculateQuizRecommendation(updatedAnswers);
      setQuizStep(4);
    }
  };

  const calculateQuizRecommendation = (answers: typeof quizAnswers) => {
    // Elegant filters matching provided prices & services
    let selected: Service = SERVICES_DATA[0]; // Default ms-1

    if (answers.objective === "muscular") {
      if (answers.time === "express") {
        selected = SERVICES_DATA.find(s => s.id === "ms-3") || SERVICES_DATA[2]; // Espalda y Cuello (30m)
      } else if (answers.time === "completo" && answers.stress === "alto") {
        selected = SERVICES_DATA.find(s => s.id === "ms-5") || SERVICES_DATA[4]; // Diatermia (60m)
      } else {
        selected = SERVICES_DATA.find(s => s.id === "ms-1") || SERVICES_DATA[0]; // Masaje Relajante Descontracturante (60m)
      }
    } else if (answers.objective === "piel") {
      if (answers.time === "express") {
        selected = SERVICES_DATA.find(s => s.id === "fc-13") || SERVICES_DATA[12]; // Hidralips
      } else if (answers.stress === "alto") {
        selected = SERVICES_DATA.find(s => s.id === "fc-3") || SERVICES_DATA[9]; // Exosomas
      } else {
        selected = SERVICES_DATA.find(s => s.id === "fc-2") || SERVICES_DATA[8]; // Limpieza + Vit C
      }
    } else if (answers.objective === "mirada") {
      selected = SERVICES_DATA.find(s => s.id === "fc-6") || SERVICES_DATA[11]; // Lifting pestañas
    } else if (answers.objective === "firmeza") {
      selected = SERVICES_DATA.find(s => s.id === "fc-4") || SERVICES_DATA[10]; // Hilos tensores
    }

    setQuizRecommendation(selected);
  };

  const resetQuiz = () => {
    setQuizAnswers({ objective: "", stress: "", time: "" });
    setQuizStep(1);
    setQuizRecommendation(null);
  };

  const applyQuizRecommendationToForm = () => {
    if (quizRecommendation) {
      setFormData(prev => ({
        ...prev,
        serviceId: quizRecommendation.id
      }));
      scrollToSection(bookingFormRef);
    }
  };

  // Check form inputs
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Por favor, introduce tu nombre completo.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "El número telefónico es indispensable.";
    } else if (!/^[0-9+ ]{9,13}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Introduce un número móvil válido (ej: 652843613).";
    }
    if (!formData.date) {
      errors.date = "Por favor, selecciona un día sugerido.";
    }
    if (!formData.time) {
      errors.time = "Selecciona tu preferencia horaria diaria.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const remaining = { ...prev };
        delete remaining[name];
        return remaining;
      });
    }
  };

  const handleSelectService = (id: string) => {
    setFormData(prev => ({ ...prev, serviceId: id }));
    scrollToSection(bookingFormRef);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormSubmitting(true);
    setFormStepMessage("Filtrando disponibilidad en agenda...");
    
    setTimeout(() => {
      setFormStepMessage("Estableciendo conexión prioritaria...");
      
      setTimeout(() => {
        const selected = SERVICES_DATA.find(s => s.id === formData.serviceId);
        setBookingDetails({
          ...formData,
          serviceName: selected ? selected.name : "Servicio Elegido",
          price: selected ? selected.price : 45
        });
        setFormSubmitting(false);
        setFormSuccess(true);
      }, 800);
    }, 800);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Calle Libertad 8, Ciudad Real");
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const generateWhatsAppLink = () => {
    if (!bookingDetails) return "";
    const text = `¡Hola María! He completado una pre-reserva en tu web:\n\n` +
      `- *Nombre:* ${bookingDetails.name}\n` +
      `- *Servicio:* ${bookingDetails.serviceName}\n` +
      `- *Fecha:* ${bookingDetails.date}\n` +
      `- *Preferencia Horaria:* ${bookingDetails.time}\n` +
      `- *Móvil:* ${bookingDetails.phone}\n` +
      (bookingDetails.comments ? `- *Notas:* ${bookingDetails.comments}\n` : "") + 
      `\n¿Tienes disponibilidad para este día? ¡Muchas gracias!`;
    return `https://wa.me/34652843613?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark overflow-x-hidden font-sans selection:bg-brand-rose selection:text-brand-dark pb-24 md:pb-0">
      
      {/* FLOATING SPATIAL BUTTERFLIES */}
      <FloatingButterflies />

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-rose/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-1 group">
            <BrandLogo />
          </a>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#services" className="text-stone-600 hover:text-brand-dark transition-colors">Servicios</a>
            <a href="#about" className="text-stone-600 hover:text-brand-dark transition-colors">La Experiencia</a>
            <a href="#testimonials" className="text-stone-600 hover:text-brand-dark transition-colors">Opiniones</a>
            <a href="#diagnostic" className="text-stone-600 hover:text-brand-dark transition-colors">Recomendador</a>
            <a href="#faq" className="text-stone-600 hover:text-brand-dark transition-colors">Dudas</a>
          </nav>

          {/* CTA & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:652843613" 
              className="flex items-center gap-1.5 text-xs font-bold text-brand-dark bg-brand-rose-light border border-brand-rose px-4 py-2.5 rounded-full hover:bg-brand-rose transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>652 84 36 13</span>
            </a>
            <button 
              onClick={() => scrollToSection(bookingFormRef)}
              className="bg-brand-dark text-white hover:bg-brand-rose-dark hover:text-brand-dark text-[10px] tracking-widest uppercase font-bold px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              Cita Previa
            </button>
          </div>

          {/* Mobile responsive buttons with 48px target compliance */}
          <div className="flex items-center gap-2 md:hidden">
            <a 
              href="https://wa.me/34652843613" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 rounded-full bg-brand-rose-light text-brand-dark hover:bg-brand-rose transition-all cursor-pointer flex items-center justify-center"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu bottom drawer sheet (highly modern slide-up, thumb-friendly design) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backing Dim Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-brand-dark/50 backdrop-blur-xs z-50 md:hidden"
              />
              
              {/* Slide up panel */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-brand-bg rounded-t-[2.5rem] border-t border-brand-rose shadow-2xl z-50 overflow-y-auto pb-10 md:hidden"
              >
                {/* Visual drag indicator */}
                <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto my-4 pointer-events-none" />
                
                <div className="px-6 py-2 flex items-center justify-between border-b border-brand-rose/25 pb-4">
                  <span className="font-display text-xl font-bold text-brand-dark">María Ruz Beauty</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-12 h-12 rounded-full bg-brand-rose-light text-brand-dark hover:bg-brand-rose transition-all flex items-center justify-center shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="px-6 py-4 flex flex-col gap-1 text-sm font-semibold uppercase tracking-wider text-stone-750">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-stone-100 flex items-center justify-between">
                    <span>Catálogo de Alta Estética</span>
                    <ArrowRight className="w-4 h-4 text-brand-rose-dark" />
                  </a>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-stone-100 flex items-center justify-between">
                    <span>Sobre María Ruz</span>
                    <ArrowRight className="w-4 h-4 text-brand-rose-dark" />
                  </a>
                  <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-stone-100 flex items-center justify-between">
                    <span>Valoraciones</span>
                    <ArrowRight className="w-4 h-4 text-brand-rose-dark" />
                  </a>
                  <a href="#diagnostic" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-stone-100 flex items-center justify-between">
                    <span>Test Digital de Belleza</span>
                    <ArrowRight className="w-4 h-4 text-brand-rose-dark" />
                  </a>
                  <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-4 flex items-center justify-between">
                    <span>Preguntas Frecuentes</span>
                    <ArrowRight className="w-4 h-4 text-brand-rose-dark" />
                  </a>
                  
                  <div className="flex flex-col gap-3.5 pt-6 border-t border-brand-rose/30 mt-4">
                    <a 
                      href="tel:652843613" 
                      className="flex items-center justify-center gap-2.5 h-12 bg-brand-rose-light text-brand-dark rounded-xl font-bold border border-brand-rose active:scale-97 transition-transform"
                    >
                      <Phone className="w-4 h-4 text-brand-gold" />
                      Llamar al 652 84 36 13
                    </a>
                    <button 
                      onClick={() => { setMobileMenuOpen(false); scrollToSection(bookingFormRef); }}
                      className="h-12 bg-brand-dark text-white rounded-xl font-bold uppercase text-xs tracking-widest text-center cursor-pointer hover:bg-brand-rose-dark active:scale-97 transition-all animate-shine"
                    >
                      Reservar Cita Ahora
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Wrapper for Strict Accessibility and SEO Hierarchy */}
      <main id="main-content" className="flex-1">

      {/* HERO HERO SECTION */}
      <section className="relative pt-8 pb-16 md:py-24 overflow-hidden">
        {/* Abstract Glowing Rose/Gold backdrop layout circles representing luxury look */}
        <div className="absolute top-0 right-[-10%] w-[450px] h-[450px] bg-brand-rose/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-[-15%] w-[350px] h-[350px] bg-brand-gold-light/40 rounded-full filter blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Col */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              
              {/* Star Trust badge */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 self-center lg:self-start bg-brand-rose/30 px-4.5 py-1.5 rounded-full border border-brand-rose-dark/30">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-brand-dark">5.0 Impecable</span>
                <span className="text-[10px] text-stone-500 font-medium">en Google Maps (71 opiniones)</span>
              </div>

              {/* Title with painted brush stroke style */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-brand-dark font-light leading-none">
                La alta estética que<br />
                <span className="font-semibold block mt-1 relative inline-block">
                  {/* Subtle highlight wrapper */}
                  <span className="relative z-10 text-gradient-charcoal">mima tu bienestar natural.</span>
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-brand-rose/40 -z-10 rounded-full filter blur-[1px]"></span>
                </span>
              </h1>

              <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Encuentra tu santuario en Ciudad Real. Un espacio diseñado por la calidez y simpatía de <strong className="font-semibold text-brand-dark">María Ruz</strong>, especialista en quiromasajes sensoriales profundos, tratamientos faciales no invasivos de máxima regeneración y un cuidado incondicional 1 a 1.
              </p>

              {/* Action buttons CRO optimized */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
                <button 
                  onClick={() => scrollToSection(bookingFormRef)}
                  className="w-full sm:w-auto bg-brand-dark hover:bg-brand-rose-dark hover:text-brand-dark text-white rounded-full font-bold px-8 py-4.5 uppercase text-xs tracking-widest shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Reservar Tratamiento</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </button>
                
                <button 
                  onClick={() => scrollToSection(quizSectionRef)}
                  className="w-full sm:w-auto bg-white hover:bg-stone-50 text-brand-dark border border-brand-rose-dark/45 rounded-full font-bold px-6 py-4.5 text-xs tracking-widest uppercase shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span>¿Qué tratamiento necesito?</span>
                </button>
              </div>

              {/* Safe guarantees bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-rose/40 max-w-lg mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Cita Individual</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-light block mt-0.5">Atención sin esperas</span>
                </div>
                
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Higiene Estricta</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-light block mt-0.5">Salón esterilizado</span>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-dark">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Cercanía Real</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-light block mt-0.5">Andaluza Colegiada</span>
                </div>
              </div>
            </div>

            {/* Right Graphics Badge Col */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              
              {/* Outer gold starry frame matching logo style */}
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-tr from-brand-dark to-brand-gold rounded-[2.5rem] p-[3px] shadow-2xl">
                
                {/* Embedded luxury design container with premium scale */}
                <div className="w-full h-full bg-[#FCFAF9]/95 rounded-[2.4rem] p-7 flex flex-col justify-between relative overflow-hidden shadow-inner">
                  
                  {/* Luxury semi-transparent spa background image */}
                  <img
                    src="./assets/images/spa_treatment_bg_1780762324001.png"
                    alt="Servicios de estética avanzada María Ruz"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle vector grid */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:20px_20px] z-10"></div>

                  {/* Top content */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="bg-brand-rose/20 text-brand-rose-dark text-[9px] tracking-widest font-bold uppercase py-1 px-3 rounded-full border border-brand-rose backdrop-blur-xs">
                      María Ruz Beauty
                    </div>
                    <div className="flex text-brand-gold"><Sparkles className="w-4 h-4 animate-pulse" /></div>
                  </div>

                  {/* Central design element (Starry circle frame graphic) */}
                  <div className="my-6 relative flex flex-col items-center justify-center flex-1 z-10">
                    <div className="absolute w-44 h-44 rounded-full border border-dashed border-brand-gold/45 animate-spin-slow"></div>
                    <div className="absolute w-36 h-36 rounded-full bg-brand-rose/20 flex flex-col justify-center items-center text-center p-4 backdrop-blur-xs">
                      
                      {/* Abstract butterfly center icon */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-brand-rose-dark mb-1 opacity-80">
                        <path d="M12,10C11.3,9.1 9.5,7.2 7,7.2C4.1,7.2 2,9.3 2,12.2C2,15.7 5.7,19.2 12,22C18.3,19.2 22,15.7 22,12.2C22,9.3 19.9,7.2 17,7.2C14.5,7.2 12.7,9.1 12,10Z" />
                      </svg>
                      
                      <span className="text-[10px] tracking-widest font-bold text-brand-dark uppercase">Tratamiento Estrella</span>
                      <span className="text-xs font-serif italic text-stone-500 mt-0.5">Masaje + Diatermia</span>
                    </div>
                  </div>

                  {/* Highlights listing */}
                  <div className="flex flex-col gap-2.5 relative z-10">
                    <div className="bg-white/95 p-3 rounded-2xl border border-brand-rose/30 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="bg-brand-gold-light text-brand-gold p-1.5 rounded-xl border border-brand-gold/20">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wide">Cosmética Certificada</p>
                          <p className="text-xs font-bold text-brand-dark">Fórmulas orgánicas 100% puras</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/95 p-3 rounded-2xl border border-brand-rose/30 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="bg-brand-rose-light text-brand-rose-dark p-1.5 rounded-xl border border-brand-rose/20">
                          <Smile className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wide">Trato Personalizado</p>
                          <p className="text-xs font-bold text-brand-dark">María se dedica entero a tu confort</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE BIENESTAR QUIZ / rekomendator */}
      <section id="diagnostic" ref={quizSectionRef} className="py-16 md:py-24 bg-brand-rose-light border-y border-brand-rose/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3 mb-10">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Diagnóstico Digital Exclusivo</span>
            <h2 className="text-3xl sm:text-4.5xl font-light text-brand-dark">¿Qué necesita tu cuerpo hoy?</h2>
            <p className="text-stone-600 text-xs sm:text-sm font-light">
              Responde 3 preguntas rápidas en 15 segundos y adivina el tratamiento ideal para tus necesidades actuales. Podrás precargar la recomendación en tu reserva al instante.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-rose/40 relative overflow-hidden max-w-2xl mx-auto">
            
            {/* Step indicators */}
            <div className="flex items-center justify-between gap-1 max-w-xs mx-auto mb-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center gap-1 flex-1 last:flex-none">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    quizStep === num 
                      ? "bg-brand-dark text-white shadow-md" 
                      : quizStep > num 
                        ? "bg-brand-rose text-brand-dark" 
                        : "bg-stone-100 text-stone-400"
                  }`}>
                    {num === 4 ? "✨" : `0${num}`}
                  </div>
                  {num < 4 && <div className={`h-0.5 flex-1 transition-all ${quizStep > num ? "bg-brand-dark" : "bg-stone-200"}`}></div>}
                </div>
              ))}
            </div>

            {/* Quiz Step contents */}
            <AnimatePresence mode="wait">
              {quizStep === 1 && (
                <motion.div 
                  key="step-1"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-lg sm:text-xl text-center text-brand-dark font-semibold">1. ¿Qué objetivo te gustaría prioritariamente alcanzar hoy?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <button 
                      onClick={() => handleQuizAnswer("objective", "muscular")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left transition-all group cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-xl">💆🏼‍♀️</span>
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-brand-dark">Aliviar dolores musculares</p>
                        <p className="text-[10px] text-stone-500">Contracturas de cuello, lumbar o piernas</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleQuizAnswer("objective", "piel")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left transition-all group cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-xl">✨</span>
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-brand-dark">Luminosidad y cuidado facial</p>
                        <p className="text-[10px] text-stone-500">Limpieza facial, acné o luminosidad</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleQuizAnswer("objective", "firmeza")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left transition-all group cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-xl">💎</span>
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-brand-dark">Firmeza y efecto tensor</p>
                        <p className="text-[10px] text-stone-500">Reducir flacidez facial o arrugas</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleQuizAnswer("objective", "mirada")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left transition-all group cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-xl">👁️</span>
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-brand-dark">Definición de pestañas y cejas</p>
                        <p className="text-[10px] text-stone-500">Lifting o laminado de cejas</p>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {quizStep === 2 && (
                <motion.div 
                  key="step-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-lg sm:text-xl text-center text-brand-dark font-semibold">2. ¿Cómo describirías tu nivel de tensión corporal recurrente?</h3>
                  <div className="grid grid-cols-1 gap-2.5 mt-2">
                    <button 
                      onClick={() => handleQuizAnswer("stress", "bajo")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left flex justify-between items-center group cursor-pointer text-xs sm:text-sm"
                    >
                      <span className="font-bold">Leve ("Busco un descanso placentero y mimo")</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => handleQuizAnswer("stress", "moderado")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left flex justify-between items-center group cursor-pointer text-xs sm:text-sm"
                    >
                      <span className="font-bold">Moderada ("Tengo fatiga mental y nudos en hombros")</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => handleQuizAnswer("stress", "alto")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-4 rounded-xl text-left flex justify-between items-center group cursor-pointer text-xs sm:text-sm"
                    >
                      <span className="font-bold">Alta ("Dolores persistentes o contracturas severas")</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <button onClick={() => setQuizStep(1)} className="text-[10px] text-stone-400 hover:text-brand-dark transition-colors underline font-medium self-start mt-2">
                    « Volver anterior
                  </button>
                </motion.div>
              )}

              {quizStep === 3 && (
                <motion.div 
                  key="step-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-lg sm:text-xl text-center text-brand-dark font-semibold">3. ¿De cuánto tiempo dispones libre para tu sesión?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                    <button 
                      onClick={() => handleQuizAnswer("time", "express")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-5 rounded-xl text-center group cursor-pointer transition-all"
                    >
                      <span className="text-2xl block mb-1">⏱️</span>
                      <p className="font-bold text-xs sm:text-sm">Rápido</p>
                      <p className="text-[11px] text-brand-gold font-bold mt-0.5">Menos de 30 min</p>
                    </button>

                    <button 
                      onClick={() => handleQuizAnswer("time", "completo")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-5 rounded-xl text-center group cursor-pointer transition-all"
                    >
                      <span className="text-2xl block mb-1">🧘</span>
                      <p className="font-bold text-xs sm:text-sm">Estándar</p>
                      <p className="text-[11px] text-brand-gold font-bold mt-0.5">30 a 50 min</p>
                    </button>

                    <button 
                      onClick={() => handleQuizAnswer("time", "luxury")}
                      className="border border-stone-200 hover:border-brand-rose-dark bg-stone-50/50 hover:bg-brand-rose-light/50 p-5 rounded-xl text-center group cursor-pointer transition-all"
                    >
                      <span className="text-2xl block mb-1">👑</span>
                      <p className="font-bold text-xs sm:text-sm">Completo</p>
                      <p className="text-[11px] text-brand-gold font-bold mt-0.5">60 min o más</p>
                    </button>
                  </div>

                  <button onClick={() => setQuizStep(2)} className="text-[10px] text-stone-400 hover:text-brand-dark transition-colors underline font-medium self-start mt-2">
                    « Volver anterior
                  </button>
                </motion.div>
              )}

              {quizStep === 4 && quizRecommendation && (
                <motion.div 
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-5 text-left"
                >
                  <div className="bg-emerald-50 text-emerald-800 p-4.5 rounded-xl border border-emerald-100 flex items-start gap-2.5">
                    <span className="text-sm">✓ Recurso Ideal Estimado</span>
                    <div>
                      <p className="text-xs font-bold font-sans">¡Análisis finalizado!</p>
                      <p className="text-[11px] text-stone-600 mt-0.5">Este servicio encaja de manera perfecta con tus metas y disponibilidad:</p>
                    </div>
                  </div>

                  {/* Recommendation Card */}
                  <div className="border border-brand-rose-dark/30 bg-brand-rose-light/20 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[9px] tracking-widest font-extrabold text-brand-gold uppercase block">Tratamiento Recomendado</span>
                      <h4 className="text-xl font-bold font-display text-brand-dark mt-1 leading-snug">{quizRecommendation.name}</h4>
                      <p className="text-stone-500 text-xs mt-1.5 leading-relaxed max-w-sm">{quizRecommendation.description}</p>
                      <div className="flex gap-4 mt-2.5">
                        <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-brand-gold" /> {quizRecommendation.duration} mins
                        </span>
                        <span className="text-[11px] text-emerald-600 font-semibold border-l pl-3 border-stone-200">
                          Máximo Cuidado
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-stone-100">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] text-stone-400 block">Precio Neto</span>
                        <span className="text-2xl font-serif text-brand-dark font-bold">{quizRecommendation.price},00 €</span>
                      </div>
                      
                      <button 
                        onClick={applyQuizRecommendationToForm}
                        className="bg-brand-dark text-white hover:bg-brand-rose text-xs tracking-wider font-bold rounded-full px-5 py-2.5 uppercase shadow-md cursor-pointer transition-all hover:scale-105 mt-2"
                      >
                        Agendar Cita
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center mt-2.5">
                    <button 
                      onClick={resetQuiz}
                      className="text-stone-500 hover:text-brand-dark text-xs flex items-center gap-1.5 font-bold transition-all"
                    >
                      <RefreshCw className="w-3 h-3 text-brand-gold" />
                      <span>Volver a empezar el análisis</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* COMPACT DETAILED SERVICES CATALOGUE */}
      <section id="services" ref={servicesSectionRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3.5 mb-12">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Protocolos Exclusivos</span>
            <h2 className="text-3.5xl sm:text-4.5xl font-light text-brand-dark">Catálogo de Salud & Bienestar</h2>
            <p className="text-stone-600 text-xs sm:text-sm font-light">
              Explora una gama de masajes y tratamientos faciales holísticos, libres de parabenos y tóxicos, creados artesanalmente para proporcionarte un cambio visible e interior duradero.
            </p>
          </div>

          {/* Filtering tabs with 48px click target compliance */}
          <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
            {[
              { id: "all", label: "Todos los servicios" },
              { id: "masajes", label: "Quiromasajes 💆‍♀️" },
              { id: "faciales", label: "Tratamientos Faciales ✨" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-6 py-3.5 h-12 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center ${
                  activeCategory === tab.id 
                    ? "bg-brand-dark text-white shadow-md border-brand-dark active:scale-97" 
                    : "bg-white hover:bg-brand-rose-light text-stone-600 border border-brand-rose active:scale-97"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pure Symmetric Balanced Grid (3 Columns on Desktop, 1 Column on Mobile) with generous gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-brand-rose/40 hover:border-brand-rose-dark rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden h-full min-h-[420px] focus-within:ring-2 focus-within:ring-brand-gold focus-within:outline-none"
                >
                  {service.isPopular && (
                    <span className="absolute top-4 right-4 bg-brand-gold-light/95 backdrop-blur-xs text-brand-gold text-[9px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-full border border-brand-gold/45 z-10">
                      Recomendado
                    </span>
                  )}

                  <div className="flex flex-col gap-2.5">
                    <span className="text-[9px] tracking-widest font-extrabold uppercase text-brand-gold">
                      {service.category === "masajes" ? "Quiromasajes" : "Estética Facial"}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark font-display pr-12 group-hover:text-brand-rose-dark transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-stone-600 text-xs mt-1.5 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-stone-100 my-2">
                      <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider mb-2 block">Puntos del Protocolo:</span>
                      <ul className="flex flex-col gap-1.5">
                        {service.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="flex gap-2 items-start text-xs text-stone-705 font-light">
                            <span className="text-brand-rose-dark font-bold inline-block w-1.5 h-1.5 rounded-full bg-brand-rose-dark mt-1.5 shrink-0" aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and 48px Reservar CTA Trigger button */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-100">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" aria-hidden="true" />
                        <span>{service.duration} mins</span>
                      </div>
                      <span className="text-2xl font-serif font-bold text-brand-dark block mt-0.5">
                        {service.price},00 €
                      </span>
                    </div>

                    <button
                      onClick={() => handleSelectService(service.id)}
                      className="h-12 px-6 bg-brand-rose/20 hover:bg-brand-dark text-brand-dark hover:text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center active:scale-95 animate-shine focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                      aria-label={`Reservar cita para ${service.name}`}
                    >
                      Reservar
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick doubts section under catalogue */}
          <div className="mt-12 bg-white p-5 rounded-2xl border border-brand-rose/40 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <span className="text-2.5xl shrink-0">🌸</span>
              <div>
                <p className="text-brand-dark font-bold text-sm">¿Sufres de alguna alergia o estás embarazada?</p>
                <p className="text-stone-500 text-xs font-light">María adecúa de manera perfecta los aceites naturales para que disfrutes con total seguridad.</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/34652843613"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 inline-flex items-center gap-2 shrink-0 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Dudas por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* LA EXPERIENCIA MARÍA RUZ */}
      <section id="about" className="py-16 md:py-24 bg-brand-rose-light/45 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Frame of the salon (left-ish) */}
            <div className="lg:col-span-5 relative order-last lg:order-first flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-white rounded-[2.5rem] p-5 shadow-xl border border-brand-rose flex flex-col justify-between">
                
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Un espacio acogedor</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-rose-dark animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl text-brand-dark leading-tight font-light font-display">
                    "Concibo cada encuentro como un ritual único de confort"
                  </h4>
                  <p className="text-stone-500 text-xs font-light leading-relaxed">
                    Ubicado en la Calle Libertad nº8 de Ciudad Real, nuestro salón está climatizado y perfumado delicadamente con esencias de maderas y flores para ayudarte a desconectar de verdad.
                  </p>
                </div>

                <div className="bg-brand-rose-light/50 p-4 rounded-2xl border border-brand-rose text-left flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-stone-500 font-extrabold uppercase">Estética Humana</p>
                    <p className="text-xs font-bold text-brand-dark mt-0.5">María Ruz Colegiada</p>
                  </div>
                  <span className="bg-white border border-brand-rose text-brand-rose-dark font-bold text-[10px] px-2.5 py-1 rounded-full">
                    Garantía 100%
                  </span>
                </div>

              </div>
            </div>

            {/* Typography Content Column right */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <span className="text-[10px] tracking-widest text-brand-gold font-bold uppercase self-center lg:self-start">Detrás de la camilla</span>
              
              <h2 className="text-3.5xl sm:text-4.5xl font-light text-brand-dark leading-snug">
                "Soy María Ruz, malagueña de corazón, dedicada entero a restaurar tu calma"
              </h2>

              <div className="text-stone-600 text-sm flex flex-col gap-4 leading-relaxed font-light">
                <p>
                  Mi pasión es acompañar a las personas en su búsqueda del bienestar integral. Mis manos combinan la calidez tan andaluza de mi tierra natal con la rigurosa precisión de las terapias manuales y corporales avanzadas.
                </p>
                <p>
                  En <strong className="font-semibold text-brand-dark">María Ruz Beauty</strong> no creemos en las prisas. No organizamos agendas caóticas ni dejamos esperando a nadie. Tras cada sesión, reservamos un margen holgado para desinfectar meticulosamente el salón, templar toallas egipcias limpias y adecuar la música que sonará para ti.
                </p>
                <p className="italic text-brand-dark border-l-4 border-brand-rose-dark pl-4.5 py-1 font-serif text-md mt-1">
                  "Un masaje no es solo presionar músculos; es devolver la energía al cuerpo y conceder un momento de sosiego mental absoluto en estos tiempos tan acelerados."
                </p>
              </div>

              {/* Badges of trust */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-rose/40">
                <div className="flex gap-3 text-left">
                  <div className="p-2.5 rounded-xl bg-brand-rose text-brand-rose-dark h-fit">
                    <Heart className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-xs uppercase tracking-wide">Amor por los mimos</h5>
                    <p className="text-[11px] text-stone-500 mt-1 leading-normal">Cercanía íntegra, simpatía y adaptabilidad incondicional al dolor o embarazo.</p>
                  </div>
                </div>

                <div className="flex gap-3 text-left">
                  <div className="p-2.5 rounded-xl bg-brand-rose text-brand-rose-dark h-fit">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-xs uppercase tracking-wide">Higiene certificada</h5>
                    <p className="text-[11px] text-stone-500 mt-1 leading-normal">Toallas lavadas a temperatura severa, cabezales limpios de uso único.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* REALS STAR TESTIMONIALS */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3.5 mb-10">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Reseñas de nuestros clientes</span>
            <h2 className="text-3.5xl sm:text-4.5xl font-light text-brand-dark">Con el aval de 71 valoraciones Cinco Estrellas</h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light">
              Lee las testimonios directos proporcionados por vecinos y visitantes que han disfrutado de un momento de belleza y reconexión en el centro.
            </p>
          </div>

          {/* Testimonial Filter Panel */}
          <div className="flex items-center justify-center gap-1.5 mb-8 flex-wrap">
            <button 
              onClick={() => setTestimonialFilter("all")}
              className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all ${
                testimonialFilter === "all" 
                  ? "bg-brand-dark text-white shadow" 
                  : "bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200"
              }`}
            >
              Todos los comentarios
            </button>
            <button 
              onClick={() => setTestimonialFilter("masajes")}
              className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all ${
                testimonialFilter === "masajes" 
                  ? "bg-brand-dark text-white shadow" 
                  : "bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200"
              }`}
            >
              Masajes 💆‍♀️
            </button>
            <button 
              onClick={() => setTestimonialFilter("faciales")}
              className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all ${
                testimonialFilter === "faciales" 
                  ? "bg-brand-dark text-white shadow" 
                  : "bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200"
              }`}
            >
              Tratamientos Faciales ✨
            </button>
          </div>

          {/* Comment cards auto-scrolling marquee */}
          <div className="relative w-full overflow-hidden mt-6">
            {/* Soft elegant vignette gradient fading on sides to maintain premium focus */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee flex gap-6 py-4">
              {[...filteredTestimonials, ...filteredTestimonials, ...filteredTestimonials].map((t, idx) => (
                <div
                  key={`${idx}-${t.name}`}
                  className="w-[310px] sm:w-[360px] shrink-0 bg-white/80 p-6 rounded-2xl border border-brand-rose flex flex-col justify-between shadow-xs backdrop-blur-xs select-none whitespace-normal"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-brand-rose text-brand-rose-dark font-sans font-bold text-xs flex items-center justify-center shrink-0">
                          {t.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-xs sm:text-sm text-brand-dark leading-none">{t.name}</p>
                          <span className="text-[10px] text-stone-400 mt-1 block">{t.date}</span>
                        </div>
                      </div>

                      <div className="flex text-brand-gold shrink-0">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-stone-650 text-xs sm:text-sm font-light italic leading-relaxed mt-2.5">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brand-rose/40 flex items-center justify-between text-[10px] text-stone-400">
                    <span className="font-bold uppercase tracking-wider text-brand-rose-dark">
                      {t.servicesTag}
                    </span>
                    <span className="font-semibold flex items-center gap-1">
                      Verificado • {t.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* COMPACT BOOKING FORM WIZARD */}
      <section id="booking-form" ref={bookingFormRef} className="py-16 md:py-24 relative overflow-hidden bg-brand-rose-light/50 border-y border-brand-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3.5 mb-10">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Solicitud Pre-Inscripción</span>
            <h2 className="text-3.5xl sm:text-4.5xl font-light text-brand-dark">Reserva tu momento de desconexión</h2>
            <p className="text-stone-600 text-xs sm:text-sm font-light">
              Rellena este breve formulario en 45 segundos. María recibirá tu solicitud de inmediato y te contactará por Bizum/WhatsApp para coordinarse y formalizar la cita.
            </p>
          </div>

          <div className="bg-brand-dark text-white rounded-[2.5rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-stone-800">
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <AnimatePresence mode="wait">
              {!formSuccess ? (
                <motion.form 
                  key="booking-card"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="text-xs uppercase tracking-wider text-brand-rose font-bold">
                        Nombre Completo *
                      </label>
                      <input 
                        id="form-name"
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="ej: Nani Ureña"
                        className={`bg-stone-900/90 border ${formErrors.name ? "border-rose-400" : "border-stone-800 focus:border-brand-rose"} rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all placeholder:text-stone-550`}
                        disabled={formSubmitting}
                      />
                      {formErrors.name && <span className="text-[10px] text-rose-400 mt-1">{formErrors.name}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-phone" className="text-xs uppercase tracking-wider text-brand-rose font-bold">
                        Móvil (WhatsApp indispensable) *
                      </label>
                      <input 
                        id="form-phone"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="ej: 652843613"
                        className={`bg-stone-900/90 border ${formErrors.phone ? "border-rose-400" : "border-stone-800 focus:border-brand-rose"} rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all placeholder:text-stone-550`}
                        disabled={formSubmitting}
                      />
                      {formErrors.phone && <span className="text-[10px] text-rose-400 mt-1">{formErrors.phone}</span>}
                    </div>

                    {/* Choose Service Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-service" className="text-xs uppercase tracking-wider text-brand-rose font-bold">
                        Tratamiento Deseado *
                      </label>
                      <select 
                        id="form-service"
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleFormChange}
                        className="bg-stone-900/90 border border-stone-800 focus:border-brand-rose rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all cursor-pointer"
                        disabled={formSubmitting}
                      >
                        {SERVICES_DATA.map((service) => (
                          <option key={service.id} value={service.id} className="bg-stone-900 text-stone-250 text-xs">
                            {service.name} — {service.price}€ ({service.duration} mins)
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-date" className="text-xs uppercase tracking-wider text-brand-rose font-bold">
                        Día Sugerido de Cita *
                      </label>
                      <input 
                        id="form-date"
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        className={`bg-stone-900/90 border ${formErrors.date ? "border-rose-400" : "border-stone-800 focus:border-brand-rose"} rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all cursor-pointer`}
                        disabled={formSubmitting}
                      />
                      {formErrors.date && <span className="text-[10px] text-rose-400 mt-1">{formErrors.date}</span>}
                    </div>

                    {/* Preference horary */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-time" className="text-xs uppercase tracking-wider text-brand-rose font-bold">
                        Preferencia Horaria *
                      </label>
                      <select 
                        id="form-time"
                        name="time"
                        value={formData.time}
                        onChange={handleFormChange}
                        className={`bg-stone-900/90 border ${formErrors.time ? "border-rose-400" : "border-stone-800 focus:border-brand-rose"} rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none transition-all cursor-pointer`}
                        disabled={formSubmitting}
                      >
                        <option value="">-- Selecciona hora pre-estimada --</option>
                        <option value="Mañanas (10:00 - 12:00)">Mañanas (10:00 - 12:00)</option>
                        <option value="Mediodía (12:00 - 14:00)">Mediodía (12:00 - 14:00)</option>
                        <option value="Tarde Temprana (16:00 - 18:30)">Tarde Temprana (16:00 - 18:30)</option>
                        <option value="Tarde Tarde (18:30 - 20:30)">Tarde Tarde (18:30 - 20:30)</option>
                      </select>
                      {formErrors.time && <span className="text-[10px] text-rose-400 mt-1">{formErrors.time}</span>}
                    </div>

                    {/* Specifications comments */}
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="comments-textarea" className="text-xs uppercase tracking-wider text-stone-400 font-bold">
                        ¿Alguna patología, dolor localizado o embarazo? (Opcional)
                      </label>
                      <textarea 
                        id="comments-textarea"
                        name="comments"
                        rows={3}
                        value={formData.comments}
                        onChange={handleFormChange}
                        placeholder="ej: Sufro dolor cervical persistente / Embarazo de 3 meses..."
                        className="bg-stone-900/90 border border-stone-800 focus:border-brand-rose rounded-xl px-4 py-3 text-xs text-white placeholder-stone-550 focus:outline-none transition-all"
                        disabled={formSubmitting}
                      ></textarea>
                    </div>

                  </div>

                  {/* Anti-spam RGPD info */}
                  <div className="flex items-start gap-3 bg-stone-950 p-4 rounded-xl border border-stone-850 mt-1">
                    <Lock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-[10px] text-stone-400 leading-relaxed">
                      El envío de este formulario cumple el RGPD. Tus datos únicamente se emplearán con el fin de tramitar tu cita previa con María, garantizando confidencialidad completa. No recibirás correos de spam.
                    </p>
                  </div>

                  {/* Submission and estimates */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-stone-800 mt-2">
                    <span className="text-[11px] text-stone-400 font-light">Se pagará directamente en el centro físico (Efectivo/Tarjeta/Bizum)</span>

                    <button 
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full sm:w-auto bg-brand-rose hover:bg-white text-brand-dark px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow transition-all cursor-pointer flex items-center justify-center gap-2.5 min-w-[210px]"
                    >
                      {formSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span className="text-[10px]">{formStepMessage}</span>
                        </>
                      ) : (
                        <>
                          <span>Pedir mi Cita</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* REDIRECTION CARD TO WHATSAPP */
                <motion.div 
                  key="form-success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-rose">
                      ¡Tu pre-reserva prioritaria se ha creado!
                    </h3>
                    <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
                      Hola <strong>{bookingDetails.name}</strong>, para confirmar el hueco exacto y evitar que otra persona agende a la misma hora, hemos redactado un mensaje pre-estructurado para María. Envíatelo con un simple clic a su WhatsApp oficial.
                    </p>
                  </div>

                  {/* Resume box */}
                  <div className="bg-stone-900 border border-stone-850 p-4 sm:p-5 rounded-2xl text-left w-full max-w-sm flex flex-col gap-2">
                    <p className="text-[9px] text-brand-gold font-bold uppercase border-b border-stone-800 pb-1.5">Datos sugeridos:</p>
                    <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[11px]">
                      <div>
                        <span className="text-stone-500">Tratamiento</span>
                        <p className="text-white font-medium">{bookingDetails.serviceName}</p>
                      </div>
                      <div>
                        <span className="text-stone-500">Precio Estimado</span>
                        <p className="text-white font-medium">{bookingDetails.price},00 €</p>
                      </div>
                      <div>
                        <span className="text-stone-500">Día Sugerido</span>
                        <p className="text-white font-medium">{bookingDetails.date}</p>
                      </div>
                      <div>
                        <span className="text-stone-500">Tramo Horario</span>
                        <p className="text-white font-medium">{bookingDetails.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-2">
                    <a 
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold px-8 py-4 uppercase text-xs tracking-widest shadow-lg flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-white text-emerald-600" />
                      <span>Enviar a María por WhatsApp</span>
                    </a>

                    <button 
                      onClick={() => setFormSuccess(false)}
                      className="text-stone-400 hover:text-white text-xs underline font-semibold py-2 cursor-pointer"
                    >
                      Editar formulario de reserva
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* LOCATION, HOUR & CONTACT SECTION */}
      <section id="location" className="py-16 bg-[#F4EFF0] border-t border-brand-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hour grid and directions info */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Un oasis al alcance</span>
              
              <h2 className="text-3.5xl sm:text-4.5xl font-light text-brand-dark leading-snug">
                ¿Dónde se encuentra María Ruz Beauty?
              </h2>

              <div className="space-y-4 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                <p>
                  Estamos situados en el corazón tranquilo de <strong>Ciudad Real</strong>, en la <strong className="font-semibold text-brand-dark">Calle Libertad, n.º 8 (13003)</strong>. Una localización de fácil acceso a pie y cómodo aparcamiento.
                </p>

                <div className="bg-white p-4.5 rounded-2xl border border-brand-rose shadow-xs flex flex-col gap-3 text-left">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-brand-rose-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] text-stone-400 font-extrabold uppercase">DIRECCIÓN FÍSICA</span>
                      <p className="text-xs sm:text-sm font-bold text-brand-dark mt-0.5">C/ Libertad nº8, Ciudad Real, España</p>
                    </div>
                  </div>

                  <div className="flex gap-2 border-t border-stone-100 pt-3">
                    <button 
                      onClick={handleCopyAddress}
                      className="bg-brand-rose-light hover:bg-brand-rose text-brand-dark text-[10px] font-bold py-2 px-3 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Clipboard className="w-3.5 h-3.5" />
                      <span>{copiedAddress ? "¡Copiaste dirección!" : "Copiar dirección"}</span>
                    </button>
                    <a 
                      href="https://maps.app.goo.gl/yYv331jQ76f7478393" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-gold-light hover:bg-brand-rose/20 text-brand-gold text-[10px] font-bold py-2 px-3 rounded-lg flex items-center gap-1"
                    >
                      <Map className="w-3.5 h-3.5 animate-pulse" />
                      <span>¿Cómo llegar?</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-left">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Horario semanal de mimos</h4>
                  <div className="grid grid-cols-2 gap-y-1.5 text-xs border-t border-brand-rose/30 pt-2 font-light">
                    <span>Lunes a Viernes</span>
                    <strong className="text-right text-brand-dark">10:00 - 14:00 y 16:00 - 20:30</strong>
                    <span>Sábados</span>
                    <strong className="text-right text-brand-dark">10:00 - 14:00 (Con cita previa)</strong>
                    <span>Domingos y Festivos</span>
                    <strong className="text-right text-stone-450 italic font-normal">Cerrado por descanso</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom vector map and logo imagery representing Ciudad Real */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-4.5 border border-brand-rose shadow-xl overflow-hidden flex flex-col gap-4">
                
                {/* Physical interactive Google Map integration */}
                <div className="relative w-full aspect-video sm:aspect-[16/9] bg-brand-rose-light/25 rounded-2xl overflow-hidden border border-brand-rose">
                  
                  <iframe
                    src="https://maps.google.com/maps?q=Calle%20Libertad%208,%20Ciudad%20Real&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de María Ruz Beauty en Ciudad Real"
                  ></iframe>

                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-brand-rose/30 flex items-center justify-between shadow pointer-events-auto">
                    <div>
                      <h4 className="text-xs font-bold text-brand-dark">María Ruz Beauty</h4>
                      <p className="text-[10px] text-brand-gold font-bold">C/ Libertad nº8 • Ciudad Real</p>
                      <p className="text-[9px] text-stone-450 mt-0.5">A escasos minutos del Parque de Gasset</p>
                    </div>

                    <a 
                      href="https://maps.app.goo.gl/yYv331jQ76f7478393"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-dark text-white p-2 rounded-full hover:bg-brand-rose hover:text-brand-dark transition-all"
                      aria-label="Abrir dirección en Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>

                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-3">
                  <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-brand-rose-dark fill-current" /> Entorno acogedor adaptado para máxima relajación</span>
                  <a 
                    href="https://instagram.com/masajesruz_beauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-dark hover:text-brand-rose-dark font-bold inline-flex items-center gap-1 transition-all"
                  >
                    <Instagram className="w-4 h-4 text-brand-gold" />
                    <span>Síguenos en @masajesruz_beauty</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section id="faq" className="py-16 md:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3.5 mb-12">
          <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Dudas resueltas</span>
          <h2 className="text-3.5xl sm:text-4.5xl font-light text-brand-dark">Preguntas Frecuentes</h2>
          <p className="text-stone-550 text-xs sm:text-sm font-light">
            Resuelve cualquier duda sobre nuestros masajes terapéuticos o tratamientos de alta cosmética antes de tu visita.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "💳 ¿Cómo puedo abonar el importe de mi sesión?",
              a: "Puedes pagar de la forma que te resulte más cómoda al finalizar el tratamiento en el centro: aceptamos efectivo, Bizum instantáneo, o tarjeta de débito/crédito (Visa, Mastercard, etc.)."
            },
            {
              q: "💆🏼‍♀️ Diferencia entre un quiromasaje de María y una estética común",
              a: "Un quiromasaje se enfoca en técnicas de manipulación muscular precisas para descontracturar, reactivar la circulación linfática y disipar nudos de tensión, con una dedicación artesanal 1 a 1 y sin prisas."
            },
            {
              q: "🤰 ¿Son seguros vuestros tratamientos si estoy en período de embarazo?",
              a: "Totalmente. Muchos tratamientos corporales (como el masaje drenante de piernas cansadas) y faciales neutros son sumamente idóneos. Indícalo en la reserva para que María reajuste los aceites puros utilizados."
            },
            {
              q: "🚗 ¿Hay facilidad para aparcar el coche cerca de la Calle Libertad?",
              a: "Sí. En las inmediaciones de la Calle Libertad nº8 de Ciudad Real se encuentran zonas blancas de aparcamiento totalmente gratuitas, por ejemplo frente al Parque de Gasset que se ubica a apenas un par de minutos a pie."
            }
          ].map((faq, fIdx) => (
            <div key={fIdx} className="bg-white border border-brand-rose rounded-2xl overflow-hidden transition-all shadow-3xs">
              <button
                onClick={() => setFaqOpenIdx(faqOpenIdx === fIdx ? null : fIdx)}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-brand-dark cursor-pointer focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform shrink-0 ${faqOpenIdx === fIdx ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {faqOpenIdx === fIdx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-brand-rose-light"
                  >
                    <div className="px-6 py-4 text-xs sm:text-sm text-stone-550 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      </main>

      {/* LUXURY FOOTER */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Identity column */}
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-serif font-bold text-white tracking-widest">MARÍA RUZ</span>
              <p className="text-stone-400 text-xs font-light leading-relaxed">
                Salón premium en Ciudad Real especializado en quiromasajes de alta intensidad corporal, drenajes, y estética facial avanzada no invasiva. Tu salud natural en el mejor entorno.
              </p>
              
              <div className="flex gap-3 pt-1">
                <a 
                  href="https://instagram.com/masajesruz_beauty" 
                  aria-label="Instagram de María"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-750 hover:border-brand-rose rounded-full text-stone-400 hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick links columns */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-rose mb-4">Navegación</h4>
              <ul className="flex flex-col gap-2.5 text-stone-400 text-xs font-light">
                <li><a href="#services" className="hover:text-white transition-all">Nuestros Servicios</a></li>
                <li><a href="#about" className="hover:text-white transition-all">La Experiencia Santuario</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-all">Opiniones Reales</a></li>
                <li><a href="#diagnostic" className="hover:text-white transition-all">Asistente de Bienestar</a></li>
              </ul>
            </div>

            {/* Contact details columnar */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-rose mb-4">Información de Contacto</h4>
              <ul className="flex flex-col gap-2.5 text-stone-400 text-xs font-light">
                <li className="flex gap-2 items-center">
                  <Phone className="w-3.5 h-3.5 text-brand-rose" />
                  <a href="tel:652843613" className="hover:text-white">652 84 36 13</a>
                </li>
                <li className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 text-brand-rose shrink-0" />
                  <span>C/ Libertad nº8, 13003 Ciudad Real</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Certificado Amigable LGBTQ+</span>
                </li>
              </ul>
            </div>

            {/* Security stamp badge */}
            <div className="bg-stone-900 border border-stone-800 p-4.5 rounded-2xl h-fit flex flex-col gap-2.5">
              <span className="text-[10px] text-stone-400 font-extrabold uppercase">Confidencialidad</span>
              <p className="text-[11px] text-stone-400 leading-normal font-light">
                Solicitud de citas directas sin requerir depósitos previos con tarjeta. Datos personales protegidos bajo los protocolos SSL.
              </p>
              <div className="flex gap-1.5 items-center text-[10px] text-brand-rose font-bold pt-1.5 border-t border-stone-850">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-rose" />
                <span>Cita Previa Protegida</span>
              </div>
            </div>

          </div>

          <div className="border-t border-stone-850 pt-8 flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-xs text-stone-500 font-light">
            <p>© {new Date().getFullYear()} María Ruz Beauty. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">Aviso Legal</span>
              <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION NAV BAR AT BOTTOM FOR MOBILE (THUMB-CENTRIC DESIGN - 48px target compliant) */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex gap-2 items-center justify-between bg-white/80 backdrop-blur-lg px-3 sm:px-4 py-2.5 rounded-2xl border border-brand-rose/60 shadow-xl">
        <div className="flex flex-col pl-1 select-none">
          <span className="font-display text-xs font-bold tracking-wider text-brand-dark uppercase">María Ruz</span>
          <span className="text-[9px] text-brand-gold font-bold uppercase tracking-widest leading-none mt-0.5">Estética</span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* WhatsApp Icon - 48px target */}
          <a
            href="https://wa.me/34652843613"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current opacity-85" />
          </a>
          
          {/* Telephone quick dial - 48px target */}
          <a
            href="tel:652843613"
            className="w-12 h-12 rounded-xl bg-brand-rose-light text-brand-dark border border-brand-rose flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Llamar"
          >
            <Phone className="w-5 h-5 text-brand-gold" />
          </a>

          {/* Quick Reserve CTA - 48px target */}
          <button
            onClick={() => scrollToSection(bookingFormRef)}
            className="h-12 px-5 bg-brand-dark hover:bg-brand-rose-dark hover:text-brand-dark text-white rounded-xl text-xs tracking-wider uppercase font-bold text-center flex items-center justify-center active:scale-95 transition-all shadow-md animate-shine cursor-pointer"
          >
            Cita Previa
          </button>
        </div>
      </div>

    </div>
  );
}
