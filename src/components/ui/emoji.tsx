import { cn } from "~/lib/utils";

type EmojiProps = {
  emoji: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

const Emoji = ({ emoji, size }: EmojiProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
    xl: "text-5xl",
    "2xl": "text-6xl",
  };

  return (
    <span
      role="img"
      aria-label="grandma"
      className={cn(sizeClasses[size ?? "md"])}
    >
      {emoji}
    </span>
  );
};

export { Emoji };
