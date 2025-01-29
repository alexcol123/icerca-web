

import DonateNow from "@/components/landing/DonateNow";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Heart } from "lucide-react";
import Image from "next/image";


const Derechos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
   

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Qué Hacer Si Te Detienen Agentes de ICE
            </h2>

            {/* Guidelines Section */}
            <div className="space-y-8">
              {/* Image Placeholder */}
              <div className="relative w-full h-80 mb-8 overflow-hidden rounded-lg">
                <Image
                  src="/images/peoples/arrestWorker.webp"
                  alt="Conoce tus derechos"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Guidelines List */}
              <div className="space-y-6">
                {[
                  {
                    title: "1. Mantén la calma y no huyas",
                    description:
                      "Huir puede hacer que la situación empeore. Permanece tranquilo y respira profundo.",
                  },
                  {
                    title: "2. Pregunta si eres libre de irte",
                    description: [
                      "Di: '¿Estoy detenido o soy libre de irme?'",
                      "Si no estás detenido, puedes irte tranquilamente.",
                    ],
                  },
                  {
                    title: "3. Ejercer tu derecho a permanecer en silencio",
                    description: [
                      "No tienes que responder preguntas sobre tu estatus migratorio, país de origen o cómo ingresaste a los Estados Unidos.",
                      "Di: 'Prefiero ejercer mi derecho a permanecer en silencio.'",
                    ],
                  },
                  {
                    title: "4. No firmes documentos sin leerlos",
                    description:
                      "No firmes nada que no entiendas. Podrías estar aceptando tu deportación involuntariamente.",
                  },
                  {
                    title: "5. Pide hablar con un abogado",
                    description: [
                      "Tienes derecho a consultar con un abogado antes de responder preguntas.",
                      "Puedes decir: 'Quiero hablar con mi abogado.'",
                    ],
                  },
                  {
                    title: "6. No entregues documentos falsos",
                    description:
                      "Nunca presentes documentos falsificados o mientas. Esto puede empeorar tu caso.",
                  },
                  {
                    title: "7. Entrega solo tus documentos obligatorios",
                    description: [
                      "Si tienes una tarjeta de residencia (Green Card) o un permiso de trabajo válido, puedes mostrarlo.",
                      "No entregues documentos como pasaportes extranjeros, ya que podrían ser usados en tu contra.",
                    ],
                  },
                  {
                    title: "8. Documenta lo que sucede",
                    description: [
                      "Anota los nombres y números de placa de los agentes.",
                      "Si puedes, graba la interacción con tu teléfono, siempre que esté permitido por las leyes locales.",
                    ],
                  },
                  {
                    title: "9. Conoce tus derechos en casa",
                    description: [
                      "Si ICE llega a tu hogar, no abras la puerta a menos que tengan una orden judicial firmada por un juez.",
                      "Pide que te muestren la orden judicial por debajo de la puerta.",
                    ],
                  },
                  {
                    title: "10. Comunica a tus familiares",
                    description: [
                      "Memoriza el número de un abogado o una organización de ayuda legal.",
                      "Diles a tus familiares dónde estás y pídele a alguien que contacte a tu abogado.",
                    ],
                  },
                  {
                    title: "11. Busca ayuda legal inmediatamente",
                    description:
                      "Contacta a un abogado especializado en inmigración para revisar tu caso y tomar acción lo antes posible.",
                  },
                  {
                    title: "12. No firmes ningún documento",
                    description: [
                      "No firmes ningún documento sin consultar con tu abogado.",
                      "Los documentos podrían afectar tus derechos legales.",
                    ],
                  },
                  {
                    title:
                      "13. No proporciones información sobre tu estatus migratorio",
                    description: [
                      "No tienes que responder preguntas sobre tu estatus migratorio.",
                      "Tienes derecho a mantener esta información privada.",
                    ],
                  },
                  {
                    title: "14. Solicita ver la orden judicial",
                    description: [
                      "Si te arrestan, pide ver la orden judicial y verifica que tenga:",
                      "• Tu nombre",
                      "• Tu dirección",
                      "• La firma de un juez",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {Array.isArray(item.description) ? (
                      <ul className="text-gray-600 list-disc list-inside space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Emergency Alert Box */}
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-rose-500" />
                  <h3 className="text-xl font-semibold text-rose-700">
                    En Caso de Emergencia
                  </h3>
                </div>
                <p className="text-rose-700">
                  Memoriza estos números importantes:
                </p>
                <ul className="list-disc list-inside mt-2 text-rose-600 space-y-2">
                  <li>Línea Directa de Emergencia: (800) XXX-XXXX</li>
                  <li>Asistencia Legal Gratuita: (888) XXX-XXXX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <DonateNow />
    </div>
  );
};

export default Derechos;
