import { Header } from '@/components/Header'

export default {
	logo: <span>Gorustbtc Docs</span>,
	project: {
		link: 'https://github.com/rusgot/cat20-token-fractal-bitcoin-frontend'
	},
	docsRepositoryBase: 'https://github.com/rusgot/cat20-token-fractal-bitcoin-frontend',

	navbar: {
		component: () => <Header />
	},
	footer: {
		component: () => <></>
	},
	themeSwitch: {
		component: () => <></>
	},
	sidebar: {
		toggleButton: false
	}
}
