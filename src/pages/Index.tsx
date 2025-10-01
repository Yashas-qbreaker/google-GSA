import { PromptCard } from "@/components/PromptCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, QrCode } from "lucide-react";
import googleLogo from "@/assets/google-logo.jpg";

const prompts = [
  {
    emoji: "🎨",
    title: "Artist/Designer Personality Quiz",
    description: "Ever wondered which famous artist matches your personality? Take this fun quiz & find out in minutes",
    url: "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=17"
  },
  {
    emoji: "🥳",
    title: "Festive Get-Together Planner",
    description: "Hosting friends soon? Let Gemini be your party planner—menu, music & games all sorted here",
    url: "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=16"
  },
  {
    emoji: "🎬",
    title: "Movie Myth-Busting",
    description: "Think your favorite movie is accurate? Gemini will reveal the funniest historical goof-ups",
    url: "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=15"
  },
  {
    emoji: "🌍",
    title: "Weekend Getaway Ideas",
    description: "Stuck on where to escape this weekend? Let Gemini pick the perfect trip spot for you",
    url: "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=14"
  },
  {
    emoji: "✨",
    title: "Festive Eco-Friendly Décor",
    description: "Decorate smart, not wasteful! Gemini shares 5 festive eco-friendly hacks you'll love",
    url: "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=13"
  }
];

const Index = () => {
  const handleOpenAllPrompts = () => {
    const urls = [
      "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=17",
      "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=16",
      "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=15",
      "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=14",
      "https://aiskillshouse.com/student/qr-mediator.html?uid=6159&promptId=13"
    ];

    urls.forEach(url => window.open(url, "_blank"));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-glow opacity-20 animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(270,80%,60%,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,hsl(300,70%,65%,0.1)_0%,transparent_50%)]"></div>
      
      {/* Header Section */}
      <header className="relative text-center py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src={googleLogo} 
              alt="Google Logo" 
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-hero bg-clip-text text-transparent mb-4 leading-tight">
            Google Student Ambassador Program
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            ✨ Explore with Gemini
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Discover amazing AI-powered experiences that spark creativity and solve everyday challenges
          </p>
        </div>
      </header>

      {/* Prompts Grid */}
      <main className="relative px-2 sm:px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {/* First 4 prompts in 2 rows of 2 cards each */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {prompts.slice(0, 4).map((prompt, index) => (
                <div key={index}>
                  <PromptCard
                    emoji={prompt.emoji}
                    title={prompt.title}
                    description={prompt.description}
                    url={prompt.url}
                  />
                </div>
              ))}
            </div>
            
            {/* Last prompt as full-width card */}
            {prompts.length > 4 && (
              <div className="w-full lg:max-w-4xl lg:mx-auto">
                <PromptCard
                  emoji={prompts[4].emoji}
                  title={prompts[4].title}
                  description={prompts[4].description}
                  url={prompts[4].url}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* WhatsApp CTA */}
      <section className="relative px-2 sm:px-4 pb-16 mt-12 md:mt-20">
        <div className="max-w-4xl mx-auto text-center rounded-2xl bg-gradient-to-b from-background/80 to-background/60 shadow-lg p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto px-2">
            Connect with other AI enthusiasts and get exclusive prompts, tips, and updates
          </p>
          <WhatsAppButton url="https://chat.whatsapp.com/" />
        </div>
      </section>

      {/* Try 5 Prompts Section */}
      <section className="relative px-2 sm:px-4 pb-16 mt-8 md:mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6 md:mb-8 bg-gradient-primary bg-clip-text text-transparent">
             Try 5 Prompts in a Single Go
          </h2>
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleOpenAllPrompts}
              className="w-full sm:w-auto bg-gradient-secondary hover:bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border border-primary/20 hover:border-primary/60 text-white font-semibold py-4 px-8 rounded-xl shadow-card hover:shadow-glow-intense group"
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              Try Now
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-glow transition-all duration-500 hover:scale-[1.02] border border-blue-500/20 hover:border-blue-400/60 text-white font-semibold py-4 px-8 rounded-xl shadow-card hover:shadow-glow-intense group"
                >
                  <QrCode className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-bounce" />
                  Scan QR
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md mx-auto">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Scan QR Code
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4 p-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img 
                      src="/prompt qr.png" 
                      alt="QR Code for Gemini Prompts" 
                      className="w-full max-w-xs h-auto rounded"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Scan this QR code with your mobile device to access all 5 Gemini prompts
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
            {/* Direct link label without .html (href unchanged) */}
      <div className="text-center mb-16">
               <a
          href="https://google-gsa.vercel.app/multiprompt.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline hover:text-foreground"
        >
        </a>
      </div>
    </div>
  );
};

export default Index;
