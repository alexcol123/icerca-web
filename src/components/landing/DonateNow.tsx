import React from 'react';
import { DonateButton } from "../buttons/Buttons";
import { Heart, Shield, Users } from 'lucide-react';

const DonateNow = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="relative p-8 md:p-12">
            {/* Icon Group */}
            <div className="flex justify-center gap-6 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <Heart className="w-8 h-8 text-primary" />
              <Users className="w-8 h-8 text-primary" />
            </div>

            {/* Spanish Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Únete a Nuestra Comunidad
              </h2>
              
              <p className="text-xl text-muted-foreground mb-4">
                Cada minuto cuenta. Tu contribución ayuda a proteger a 
                <span className="text-primary font-semibold"> familias inmigrantes </span> 
                de separaciones inesperadas.
              </p>
              <p className="text-xl text-muted-foreground">
                Únete a nosotros en la construcción de este
                <span className="text-primary font-semibold"> escudo comunitario</span>.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex-1 border-t border-primary/20" />
              <Shield className="w-6 h-6 text-primary/40" />
              <div className="flex-1 border-t border-primary/20" />
            </div>

            {/* English Section */}
            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground">
                Every minute counts. Your contribution helps protect immigrant families 
                from unexpected separations. Join us in building this community shield.
              </p>
            </div>

            {/* Action Section */}
            <div className="flex flex-col items-center gap-6">
              <DonateButton btnText="Donar Ahora / Donate Now" />
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span>Juntos podemos hacer la diferencia</span>
                <Heart className="w-4 h-4 text-primary" />
                <span>Together we can make a difference</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;