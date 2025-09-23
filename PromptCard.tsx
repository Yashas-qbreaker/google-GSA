import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface PromptCardProps {
  emoji: string;
  title: string;
  description: string;
  url: string;
}

export const PromptCard = ({ emoji, title, description, url }: PromptCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-gradient-card border border-border rounded-2xl p-4 sm:p-5 shadow-card hover:shadow-glow-intense transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 before:absolute before:inset-0 before:bg-gradient-glow before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 mb-2 sm:mb-0">
      <div className="relative z-10 flex flex-col h-full min-h-[170px] sm:min-h-[180px]">
        <div className="text-4xl sm:text-4xl mb-2 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-bounce">
          {emoji}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2 sm:mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 flex-grow text-sm sm:text-base leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
          {description}
        </p>
        <Button 
          variant="default" 
          className="w-full bg-gradient-secondary hover:bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border border-primary/20 hover:border-primary/60 text-white font-semibold text-sm py-2 rounded-xl sm:rounded-lg"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Try Now <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </div>
  );
};