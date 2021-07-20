import "./bootstrap.js";
import CMS, { init } from "netlify-cms";
import "netlify-cms/dist/cms.css";
import { DateTimeZoneControl, DateTimeZonePreview } from "../src";

const config = {
	backend: {
		name: `test-repo`,
		login: false,
	},
	media_folder: `assets`,
	collections: [
		{
			name: `datetime`,
			label: `DateTime with Timezone`,
			files: [
				{
					file: `datetime.yml`,
					name: `datetime`,
					label: `DateTime`,
					fields: [
						{ name: `datetimezone`, label: `DateTime`, widget: `datetimezone` },
					],
				},
			],
		},
	],
};

CMS.registerWidget(`datetimezone`, DateTimeZoneControl, DateTimeZonePreview);

init({ config });
