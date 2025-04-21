
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl flex items-center gap-2">
            <span className="text-primary">AdPlace</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Форматы рекламы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Эффективная реклама
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Выберите оптимальный формат рекламы для вашего бизнеса
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">Баннеры</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Различные форматы баннеров для разных платформ
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">Контекстная реклама</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Точное попадание в целевую аудиторию
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">Нативная реклама</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Естественная интеграция в контент
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Цены
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  О нас
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">Войти</Button>
          <Button>Разместить рекламу</Button>
        </div>
      </div>
    </header>
  );
}
