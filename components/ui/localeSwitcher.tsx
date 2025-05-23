import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./localeSwitcherSelect";

const LocaleSwitcher = () => {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();
	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
			<option value="en" className="cursor-pointer">
				{t("en")}
			</option>
			<option value="ru">{t("ru")}</option>
		</LocaleSwitcherSelect>
	);
};

export default LocaleSwitcher;
