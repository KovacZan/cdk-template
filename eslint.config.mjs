import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
	{ ignores: ["**/*.js", "**/*.d.ts", "cdk.out/**", "dist/**"] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	prettier,
];
