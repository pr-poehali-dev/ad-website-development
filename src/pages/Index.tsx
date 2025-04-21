
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, DollarSign, Users, Globe, BarChart } from "lucide-react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        
        <section className="py-16 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы предоставляем лучшие условия для размещения вашей рекламы с максимальной эффективностью
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-scale">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Широкая аудитория</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Миллионы пользователей ежедневно увидят вашу рекламу на наших платформах.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader>
                  <BarChart className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Точная аналитика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Отслеживайте эффективность рекламы с помощью детальных отчетов и статистики.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader>
                  <Globe className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Глобальный охват</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Размещайте рекламу на локальных и международных площадках одновременно.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Что говорят наши клиенты о нашей рекламной платформе
              </p>
            </div>
            
            <Tabs defaultValue="business" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="business">Бизнес</TabsTrigger>
                <TabsTrigger value="agency">Агентства</TabsTrigger>
                <TabsTrigger value="personal">Блогеры</TabsTrigger>
              </TabsList>
              
              <TabsContent value="business" className="space-y-4">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <blockquote className="text-lg italic mb-4">
                    "Благодаря этой платформе мы увеличили продажи на 35% всего за три месяца. Отличные инструменты таргетинга!"
                  </blockquote>
                  <div className="font-medium">Мария Иванова, ООО "ТехноСтарт"</div>
                </div>
              </TabsContent>
              
              <TabsContent value="agency" className="space-y-4">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <blockquote className="text-lg italic mb-4">
                    "Управлять рекламными кампаниями для наших клиентов стало намного проще. Экономим время и получаем лучшие результаты."
                  </blockquote>
                  <div className="font-medium">Алексей Петров, Digital Agency Pro</div>
                </div>
              </TabsContent>
              
              <TabsContent value="personal" className="space-y-4">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <blockquote className="text-lg italic mb-4">
                    "Я смог монетизировать свой блог гораздо эффективнее благодаря гибким настройкам рекламных блоков."
                  </blockquote>
                  <div className="font-medium">Дмитрий Соколов, блогер</div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
