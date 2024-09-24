"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import ThemeSwitch from "../ui/theme-switch";
import { useEffect } from "react";

export function SiteHeader() {
  let pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.documentElement.classList.add("dark");
    }
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full -mb-12 bg-white dark:bg-zinc-950"
        )}
      >
        <div className="flex h-14 items-center px-3 md:px-10">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              {pathname?.includes("/docs") ? <ThemeSwitch /> : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
