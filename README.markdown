Igor: A Data-Modelling and Rules System
=======================================

(Really for building Dungeons and Dragons 4e characters)
--------------------------------------------------------

This is a web-based character editor for D&D 4e. It's in a pretty
bare-bones state right now, but it's starting to have the engine bits
all in place. Probably the best thing to do right now is to look at
the tests in src\igweb\test; they describe how to use the system.

The idea is to have a more or less generic rules system, which has the
support needed for doing 4e character building but has very little
that is specific to 4e. That's in src\igweb\js\model.js. I'll then
layer on top of it extensions and specific data to support Dungeons
and Dragons characters, and then build UI specific to D&D.

It is not a goal to build UI for the general-purpose model engine, so
don't worry about it.

And that's where we are at the moment.
