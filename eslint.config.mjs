import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	...compat.config({
		extends: ["next"],
		rules: {
			"no-restricted-imports": [
				"error",
				{
					name: "next/link",
					message: "import only from i18n",
				},
				{
					name: "next/navigation",
					message: "import only from i18n",
					importNames: [
						"redirect",
						"permanentRedirect",
						"useRouter",
						"usePathname",
					],
				},
			],
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@next/next/no-img-element": "off",
		},
	}),
];

export default eslintConfig;
