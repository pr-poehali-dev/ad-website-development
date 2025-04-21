
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Стартовый",
      price: "5 000 ₽",
      description: "Идеально для малого бизнеса и начинающих",
      features: [
        "До 10 000 показов",
        "Базовая аналитика",
        "2 рекламных формата",
        "Поддержка по email"
      ],
      highlighted: false
    },
    {
      name: "Бизнес",
      price: "15 000 ₽",
      description: "Оптимально для растущих компаний",
      features: [
        "До 50 000 показов",
        "Расширенная аналитика",
        "Все рекламные форматы",
        "Приоритетная поддержка",
        "A/B тестирование"
      ],
      highlighted: true
    },
    {
      name: "Премиум",
      price: "30 000 ₽",
      description: "Для крупного бизнеса и агентств",
      features: [
        "Неограниченные показы",
        "Продвинутая аналитика и отчеты",
        "Персональный менеджер",
        "API доступ",
        "Белая метка",
        "Приоритетное размещение"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифные планы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тариф для вашего бизнеса с возможностью масштабирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col ${plan.highlighted ? 'border-primary/50 shadow-lg relative' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-tr-lg rounded-bl-lg">
                  Популярный
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> / месяц</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
