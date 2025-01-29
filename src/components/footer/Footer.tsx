import React from "react";
import {  Mail, Shield,  } from "lucide-react";

import { DonateButton } from "../buttons/Buttons";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-slate-900 text-white">
      {/* Emergency Support Banner */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-2">
          <Mail className="w-4 h-4" />
          <Link 
            href="mailto:icercaapp@gmail.com"
            className="text-sm hover:text-primary-foreground/80 transition-colors duration-200 underline"
          >
            icercaapp@gmail.com
          </Link>
        </div>
      </div>

      {/* Rest of your footer code remains the same */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span  className="text-lg font-bold">
                 Icerca App
              </span>
            </div>
            <p className="text-sm text-slate-300">  
   Empoderando a las comunidades con alertas en tiempo real para proteger a las familias inmigrantes.  
</p>


            <p className="text-sm text-slate-300">
              Empowering communities through real-time alerts to protect
              immigrant families.
            </p>
            <div className="flex items-center space-x-4"></div>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <DonateButton />
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-sm text-slate-400">
          © {currentYear} Icerca App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;