//=============================================================================
// 简洁菜单.js
//=============================================================================

/*:
 *@plugindesc 只保留了命令菜单，物品中只保留了物品和重要物品两项。
 *@author black197
 *@help 命令菜单中的项目（如"物品"、"技能"）可在"数据库"-"系统"-"菜单命令"中进行更改。
 */

(function() {
    Window_ItemCategory.prototype.maxCols = function() {
        return 2;
        //return 4;
};
    Window_ItemCategory.prototype.makeCommandList = function() {
        this.addCommand(TextManager.item,    'item');
        //this.addCommand(TextManager.weapon,  'weapon');
        //this.addCommand(TextManager.armor,   'armor');
        this.addCommand(TextManager.keyItem, 'keyItem');
};
    var _Scene_Menu_createGoldWindow = Scene_Menu.prototype.createGoldWindow;
        Scene_Menu.prototype.createGoldWindow = function() {
        this._goldWindow = new Window_Gold(0, 0);
        this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
        //this.addWindow(this._goldWindow);
};
    var _Scene_Menu_createStatusWindow = Scene_Menu.prototype.createStatusWindow;
        Scene_Menu.prototype.createStatusWindow = function() {
        this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
        //this.addWindow(this._statusWindow);
};
})();
