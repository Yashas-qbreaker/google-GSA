import { PromptCard } from "@/components/PromptCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
            Google Student Ambassador
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
      <main className="relative px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {prompts.map((prompt, index) => (
              <PromptCard
                key={index}
                emoji={prompt.emoji}
                title={prompt.title}
                description={prompt.description}
                url={prompt.url}
              />
            ))}
          </div>
        </div>
      </main>

      {/* WhatsApp CTA */}
      <section className="relative px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto text-base md:text-lg px-4">
            Connect with other AI enthusiasts and get exclusive prompts, tips, and updates
          </p>
          <WhatsAppButton url="https://chat.whatsapp.com/" />
        </div>
      </section>
    </div>
  );
};

export default Index;
