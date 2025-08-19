import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import WizardClient from "./WizardClient";

export default async function WizardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in?redirect_url=/wizard");
  }

  return <WizardClient />;
}