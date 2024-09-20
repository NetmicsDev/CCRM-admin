import React from "react";
import ActiveUsers from "./_components/active-users";
// import BounceRate from "./_components/BounceRate";
// import ConversionRate from "./_components/ConversionRate";
// import MostVisitedPage from "./_components/MostVisitedPage";
// import UserOverview from "./_components/UserOverview";

const Dashboard: React.FC = () => {
  return (
    <div className="px-8 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* 위쪽 카드들 */}
      <ActiveUsers />
      {/* <BounceRate />
      <ConversionRate />
      <MostVisitedPage />

      {/* 유저 오버뷰 */}
      {/* <UserOverview className="col-span-2" /> */}
    </div>
  );
};

export default Dashboard;
