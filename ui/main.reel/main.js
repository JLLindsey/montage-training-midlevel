/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.templateObjects.logoutCondition.condition = false;
            }
        }
    },
    logoutActionHandler: {
        value: function (event) {
            this.dispatchEventNamed("loginEvent", true, false, {successfule;false});
            event.stopPropogation();
        }
    },
    handleLogin: {
        value: function (event) {
         this.loggedIn = event.detail.successful;
            if (this.loggedIn) {
             this.templateObjects.logoutCondition.condition = true;
             this.templateObjects.substitution.switchValue = "default";   
            } else {
                this.templateObjects.logoutCondition.condition = false;
                this.templateObjects.substitution.switchValue = "login"; 
            }
                
        }
    }
});
