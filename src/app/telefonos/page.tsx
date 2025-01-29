import React from "react";
import {
  Phone,
  AlertTriangle,
  Globe,
  Shield,
  Heart,
  MapPin,
  FileText,
  Users,
  BookOpen,
  Briefcase,
  Info,
  Gavel,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import Link from "next/link";

const EmergencyContactsPage = () => {
  const emergencyContacts = [
    {
      title: "Immigrant Defense Project",
      phone: "1-212-725-6422",
      description: "Apoyo legal y recursos para inmigrantes",
      icon: Shield,
      link: "https://www.immigrantdefenseproject.org/",
    },
    {
      title: "Freedom for Immigrants",
      phone: "1-209-757-3733",
      description:
        "Denunciar abusos y obtener recursos legales si estás detenido",
      icon: Heart,
      link: "https://www.freedomforimmigrants.org/",
    },
    {
      title: "Freedom for Immigrants",
      phone: "1-209-757-3733",
      description:
        "Denunciar abusos y obtener recursos legales si estás detenido.",
      icon: Heart,
      link: "https://www.freedomforimmigrants.org/",
    },
    {
      title:
        "RAICES – Refugee and Immigrant Center for Education and Legal Services",
      phone: "1-800-898-7180",
      description:
        "Ayuda legal gratuita para personas detenidas o en riesgo de deportación.",
      icon: Gavel,
      link: "https://www.raicestexas.org/",
    },
    {
      title: "American Bar Association (ABA) – Free Legal Answers",
      phone: null,
      description: "Plataforma para obtener asesoría legal básica gratuita.",
      icon: FileText,
      link: "https://abafederal.freelegalanswers.org/",
    },
    {
      title: "Detention Reporting and Information Line (DRIL) – ICE",
      phone: "1-888-351-4024",
      description: "Informar abusos y obtener información sobre detenciones.",
      icon: AlertTriangle,
      link: "https://www.ice.gov/contact/detention-information-line",
    },
    {
      title: "Church World Service Resource Call Center",
      phone: "1-800-375-1433",
      description: "Asistencia con referencias legales, refugio y apoyo local.",
      icon: Users,
      link: "https://cwsglobal.org/",
    },
    {
      title: "EOIR List of Pro Bono Legal Service Providers",
      phone: null,
      description:
        "Directorio de abogados que ofrecen servicios legales gratuitos.",
      icon: BookOpen,
      link: "https://www.justice.gov/eoir/list-pro-bono-legal-service-providers",
    },
    {
      title: "Immigration Advocates Network – Legal Services Directory",
      phone: null,
      description: "Directorio de organizaciones legales sin fines de lucro.",
      icon: MapPin,
      link: "https://www.immigrationadvocates.org/nonprofit/legaldirectory/",
    },
    {
      title: "American Immigration Lawyers Association (AILA)",
      phone: null,
      description:
        "Buscar abogados de inmigración cercanos aprobados por la asociación.",
      icon: Briefcase,
      link: "https://www.ailalawyer.com/",
    },
    {
      title: "American Bar Association (ABA) – Know Your Rights Manual",
      phone: null,
      description:
        "Manual de derechos legales para personas en procesos de deportación.",
      icon: Info,
      link: "https://www.americanbar.org/groups/public_interest/immigration/projects_initiatives/know-your-rights/",
    },
    {
      title: "Legal Orientation Program (LOP)",
      phone: null,
      description: "Materiales legales disponibles en más de 30 idiomas.",
      icon: Globe,
      link: "https://www.vera.org/initiatives/legal-orientation-program",
    },
  ];

  const consulateContacts = [
    {
      country: "Argentina",
      office: "Consulado General en Miami",
      address: "1101 Brickell Ave, Suite 900, Miami, FL 33131",
      phone: "(305) 373-1889",
    },
    {
      country: "Bolivia",
      office: "Consulado General en Washington D.C.",
      address: "1825 Connecticut Ave NW, Suite 402, Washington, D.C. 20009",
      phone: "(202) 232-4827",
    },
    {
      country: "Brasil",
      office: "Consulado General en Nueva York",
      address: "225 East 41st Street, Nueva York, NY 10017",
      phone: "(917) 777-7777",
    },
    {
      country: "Chile",
      office: "Consulado General en Los Ángeles",
      address: "6100 Wilshire Blvd, Suite 1240, Los Ángeles, CA 90048",
      phone: "(323) 933-3697",
    },
    {
      country: "Colombia",
      office: "Consulado General en Miami",
      address: "280 Aragon Ave, Coral Gables, FL 33134",
      phone: "(305) 448-5558",
    },
    {
      country: "Costa Rica",
      office: "Consulado General en Los Ángeles",
      address: "1605 W Olympic Blvd, Suite 400, Los Ángeles, CA 90015",
      phone: "(213) 380-7915",
    },
    {
      country: "Cuba",
      office: "Embajada de Cuba en Washington D.C.",
      address: "2630 16th St NW, Washington, D.C. 20009",
      phone: "(202) 797-8518",
    },
    {
      country: "Ecuador",
      office: "Consulado General en Nueva York",
      address: "800 Second Avenue, Suite 600, Nueva York, NY 10017",
      phone: "(212) 808-0170",
    },
    {
      country: "El Salvador",
      office: "Consulado General en Houston",
      address: "8300 Bissonnet St, Suite 400, Houston, TX 77074",
      phone: "(713) 270-6239",
    },
    {
      country: "Guatemala",
      office: "Consulado General en Los Ángeles",
      address: "1975 Riverside Dr, Los Ángeles, CA 90039",
      phone: "(213) 365-9251",
    },
    {
      country: "Honduras",
      office: "Consulado General en Miami",
      address: "2600 SW 3rd Ave, Suite 800, Miami, FL 33129",
      phone: "(305) 285-0070",
    },
    {
      country: "México",
      office: "Consulado General en Los Ángeles",
      address: "2401 W 6th St, Los Ángeles, CA 90057",
      phone: "(213) 351-6800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Numbers Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Números de Emergencia
          </h1>
          <p className="text-xl text-gray-600">
            Contactos importantes en caso de detención por ICE
          </p>
        </div>

        <Alert className="mb-8 bg-primary/10 text-primary border-primary/20">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Importante</AlertTitle>
          <AlertDescription>
            Guarda estos números en un lugar seguro y compártelos con familiares
            y amigos de confianza. En caso de emergencia, mantén la calma y
            contacta inmediatamente a estas organizaciones.
          </AlertDescription>
        </Alert>

        {/* Emergency Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {emergencyContacts.map((contact, index) => {
        
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <contact.icon className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <div className="line-clamp-2">{contact.title}</div>
                </CardTitle>
                <CardDescription>{contact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {contact.phone && (
                  <Link
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="h-5 w-5 shrink-0" />
                    {contact.phone}
                  </Link>
                )}
              </CardContent>
              {contact.link && (
                <CardFooter>
                  <Link
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Visitar Página Web
                  </Link>
                </CardFooter>
              )}
            </Card>
            );
          })}
        </div>

        {/* Consulates Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Consulados Latinoamericanos
          </h2>

          {/* Consulates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {consulateContacts.map((consulate, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    {consulate.country}
                  </CardTitle>
                  <CardDescription className="font-semibold">
                    {consulate.office}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1 shrink-0" />
                    <span>{consulate.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gray-500 shrink-0" />
                    <a
                      href={`tel:${consulate.phone}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {consulate.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Recuerda: Tienes derecho a guardar silencio y a tener un abogado. No
            firmes ningún documento sin asesoría legal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactsPage;
