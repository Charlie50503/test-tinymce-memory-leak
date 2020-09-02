// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols
// const toolbar = ['formatting | alignment']
const toolbar = [{
		name: 'preview',
		items: ['preview']
	},
	{
		name: 'edit',
		items: ['paste', 'cut', 'copy']
	},
	{
		name: 'history',
		items: ['undo', 'redo']
	},
	{
		name: 'styles',
		items: []
	},
	{
		name: 'formatting',
		items: ['formatting']
	},
	{
		name: 'alignment',
		items: ['alignment']
	},
	{
		name: 'lists',
		items: ['bullist', 'numlist', 'outdent', 'indent']
	},
	{
		name: 'media',
		items: ['image']
	},
	{
		name: 'other',
		items: ['link', 'help']
	}
];

const toolbar_groups = {
	formatting: {
		text: "text",
		tooltip: 'Formatting',
		items: 'styleselect|bold|italic|forecolor|backcolor|fontsizeselect|removeformat|table',
	},
	alignment: {
		icon: 'align-left',
		tooltip: 'alignment',
		items: 'alignleft aligncenter alignright alignjustify',
	},
}


export {
	toolbar,
	toolbar_groups
}
