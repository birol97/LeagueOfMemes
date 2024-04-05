import SideNav from '@/app/ui/dashboard/sidenav';
import TournamentBracket from '@/app/ui/tournament/tournament_bracket';
import { inter } from '@/app/ui/fonts';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
</html>
  );
}
