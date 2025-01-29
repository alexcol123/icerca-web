import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, AlertTriangle, MapPin, Shield, Heart, Smartphone } from 'lucide-react';
import { DonateButton } from '@/components/buttons/Buttons';

const AppExplanation = () => {
  const steps = [
    {
      icon: Shield,
      title: "¿Cómo Funciona?",
      description: "Una aplicación diseñada para proteger a nuestra comunidad a través de alertas en tiempo real."
    },
    {
      icon: MapPin,
      title: "Detecta Actividad",
      description: "Si ves agentes de ICE en tu área, puedes reportarlo de forma segura y anónima."
    },
    {
      icon: AlertTriangle,
      title: "Envía una Alerta",
      description: "Con solo un clic en el botón de alerta, notificas a otros miembros de la comunidad."
    },
    {
      icon: Bell,
      title: "Recibe Notificaciones",
      description: "Los usuarios cercanos recibirán una alerta instantánea en sus teléfonos."
    },
    {
      icon: Smartphone,
      title: "Mantente Informado",
      description: "Las alertas te ayudan a evitar áreas de riesgo y proteger a tu familia."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Protegiendo a Nuestra Comunidad</h2>
          <p className="text-xl text-gray-600">
            Una solución simple pero poderosa para mantener seguras a nuestras familias
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="border-primary/20">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-primary shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center space-y-6">
          <Card className="border-primary bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tu Apoyo Hace la Diferencia</h3>
              <p className="text-lg text-gray-600 mb-6">
                Con tu donación, podemos hacer realidad esta aplicación y proteger a miles de familias en nuestra comunidad.
              </p>
              <DonateButton 
                btnText="Apoya Este Proyecto" 
                variant="default"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppExplanation;