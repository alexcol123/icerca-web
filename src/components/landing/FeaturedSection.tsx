import CellphoneCard from "../cards/CellphoneCard";

const FeaturesSection = () => {
  return (
    <div id="features" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-foreground">
          Lo Que Estamos Construyendo
        </h2>

        <p className="mt-6 text-xl text-center text-muted-foreground max-w-3xl mx-auto">
          Cada <span className="text-primary font-semibold">20 minutos</span>,
          otra familia enfrenta una separación repentina. Estamos construyendo un{" "}
          <span className="text-primary font-semibold">
            sistema de alerta que salva vidas
          </span>{" "}
          que puede dar a nuestra comunidad los minutos críticos que necesitan para
          protegerse cuando comienzan las operaciones de ICE.
        </p>

        {/* English Summary Section */}
        <div className="mt-8 border-t border-gray-200 pt-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-4 text-primary">
            For English Speakers
          </h3>
          <p className="text-lg text-center text-muted-foreground">
            Every 20 minutes, another family faces sudden separation. We&apos;re building a life-saving 
            alert system that gives our community critical minutes to protect themselves when ICE 
            operations begin. With your support, we can develop this vital tool in 6 weeks.
          </p>
          <div className="mt-4 bg-muted p-4 rounded-lg text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>Server Infrastructure: $6,000</div>
              <div>Security Systems: $7,500</div>
              <div>Alert Infrastructure: $6,500</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <CellphoneCard />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-foreground mt-16">
          Nuestra Historia
        </h2>

        <p className="mt-6 text-xl text-center text-muted-foreground max-w-3xl mx-auto">
          Somos{" "}
          <span className="text-primary font-semibold">
            inmigrantes que nos convertimos en ingenieros
          </span>
          , impulsados por los recuerdos de nuestras propias familias viviendo con miedo. 
          Cuando los hijos de mi vecina llegaron a una casa vacía porque sus padres fueron 
          detenidos sin previo aviso, supimos que teníamos que actuar. Hoy, estamos usando 
          nuestra{" "}
          <span className="text-primary font-semibold">
            década de experiencia en software
          </span>{" "}
          para proteger a nuestra comunidad.
        </p>

        {/* Development Timeline */}
        <div className="mt-12 bg-muted p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-4">
            Cronograma de Desarrollo / Development Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Weeks 1-2: Database & Server Setup
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Weeks 2-4: Alert System Development
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Weeks 4-5: Security Implementation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Week 6: Testing & Community Launch
            </div>
          </div>
        </div>

        <p className="mt-8 text-xl text-center text-muted-foreground max-w-3xl mx-auto">
          Para proteger a nuestra comunidad, necesitamos recaudar{" "}
          <span className="text-primary font-semibold">$20,000</span> para
          costos esenciales de desarrollo.
        </p>

        <div className="mt-8 text-center bg-primary/5 p-8 rounded-lg">
          <p className="text-lg text-primary font-semibold italic">
            &quot;Si una herramienta como esta hubiera existido, mis hijos no 
            habrían pasado 3 meses sin su madre.&quot;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            - María, Community Member
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;