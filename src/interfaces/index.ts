export type NavLinkProps = {
  path: string;
  name: string;
  variant?: "light" | "dark";
};

export type PortfolioCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
};
