
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Эффективная реклама для вашего бизнеса
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Размещайте рекламу на лучших площадках и достигайте своей целевой аудитории. 
              Доступные цены, гибкие настройки и высокая конверсия.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2">
                Начать сейчас <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Наши преимущества
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-primary-foreground" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>1,200+</strong> компаний уже используют нашу платформу
              </div>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Рекламная платформа" 
              className="aspect-video object-cover rounded-xl w-full shadow-xl" 
              width={550} 
              height={310} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
