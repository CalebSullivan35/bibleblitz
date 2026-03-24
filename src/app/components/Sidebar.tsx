"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Gamepad2,
  BookOpen,
  Info,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface NavSection {
  label: string;
  icon: React.ReactNode;
  items: NavItem[];
}

const topLinks: NavItem[] = [
  { href: "/", label: "Home", icon: <Home className="size-5" /> },
];

const sections: NavSection[] = [
  {
    label: "Play",
    icon: <Gamepad2 className="size-5" />,
    items: [
      {
        href: "/play",
        label: "Books Drill",
        icon: <Gamepad2 className="size-4" />,
        disabled: true,
      },
    ],
  },
  {
    label: "Explore",
    icon: <BookOpen className="size-5" />,
    items: [
      {
        href: "/explore/old-testament",
        label: "Old Testament",
        icon: <BookOpen className="size-4" />,
      },
      {
        href: "/explore/new-testament",
        label: "New Testament",
        icon: <BookOpen className="size-4" />,
      },
    ],
  },
];

const bottomLinks: NavItem[] = [
  { href: "/feedback", label: "Feedback", icon: <MessageSquare className="size-5" /> },
  { href: "/about", label: "About", icon: <Info className="size-5" /> },
];

function NavLink({
  item,
  pathname,
  collapsed,
  onClick,
}: {
  item: NavItem;
  pathname: string;
  collapsed?: boolean;
  onClick?: () => void;
}) {
  const isActive = pathname === item.href || (item.href.startsWith("/explore") && pathname.startsWith(item.href));

  if (item.disabled) {
    return (
      <span
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground opacity-50 cursor-not-allowed",
          collapsed && "justify-center px-2"
        )}
        title={collapsed ? item.label : undefined}
      >
        {item.icon}
        {!collapsed && <span>{item.label}</span>}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/15 hover:text-primary",
        isActive && "bg-primary/15 text-primary font-medium",
        collapsed && "justify-center px-2"
      )}
      title={collapsed ? item.label : undefined}
    >
      {item.icon}
      {!collapsed && <span>{item.label}</span>}
    </Link>
  );
}

function SectionGroup({
  section,
  pathname,
  collapsed,
  onClick,
}: {
  section: NavSection;
  pathname: string;
  collapsed?: boolean;
  onClick?: () => void;
}) {
  if (collapsed) {
    return (
      <div className="flex flex-col items-center gap-1">
        {section.items.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            pathname={pathname}
            collapsed
            onClick={onClick}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <span className="flex items-center gap-3 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {section.icon}
        <span>{section.label}</span>
      </span>
      <div className="ml-4 mt-1 flex flex-col gap-0.5">
        {section.items.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            pathname={pathname}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

function SidebarContent({
  collapsed,
  onLinkClick,
}: {
  collapsed?: boolean;
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className={cn("flex h-14 items-center border-b border-sidebar-border px-4", collapsed && "justify-center px-2")}>
        <Link href="/" onClick={onLinkClick} className="font-bold tracking-tight">
          {collapsed ? "BB" : "Bible Blitz"}
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {topLinks.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            pathname={pathname}
            collapsed={collapsed}
            onClick={onLinkClick}
          />
        ))}

        <div className="my-2 h-px bg-sidebar-border" />

        {sections.map((section) => (
          <SectionGroup
            key={section.label}
            section={section}
            pathname={pathname}
            collapsed={collapsed}
            onClick={onLinkClick}
          />
        ))}

        <div className="my-2 h-px bg-sidebar-border" />

        {bottomLinks.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            pathname={pathname}
            collapsed={collapsed}
            onClick={onLinkClick}
          />
        ))}
      </nav>

      {/* User area */}
      <div className={cn("border-t border-sidebar-border p-3", collapsed && "flex justify-center")}>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <Button variant="outline" size={collapsed ? "icon" : "sm"} className="w-full">
              {collapsed ? "?" : "Sign in"}
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export function Sidebar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:z-40 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-200",
          collapsed ? "md:w-14" : "md:w-64"
        )}
      >
        <SidebarContent collapsed={collapsed} />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-18 z-50 flex size-6 items-center justify-center rounded-full border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-sm hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronRight className="size-3" />
          ) : (
            <ChevronLeft className="size-3" />
          )}
        </button>
      </aside>

      {/* Main content */}
      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-200",
          collapsed ? "md:ml-14" : "md:ml-64"
        )}
      >
        {/* Mobile top bar + sheet */}
        <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background/80 backdrop-blur px-4 md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SidebarContent onLinkClick={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-3 font-bold tracking-tight">
            Bible Blitz
          </Link>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
