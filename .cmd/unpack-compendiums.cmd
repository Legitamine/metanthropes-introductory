// Run this in a new Git cmd window when you have made changes to Compendiums within Foundry VTT
// Make sure FoundryVTT Electron app is closed before running this
// Select these commands, CTRL+C, and then right click on the Git cmd window, to paste them and press enter
// This should take about a minute and once complete, you can close the Git cmd window
//todo: use recursion and make it so that it's the same for modules and systems
npm install -g @foundryvtt/foundryvtt-cli
fvtt configure set installPath "F:/FoundryVTT/Foundry Virtual Tabletop"
fvtt configure set dataPath "F:/FoundryVTT/"
fvtt package workon "metanthropes-introductory" --type "Module"
fvtt package unpack "introductory-scenes" --out "F:/FoundryVTT/Data/modules/metanthropes-introductory/src/packs/introductory-scenes"
fvtt package unpack "how-to-play" --out "F:/FoundryVTT/Data/modules/metanthropes-introductory/src/packs/how-to-play"
fvtt package unpack "narrator-notes" --out "F:/FoundryVTT/Data/modules/metanthropes-introductory/src/packs/narrator-notes"
