import TestimonialCard from "@/components/landing/TestimonialCard";
import StatisticsCards from "@/components/landing/StatisticsCards";
import HeroSection from "@/components/landing/HeroSection";
import FeaturedSection from "@/components/landing/FeaturedSection";

import FundsChart from "@/components/landing/FundsChart";
import DonateNow from "@/components/landing/DonateNow";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="relative bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//                 Protecting Our Community Together
//               </h1>
//               <p className="mt-6 text-xl text-gray-500">
//                 We&apos;re developing a vital community alert system to help
//                 keep families together and communities informed. Your support
//                 will help make this essential tool available to those who need
//                 it most.
//               </p>
//               <div className="mt-8">
//                 <DonateButton />
//               </div>
//             </div>
//             <Card className="p-6">
//               <CardContent className="space-y-6">
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-lg font-medium">
//                       ${amountRecieved.toLocaleString()} raised
//                     </span>
//                     <span className="text-gray-500">
//                       of ${fundingGoal.toLocaleString()}
//                     </span>
//                   </div>
//                   <Progress value={percentageReceived} className="h-3" />
//                 </div>
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <div className="text-2xl font-bold">{backers}</div>
//                     <div className="text-sm text-gray-500">Backers</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold">{daysLeft}</div>
//                     <div className="text-sm text-gray-500">Days Left</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold">
//                       {percentageReceived}%
//                     </div>
//                     <div className="text-sm text-gray-500">Funded</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//       {/* color update  ================= */}

//       <FeaturedSection />

//       <FeaturesPreview />

//       <StatisticsCards />

//       {/* Featured Story */}

// <HeroSection
//         backgroundImage="/images/ice-stop.jpg"
//         title="Every 20 Minutes, Another Family Faces Separation"
//         subtitle="Your donation powers our real-time alert system, giving families precious minutes to protect themselves"
//         buttonText="Donate Now"
//         showAlert={true}
//         alertMessage="URGENT: Families need protection now more than ever"
//       />

//       <div id="support" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-center mb-12">
//             Support Tiers
//           </h2>
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//             <BackerCard />
//           </div>
//         </div>
//       </div>

//       <TestimonialCard
//   imageSrc="/images/peoples/caged.jpg"
//   imageAlt="Conditions at detention facilities"
//   name="Preventing Family Separations"
//   story="Behind these gates are mothers, sisters, and daughters - hardworking people whose only dream was to provide a better life for their families. Many were detained while going about their daily routines - at work, dropping children at school, or shopping for groceries. With our community alert system, we can help prevent these traumatic separations. By giving communities the tools to stay informed and alert each other of potential risks, we can protect families who are just trying to build a life of dignity through honest work."
//   callToAction="Your contribution will help develop technology that keeps families together and communities strong. Every minute of warning can make the difference between a family staying together or being torn apart."
// />

// <OurPlanInfo />

//       <Banner
//         btnText={"Make a Difference Now"}
//         bannerHeading={"Every Second Counts"}
//         bannerBody={
//           "Right now, families are at risk. Your support today can help keep them together."
//         }
//       />
//     </div>
//   );
// };

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FundsChart />
      <StatisticsCards />

      <FeaturedSection />



<HeroSection
  backgroundImage="/images/ice-stop.jpg"
  title="Cada 20 Minutos, Otra Familia Enfrenta la Separación"
  buttonText="Donar Ahora"
  showAlert={true}
  alertMessage="URGENTE: Las familias necesitan protección ahora más que nunca"
/>


{/* <HeroSection
  backgroundImage="/images/peoples/caged.jpg"
  title="Every 20 Minutes, Another Family Faces Separation"
  buttonText="Donate Now"
  showAlert={true}
  alertMessage="URGENT: Families Need Protection Now More Than Ever"
/> */}

      <DonateNow />

      <TestimonialCard
  imageSrc="/images/peoples/caged.jpg"
  imageAlt="Condiciones en centros de detención"
  name="Previniendo Separaciones Familiares"
  story="Detrás de estas rejas hay madres, hermanas e hijas - personas trabajadoras cuyo único sueño era brindar una vida mejor a sus familias. Muchas fueron detenidas mientras realizaban sus rutinas diarias - en el trabajo, dejando a los niños en la escuela, o comprando víveres. Con nuestro sistema de alerta comunitaria, podemos ayudar a prevenir estas separaciones traumáticas. Al dar a las comunidades las herramientas para mantenerse informadas y alertarse entre sí sobre riesgos potenciales, podemos proteger a las familias que solo intentan construir una vida digna a través del trabajo honesto."
  callToAction="Tu contribución ayudará a desarrollar tecnología que mantiene a las familias unidas y a las comunidades fuertes. Cada minuto de advertencia puede marcar la diferencia entre una familia que permanece unida o que es separada."
/>

      <DonateNow />
    </div>
  );
};

export default LandingPage;
