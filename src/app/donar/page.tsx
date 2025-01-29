"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, Heart, Shield } from "lucide-react";

const Donar = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = [5, 10, 25, 50, 100, 500, 1000, 5000];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Banner */}
      <div className="bg-destructive/10 text-destructive py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4">
          <AlertTriangle className="w-6 h-6" />
          <div className="text-center">
            <p className="text-base md:text-lg font-medium">
              URGENTE: Ayúdanos a proteger a las familias de nuestra comunidad
            </p>
            <p className="text-xs md:text-sm opacity-75 mt-1">
              URGENT: Help us protect families in our community
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Main Donation Form */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Donation Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Heart className="text-primary w-5 h-5" />
                  Elige el Monto de Donación
                </div>
                <div className="text-sm font-normal opacity-75">
                  Choose Donation Amount
                </div>
              </CardTitle>
              <CardDescription className="space-y-1">
                <div>
                  Selecciona una cantidad o ingresa una donación personalizada
                </div>
                <div className="text-xs opacity-75">
                  Select an amount or enter a custom donation
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className="h-16"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-sm text-gray-700">
                    Cantidad Personalizada
                  </label>
                  <div className="text-xs text-gray-500">Custom Amount</div>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-7"
                    placeholder="Ingresa el monto / Enter amount"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Impact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Shield className="text-primary w-5 h-5" />
                  Tu Impacto
                </div>
                <div className="text-sm font-normal opacity-75">
                  Your Impact
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-6">
                <li className="space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="mt-1">•</div>
                    <span>
                      Desarrollar un sistema de alerta en tiempo real para
                      protección comunitaria
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    Develop a real-time alert system for community protection
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="mt-1">•</div>
                    <span>
                      Crear canales de comunicación seguros para familias
                      vulnerables
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    Create secure communication channels for vulnerable families
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="mt-1">•</div>
                    <span>
                      Construir redes de respuesta de emergencia dentro de las
                      comunidades
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    Build emergency response networks within communities
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="mt-1">•</div>
                    <span>
                      Proporcionar información crítica cuando los minutos son
                      vitales
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    Provide critical information when minutes matter most
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                disabled={!selectedAmount && !customAmount}
              >
                <div className="flex flex-col items-center">
                  <span>Completar Donación</span>
                  <span className="text-xs">Complete Donation</span>
                </div>
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center space-y-4">
          <div>
            <p className="text-gray-700">
              Tu donación nos ayudará a alcanzar nuestra meta de $20,000 para
              desarrollar esta herramienta vital de protección comunitaria.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Your donation will help us reach our $20,000 goal to develop this
              vital community protection tool.
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              Todas las donaciones se procesan de forma segura. Para preguntas
              sobre tu donación, por favor contacta a soporte.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              All donations are processed securely. For questions about your
              donation, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donar;
