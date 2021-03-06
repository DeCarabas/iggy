Iggy: A Data-Modelling and Rules System
=======================================

(Really for building Dungeons and Dragons 4e characters)
--------------------------------------------------------

This is a web-based character editor for D&D 4e. It's in a pretty bare-bones
state right now, but it kinda has a character sheet UI that's looking better
all the time.

src\igweb has the site source code.

Within that, js\model.js defines the core engine; it handles things like
tracking stats and granting rules elements and computing values and tracking
available selections. In theory this engine could support a lot of different
data models. In practice it's being built to support this one. Still, we try
not to let DnD 4e specific behaviors creep in.

js\dnd4model.js defines DnD 4e extensions to the core model (e.g., the
function that computes an ability score modifier). It will eventually define
an inventory model, how characters wear things, &c.

js\dnd\all.js contains all the relevant DnD 4e rules, defining all the races,
classes, powers, feats, skills, &c. That's where the all the details
are. It's currently auto-generated off of the standard wizards character
builder data, by the program that lives in src\cbimporter.

sheet.html is the start of the UI; it currently has the first page of a
standard DnD 4e character sheet mocked up and bound to a character model that
has been granted some dummy stuff. The code for the ui is in js\sheetui.js.

You can put the whole thing together with grunt, in the usual way:

    npm install
    grunt


Other Code
----------

Other stuff lives in src\cbimporter and src\dndi; they both do lifting and
exploration of the rules that were in the old 4e character builder (not the
silverlight web one, the standalone desktop one). That stuff can be built by
loading iggy.sln.

And that's where we are at the moment.

TODO
====

Converter
---------
- Parse/emit prerequisites
- Run filters and prereqs
- Understand additional elements/attributes in rules

Sheet
-----
- UI for power selection
- Serialize model as JSON
- Save/Load character
- Import/Export character builder characters
- Items/Equipment/Inventory
- Level Up Button
