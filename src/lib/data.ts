import { Star, Users, DollarSign } from "lucide-react";

export interface SupportTier {
  title: string;
  price: number;
  benefits: string[];
  icon: React.ComponentType;
  featured?: boolean;
}

export const supportTiers: SupportTier[] = [
  {
    title: "Acceso Básico",
    price: 5,
    benefits: [
      "Acceso a la app por 1 año",
      "Alertas de actividad de ICE en tiempo real",
      "Apoyo comunitario",
    ],
    icon: Star,
  },
  {
    title: "Miembro de por Vida",
    price: 10,
    benefits: [
      "Acceso a la app de por vida",
      "Alertas de actividad de ICE en tiempo real",
      "Notificaciones prioritarias",
      "Funciones avanzadas de reportes",
    ],
    icon: Users,
    featured: true,
  },
  {
    title: "Acceso Administrativo",
    price: 50,
    benefits: [
      "Todos los beneficios anteriores",
      "Acceso directo a desarrolladores",
      "Panel de control administrativo",
      "Privilegios de aprobación de alertas",
      "1 publicación comercial semanal en tu área (1 año)",
    ],
    icon: DollarSign,
  },
];

export const impactStats = [
  {
    number: "15+ millones",
    description: "de inmigrantes indocumentados viven con miedo",
  },
  { 
    number: "287,741", 
    description: "deportaciones en 2023" 
  },
  { 
    number: "2,176", 
    description: "niños separados de sus padres" 
  },
];