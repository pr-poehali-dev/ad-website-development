
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-bold text-xl mb-4">AdPlace</div>
            <p className="text-muted-foreground mb-4">
              Эффективная рекламная платформа для вашего бизнеса
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-foreground">О нас</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Клиенты</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Вакансии</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Партнерам</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Документация</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-foreground">Контакты</a></li>
              <li><a href="/" className="text-muted-foreground hover:text-foreground">База знаний</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Подписка</h4>
            <p className="text-muted-foreground mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости и специальные предложения
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email" type="email" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2023 AdPlace. Все права защищены.
          </div>
          <div className="flex gap-4 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground">Условия использования</a>
            <a href="/" className="text-muted-foreground hover:text-foreground">Политика конфиденциальности</a>
            <a href="/" className="text-muted-foreground hover:text-foreground">Правовая информация</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
