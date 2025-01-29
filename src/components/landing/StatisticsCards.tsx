import { impactStats } from "@/lib/data";
import { cn } from "@/lib/utils";

const StatisticsCards = () => {
  return (
    <div className="flex flex-row justify-between w-full bg-muted  ">
      {impactStats.map((stat, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 bg-card text-center  py-3  md:py-8  px-2 sm:px-4 lg:px-8 border border-rose-100",
            "transition-colors duration-200 hover:bg-muted/50"
          )}
        >
          <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-primary mb-2">
            {stat.number}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;