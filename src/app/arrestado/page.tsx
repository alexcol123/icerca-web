import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Search,
  AlertTriangle,
  ClipboardList,
  Phone,
  FileText,
  ExternalLink,
  Info,
} from "lucide-react";
import Link from "next/link";

const DetainedFamilyHelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Fue Detenido un Familiar por ICE?
          </h1>
          <p className="text-xl text-gray-600">
            Pasos importantes para localizar y ayudar a un familiar detenido
          </p>
        </div>

        {/* Urgent Action Card */}
        <Card className="mb-8 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <AlertTriangle className="h-6 w-6" />
              Localizador de Detenciones
            </CardTitle>
            <CardDescription className="text-base">
              Haga clic en el botón a continuación para acceder al sistema
              oficial de ICE. Al hacer clic:
            </CardDescription>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                Se abrirá una nueva página del sitio web oficial de ICE
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                Podrá buscar a su familiar usando su nombre y país de nacimiento
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                Si encuentra a su familiar, el sistema mostrará su ubicación y
                número de registro
              </li>
            </ul>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href="https://locator.ice.gov/odls/#/search"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-primary text-white rounded-lg hover:bg-primary/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-gray-100" />
                <div>
                  <h3 className="font-semibold text-lg animate-pulse">
                    Click Buscar Familiar Detenido
                  </h3>
                  <p className="text-gray-200">
                    Sistema Oficial de Localización de ICE
                  </p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-primary" />
            </Link>
            <Alert className="bg-primary/5 border-primary/10">
              <Info className="h-5 w-5" />
              <AlertDescription>
                Para usar el localizador, necesitará:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nombre completo del detenido</li>
                  <li>País de nacimiento</li>
                  <li>Número A (si lo conoce)</li>
                  <li>Fecha de nacimiento (si la conoce)</li>
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Steps Grid */}
        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary" />
                Pasos a Seguir
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Mantener la Calma y Recopilar Información
                    </h3>
                    <p className="text-gray-600">
                      Anote toda la información posible sobre la detención:
                      fecha, hora, lugar y cualquier detalle relevante.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Contactar a un Abogado de Inmigración
                    </h3>
                    <p className="text-gray-600">
                      Es crucial obtener representación legal lo antes posible.
                      Use los números de emergencia proporcionados para
                      encontrar ayuda legal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Localizar al Detenido</h3>
                    <p className="text-gray-600">
                      Use el localizador de ICE y contacte a los centros de
                      detención cercanos. Los detenidos pueden ser transferidos
                      en las primeras 72 horas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Recopilar Documentos Importantes
                    </h3>
                    <p className="text-gray-600">
                      Reúna documentos de identidad, registros médicos, pruebas
                      de presencia en EE.UU., lazos familiares y cualquier
                      documento legal previo.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Documents Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Documentos Importantes a Reunir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Identificación oficial (pasaporte, matrícula consular, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Acta de nacimiento y documentos familiares
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Registros médicos (especialmente si hay condiciones de salud)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Documentos de inmigración previos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Pruebas de presencia en EE.UU. (recibos, contratos, etc.)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Reminder Alert */}
        <Alert className="bg-primary/10 text-primary border-primary/20">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Recordatorio Importante</AlertTitle>
          <AlertDescription>
            No firme ningún documento sin la presencia de un abogado. Tiene
            derecho a mantener silencio y a solicitar representación legal.
          </AlertDescription>
        </Alert>

        {/* Get Help Button */}
        <div className="mt-8 text-center">
          <Button className="text-lg px-8 py-6" asChild>
            <a href="/telefonos">
              <Phone className="mr-2 h-5 w-5" />
              Ver Números de Emergencia
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetainedFamilyHelpPage;
