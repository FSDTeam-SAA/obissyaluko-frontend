import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  FileText,
  HandHelping,
  LayoutDashboard,
  Plane,
  Settings,
} from "lucide-react";

type DashboardNavigationItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  exact?: boolean;
};

export const dashboardNavigation: DashboardNavigationItem[] = [
  {
    name: "Dashboard Overview",
    href: "/user-dashbord",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    name: "Visa Application",
    href: "/user-dashbord/visa-application",
    icon: FileText,
  },
  {
    name: "Study Application",
    href: "/user-dashbord/study-application",
    icon: FileText,
  },
  { name: "Tour Booking", href: "/user-dashbord/tour-booking", icon: Plane },
  {
    name: "Consultation",
    href: "/user-dashbord/consultation",
    icon: HandHelping,
  },
  { name: "Payments", href: "/user-dashbord/payments", icon: CreditCard },
  { name: "Setting", href: "/settings", icon: Settings },
];

export function isDashboardNavActive(
  pathname: string,
  item: DashboardNavigationItem,
) {
  if (item.exact) {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function getDashboardPageTitle(pathname: string) {
  return (
    dashboardNavigation.find((item) => isDashboardNavActive(pathname, item))
      ?.name ?? "Dashboard"
  );
}
