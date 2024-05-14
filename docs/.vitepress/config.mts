import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Surge",
	description: "Documentation for the Surge boilerplate.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],
		
		sidebar: [
			{
				text: 'Overview',
				collapsed: false,
				items: [
					{ text: 'Getting Started', link: '/markdown-examples' },
					{ text: 'Installation', link: '/markdown-examples' },
					{ text: 'Theming', link: '/markdown-examples' },
					{ text: 'Packages', link: '/markdown-examples' },
					{ text: 'Developing Server', link: '/markdown-examples' },
					{ text: 'Developing Client', link: '/markdown-examples' },
				]
			},
			{
				text: 'Components',
				collapsed: false,
				items: [
					{ text: 'Accordion', link: '/components/accordion' },
					{ text: 'Alert', link: '/components/alert' },
					{ text: 'AspectRatio', link: '/components/alert' },
					{ text: 'Avatar', link: '/components/alert' },
					{ text: 'Badge', link: '/components/alert' },
					{ text: 'Breadcrumb', link: '/components/alert' },
					{ text: 'Button', link: '/components/button' },
					{ text: 'Calendar', link: '/components/button' },
					{ text: 'Carousel', link: '/components/button' },
					{ text: 'Chart', link: '/components/button' },
					{ text: 'Chips', link: '/components/button' },
					{ text: 'ChronoPicker', link: '/components/button' },
					{ text: 'Code', link: '/components/button' },
					{ text: 'Colour', link: '/components/button' },
					{ text: 'ColourPicker', link: '/components/button' },
					{ text: 'ComboBox', link: '/components/button' },
					{ text: 'Command', link: '/components/button' },
					{ text: 'ContextMenu', link: '/components/button' },
					{ text: 'DarkMode', link: '/components/button' },
					{ text: 'DateField', link: '/components/button' },
					{ text: 'DatePicker', link: '/components/button' },
					{ text: 'Description', link: '/components/button' },
					{ text: 'Design', link: '/components/button', collapsed: true, items: [
						{ text: 'Meteors', link: '/components/button' },
					]},
					{ text: 'Dialog', link: '/components/button' },
					{ text: 'Disclosure', link: '/components/button' },
					{ text: 'Drawer', link: '/components/button' },
					{ text: 'Dropdown', link: '/components/button' },
					{ text: 'Editable', link: '/components/button' },
					{ text: 'Editor', link: '/components/button' },
					{ text: 'Footer', link: '/components/button' },
					{ text: 'Form', link: '/components/button', collapsed: true, items: [
						{ text: 'Input', link: '/components/button' },
						{ text: 'Form', link: '/components/button' },
						{ text: 'Checkbox', link: '/components/button' },						
					]},
					{ text: 'HoverCard', link: '/components/button' },
					{ text: 'Icons', link: '/components/button' },
					{ text: 'Listbox', link: '/components/button' },
					{ text: 'Media', link: '/components/button', collapsed: true, items: [
						{ text: 'Audio', link: '/components/button' },
						{ text: 'Image', link: '/components/button' },
						{ text: 'Video', link: '/components/button' },						
					]},
					{ text: 'Menubar', link: '/components/button' },
					{ text: 'Modal', link: '/components/button' },
					{ text: 'NativeSelect', link: '/components/button' },
					{ text: 'NavMenu', link: '/components/button' },
					{ text: 'Paginate', link: '/components/button' },
					{ text: 'Popover', link: '/components/button' },
					{ text: 'Pricing', link: '/components/button' },
					{ text: 'Progress', link: '/components/button' },
					{ text: 'Radio', link: '/components/button' },
					{ text: 'RangeCalendar', link: '/components/button' },
					{ text: 'Rating', link: '/components/button' },
					{ text: 'Resizable', link: '/components/button' },
					{ text: 'ScheduleMonth', link: '/components/button' },
					{ text: 'ScheduleYear', link: '/components/button' },
					{ text: 'ScheduleWeek', link: '/components/button' },
					{ text: 'ScrollArea', link: '/components/button' },
					{ text: 'Select', link: '/components/button' },
					{ text: 'Sidebar', link: '/components/button' },
					{ text: 'Slider', link: '/components/button' },
					{ text: 'Stats', link: '/components/button' },
					{ text: 'Step', link: '/components/button' },
					{ text: 'Table', link: '/components/button' },
					{ text: 'Tabs', link: '/components/button' },
					{ text: 'Thumbnail', link: '/components/button' },
					{ text: 'Timeline', link: '/components/button' },
					{ text: 'TimePicker', link: '/components/button' },
					{ text: 'Toast', link: '/components/button' },
					{ text: 'Toggle', link: '/components/button' },
					{ text: 'ToggleGroup', link: '/components/button' },
					{ text: 'Toolbar', link: '/components/button' },
					{ text: 'Tooltip', link: '/components/button' },
					{ text: 'Transition', link: '/components/button' },
					{ text: 'Typography', link: '/components/button', collapsed: true, items: 
						[
							{ text: 'Heading', link: '/components/button' },
							{ text: 'Muted', link: '/components/button' },
							{ text: 'Text', link: '/components/button' },
						] 
					},
					{ text: 'Utility', link: '/components/button' },

				]
			},
			{
				text: 'Provided Services',
				collapsed: false,
				items: [
					{ text: 'Charts', link: '/components/button' },
					{ text: 'Emails', link: '/components/button' },
					{ text: 'Payments', link: '/components/alert' },
					{ text: 'Sitemap and RSS', link: '/components/button' },
					{ text: 'Social Authentication', link: '/components/accordion' },
				]
			},
			{
				text: 'More Services',
				collapsed: false,
				items: [
					{ text: 'Advanced Search', link: '/components/button' },
					{ text: 'Open AI', link: '/components/button' },
					{ text: 'Replicate AI', link: '/components/button' },
					{ text: 'Roles and Permissions', link: '/components/button' },
					{ text: 'Websockets', link: '/components/button' },
				]
			},

			
		],
		
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		]
	}
})
