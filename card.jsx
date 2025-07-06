import * as React from "react";
import clsx from "clsx";

function Card({ className, ...props }) {
  return (
    <div className={clsx("rounded-lg border bg-white text-black shadow-sm", className)} {...props} />
  );
}

function CardContent({ className, ...props }) {
  return <div className={clsx("p-4", className)} {...props} />;
}

export { Card, CardContent };
