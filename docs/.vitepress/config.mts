import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Surge",
	description: "Documentation for the Surge boilerplate.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Overview', link: '/overview/getting-started' },
			{ text: 'Components', link: '/components/accordion' },
			{ text: 'Services', link: '/services/admin' },
		],
		
		sidebar: [
			{
				text: 'Overview',
				collapsed: false,
				items: [
					{ text: 'Getting Started', link: '/overview/getting-started' },
					{ text: 'Installation', link: '/overview/installation' },
					{ text: 'Theming', link: '/overview/theming' },
					{ text: 'Developing Server', link: '/overview/server' },
					{ text: 'Developing Client', link: '/overview/client' },
				]
			},
			{
				text: 'Components',
				collapsed: false,
				items: [
					{ text: 'Accordion', link: '/components/accordion' },
					{ text: 'Alert', link: '/components/alert' },
					{ text: 'AspectRatio', link: '/components/aspect-ratio' },
					{ text: 'Avatar', link: '/components/avatar' },
					{ text: 'Badge', link: '/components/badge' },
					{ text: 'Breadcrumb', link: '/components/breadcrumb' },
					{ text: 'Button', link: '/components/button' },
					{ text: 'Calendar', link: '/components/calendar' },
					{ text: 'Carousel', link: '/components/carousel' },
					{ text: 'Chart', link: '/components/chart' },
					{ text: 'Chips', link: '/components/chips' },
					{ text: 'ChronoPicker', link: '/components/chrono-picker' },
					{ text: 'Code', link: '/components/code' },
					{ text: 'Colour', link: '/components/colour' },
					{ text: 'ColourPicker', link: '/components/colour-picker' },
					{ text: 'ComboBox', link: '/components/combo-box' },
					{ text: 'Command', link: '/components/command' },
					{ text: 'ContextMenu', link: '/components/context-menu' },
					{ text: 'DarkMode', link: '/components/dark-mode' },
					{ text: 'DateField', link: '/components/date-field' },
					{ text: 'DatePicker', link: '/components/date-picker' },
					{ text: 'Design', link: '/components/design' },
					{ text: 'Dialog', link: '/components/dialog' },
					{ text: 'Disclosure', link: '/components/disclosure' },
					{ text: 'Drawer', link: '/components/drawer' },
					{ text: 'Dropdown', link: '/components/dropdown' },
					{ text: 'Editable', link: '/components/editable' },
					{ text: 'Editor', link: '/components/editor' },
					{ text: 'Footer', link: '/components/footer' },
					{ text: 'Form', link: '/components/form' },
					{ text: 'HoverCard', link: '/components/hover-card' },
					{ text: 'Icons', link: '/components/icons' },
					{ text: 'Listbox', link: '/components/listbox' },
					{ text: 'Media', link: '/components/media' },
					{ text: 'Menubar', link: '/components/menubar' },
					{ text: 'Modal', link: '/components/modal' },
					{ text: 'NativeSelect', link: '/components/native-select' },
					{ text: 'NavMenu', link: '/components/nav-menu' },
					{ text: 'Paginate', link: '/components/paginate' },
					{ text: 'Popover', link: '/components/popover' },
					{ text: 'Pricing', link: '/components/pricing' },
					{ text: 'Progress', link: '/components/progress' },
					{ text: 'Radio', link: '/components/radio' },
					{ text: 'RangeCalendar', link: '/components/range-calendar' },
					{ text: 'Rating', link: '/components/rating' },
					{ text: 'Resizable', link: '/components/resizable' },
					{ text: 'ScheduleMonth', link: '/components/schedule-month' },
					{ text: 'ScheduleWeek', link: '/components/schedule-week' },
					{ text: 'ScheduleYear', link: '/components/schedule-year' },
					{ text: 'ScrollArea', link: '/components/scroll-area' },
					{ text: 'Select', link: '/components/select' },
					{ text: 'Sidebar', link: '/components/sidebar' },
					{ text: 'Slider', link: '/components/slider' },
					{ text: 'Sonner', link: '/components/sonner' },
					{ text: 'Stats', link: '/components/stats' },
					{ text: 'Step', link: '/components/step' },
					{ text: 'Table', link: '/components/table' },
					{ text: 'Tabs', link: '/components/tabs' },
					{ text: 'Timeline', link: '/components/timeline' },
					{ text: 'TimePicker', link: '/components/time-picker' },
					{ text: 'Toast', link: '/components/toast' },
					{ text: 'Toggle', link: '/components/toggle' },
					{ text: 'ToggleGroup', link: '/components/toggle-group' },
					{ text: 'Toolbar', link: '/components/toolbar' },
					{ text: 'Tooltip', link: '/components/tooltip' },
					{ text: 'Transition', link: '/components/transition' },
					{ text: 'Typography', link: '/components/typography' },
					{ text: 'Utility', link: '/components/utility' },
				]
			},
			{
				text: 'Provided Services',
				collapsed: false,
				items: [
					{ text: 'Admin', link: '/services/admin' },
					{ text: 'Charts', link: '/services/charts' },
					{ text: 'Emails', link: '/services/emails' },
					{ text: 'File Uploads', link: '/services/uploads' },
					{ text: 'Magic Links', link: '/services/magic-links' },
					{ text: 'Payments', link: '/services/payments', collapsed: true, items: [
						{ text: 'Stripe', link: '/services/payments/stripe' },
						{ text: 'Paddle', link: '/services/payments/paddle' },
						{ text: 'LemonSqueezy', link: '/services/payments/lemon-squeezy' },
						{ text: 'AirWallex', link: '/services/payments/airwallex' },
					]},
					{ text: 'Sitemap and RSS', link: '/services/sitemap' },
					{ text: 'Social Authentication', link: '/services/social-auth' },
				]
			},
			{
				text: 'More Services',
				collapsed: false,
				items: [
					{ text: 'Advanced Search', link: '/more/search' },
					{ text: 'OpenAI', link: '/more/openai' },
					{ text: 'Replicate', link: '/more/replicate' },
					{ text: 'Roles and Permissions', link: '/more/rbac' },
					{ text: 'Websockets', link: '/more/websockets' },
				]
			},
			{
				text: 'Packages',
				collapsed: false,
				link: '/packages',
				items: [
					{ text: 'Assemble', link: '/packages/artisan-assemble' },
					{ text: 'Charter', link: '/packages/charter' },
					{ text: 'Vanguard', link: '/packages/vanguard' },
				]
			},

			
		],		
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/jdw5/vanguard' }
		]
	}
})
