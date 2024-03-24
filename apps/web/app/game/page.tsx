import { redirect } from "next/navigation";
import React from "react";

const NoIdProvided = () => {
  return redirect("/");
};

export default NoIdProvided;
