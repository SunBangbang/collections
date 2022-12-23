import {
	Button,
	CellGroup,
	Field,
	Checkbox,
	Notify,
	Swipe,
	SwipeItem,
	NoticeBar,
	Tab,
	Tabs,
	Tabbar,
	TabbarItem,
	NavBar,
	Search,
	Icon,
	Uploader,
	ActionSheet,
	Loading 
} from 'vant';

export function vant(app) {
	app.use(Button);
	app.use(CellGroup);
	app.use(Field);
	app.use(Checkbox);
	app.use(Notify);
	app.use(Swipe);
	app.use(SwipeItem);
	app.use(NoticeBar);
	app.use(Tab);
	app.use(Tabs);
	app.use(Tabbar);
	app.use(TabbarItem);
	app.use(NavBar);
	app.use(Search);
	app.use(Icon);
	app.use(Uploader);
	app.use(ActionSheet);
	app.use(Loading);
}
