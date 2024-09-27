"use client";

import { redirect, useSearchParams } from "next/navigation";
import OutlinkForm from "../_components/outlink-form";
import Outlink from "@/app/_models/outlink";
import { Suspense } from "react";

export default function OutlinkEditPage() {
  return (
    <Suspense fallback={<div></div>}>
      <OutlinkEditInner />
    </Suspense>
  );
}

const OutlinkEditInner = () => {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/outlink");
    return;
  }
  const outlink = JSON.parse(searchParams.get("data") ?? "{}");

  if (!outlink.id) {
    redirect("/outlink");
  }

  return <OutlinkForm title="강의 수정하기" outlink={outlink as Outlink} />;
};
