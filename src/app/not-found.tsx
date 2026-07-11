import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site flex flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm font-semibold text-primary">404</p>
      <h1 className="mt-2 font-heading text-4xl tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        That route doesn&apos;t exist. Head back to the landing page or open the docs.
      </p>
      <div className="mt-8 flex gap-3">
        <Button render={<Link href="/" />}>Home</Button>
        <Button variant="outline" render={<a href="https://docs.scaledown.ai" />}>
          Docs
        </Button>
      </div>
    </div>
  );
}
