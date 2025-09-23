import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  url: string;
}

export const WhatsAppButton = ({ url }: WhatsAppButtonProps) => {
  return (
    <Button 
      size="lg"
      className="w-full max-w-sm mx-auto bg-gradient-whatsapp hover:bg-whatsapp-hover text-white font-bold py-4 md:py-6 px-6 md:px-10 rounded-2xl shadow-glow hover:shadow-glow-intense transition-all duration-500 hover:scale-[1.04] group border border-whatsapp/30 hover:border-whatsapp relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
      asChild
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 md:mr-3 h-6 w-6 md:h-7 md:w-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-bounce" />
        <span className="text-base md:text-lg">💬 Join our WhatsApp Community</span>
      </a>
    </Button>
  );
};
