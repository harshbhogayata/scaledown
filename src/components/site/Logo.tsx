import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo.png"
        alt=""
        width={28}
        height={28}
        className="size-7 object-contain"
        priority
      />
      {showWordmark ? (
        <span className="text-[20px] font-black tracking-tight text-primary">
          scaledown
        </span>
      ) : (
        <span className="sr-only">ScaleDown</span>
      )}
    </span>
  );
}
