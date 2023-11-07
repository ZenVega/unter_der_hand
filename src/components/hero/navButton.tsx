import { Icon, IconProps } from "@components/icon";

interface props {
  label: string;
  href: string;
  lucide_id: IconProps["name"];
}
export const NavButton = ({ label, href, lucide_id }: props) => {
  return (
    <li className="bg-udh_orange w-10 h-10 rounded-full flex items-center justify-center">
      <a href={href}>
        <Icon name={lucide_id} color="#1c4441" />
      </a>
    </li>
  );
};
