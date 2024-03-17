import { Auth } from "@/components/auth/auth";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";
import { Wellcome } from "@/components/wellcome/wellcome";

export default function Authorize() {
  return (
    <div className="h-full px-4 flex flex-col justify-center items-center gap-12">
      <Wellcome />
      <Auth />
    </div>
  );
}
