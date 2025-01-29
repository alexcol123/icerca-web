import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DonateButton } from "@/components/buttons/Buttons";

const FundsChart = () => {
  const amountRecieved = 1000;
  const fundingGoal = 20000;
  const percentageReceived = Math.floor((amountRecieved / fundingGoal) * 100);
  const backers = 110;
  const daysLeft = 29;

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Protegiendo Nuestra Comunidad Juntos
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Nuestras comunidades merecen vivir sin miedo. Estamos construyendo
                una red de alertas en tiempo real que ayuda a proteger a las familias
                de operaciones inesperadas de ICE. Juntos, podemos crear un escudo
                de conciencia comunitaria que mantiene a nuestras familias seguras y unidas.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 text-primary">For English Speakers</h2>
              <p className="text-lg text-gray-500">
                We are developing a bilingual community alert system to protect families from unexpected ICE operations. 
                Available in both <span className="text-primary font font-semibold">English and Spanish</span>, this vital mobile app will help keep our communities informed and united. 
                Our goal is $20,000 to develop this essential tool that serves all members of our community.
              </p>
            </div>

            <div className="mt-8">
              <DonateButton btnText="Contribuir / Contribute Now" />
            </div>
          </div>

          <Card className="p-6">
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">
                    ${amountRecieved.toLocaleString()} recaudados / raised
                  </span>
                  <span className="text-gray-500">
                    de / of ${fundingGoal.toLocaleString()}
                  </span>
                </div>
                <Progress value={percentageReceived} className="h-3" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{backers}</div>
                  <div className="text-sm text-gray-500">Donantes / Backers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{daysLeft}</div>
                  <div className="text-sm text-gray-500">Días / Days Left</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{percentageReceived}%</div>
                  <div className="text-sm text-gray-500">Financiado / Funded</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FundsChart;