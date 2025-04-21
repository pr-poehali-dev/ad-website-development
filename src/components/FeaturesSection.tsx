
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, Globe, Users, Rocket, PieChart, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <ChartBar className="h-10 w-10 text-primary" />,
      title: "Аналитика в реальном времени",
      description: "Отслеживайте эффективность рекламных кампаний с подробной статистикой и отчетами."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Таргетинг по всему миру",
      description: "Настраивайте показы рекламы по географии, демографии и интересам аудитории."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Широкая аудитория",
      description: "Доступ к миллионам потенциальных клиентов на различных площадках."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Быстрый запуск",
      description: "От создания рекламы до её запуска - всего несколько минут."
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Эффективность бюджета",
      description: "Оптимизируйте расходы на рекламу с помощью смарт-алгоритмов."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Гибкое планирование",
      description: "Настраивайте показы по времени суток, дням недели и другим параметрам."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности нашей платформы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный набор инструментов для эффективного размещения и управления рекламными кампаниями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
