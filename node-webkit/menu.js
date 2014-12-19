"use strict";
var gui = require('nw.gui');
var win = gui.Window.get();
if (process.platform == 'darwin') {
    var mb = new gui.Menu({type: "menubar"});
    mb.createMacBuiltin("Quyo");
    win.menu = mb;
}