/**
 * Metanthropes Early Access Introductory Module for Foundry VTT
 * Author: qp aka The Orchestrator
 *
 * Throughtout this project, I use the following syntax for comments:
 ** //! Marks a special comment that stands out (in Red) for critical notes.
 ** //* Marks a comment that is used as a section header (in Green) for better visibility.
 ** //? Marks a comment that is used for elaborating my intent (in Blue) for better readability.
 ** //todo Marks a comment that is used for marking (in Orange) potential optimization notes.
 *
 * To get automatic colloring for these comments in VSCode, you can use this extension:
 * aaron-bond.better-comments
 *
 */
//todo rename antagonists to NPCs
Hooks.once("init", async function () {
	//? Introductory Module Settings
	game.settings.register("metanthropes", "metaIntroductory", {
		name: "Enable Introductory Features",
		hint: `
			Enable this setting to gain access to the Introductory Module features.
			`,
		scope: "world", //? This specifies if it's a client-side setting
		config: true, //? This makes the setting appear in the module configuration
		requiresReload: true, //? If true, a client reload (F5) is required to activate the setting
		type: Boolean,
		default: true,
		onChange: (value) => {
			//? Do something when the setting is changed, if necessary
		},
	});
});
