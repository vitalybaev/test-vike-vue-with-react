import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Head from "./layouts/HeadDefault.jsx";
import Layout from "./layouts/LayoutDefault.jsx";

// Default config (can be overridden by pages)
export default {
	Layout,
	Head,

	// <title>
	title: "[React] My Vike App",
	extends: [vikeReact],
} satisfies Config;
