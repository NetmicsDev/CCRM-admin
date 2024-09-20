import React from "react";
import ActiveUsers from "./_components/active-users";
import DailyVisitors from "./_components/daily-visitors";
import BounceRate from "./_components/bounce-rate";
import ConversionRate from "./_components/conversion-rate";
import UserOverview from "./_components/user-overview";
import MostVisited from "./_components/most-visited";
// import BounceRate from "./_components/BounceRate";
// import ConversionRate from "./_components/ConversionRate";
// import MostVisitedPage from "./_components/MostVisitedPage";
// import UserOverview from "./_components/UserOverview";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full">
      <div className="px-8 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* 위쪽 카드들 */}
        <ActiveUsers />
        <DailyVisitors />
        <ConversionRate />
        <BounceRate />
        {/* 아래쪽 카드들 */}
        <UserOverview className="col-span-3" />
        <MostVisited />
      </div>
    </div>
  );
};

export default Dashboard;
