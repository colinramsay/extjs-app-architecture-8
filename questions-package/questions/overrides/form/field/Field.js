Ext.define('Questions.form.field.Field', {
	override: 'Ext.form.field.Text',

	publishValue: function () {
        var me = this;

        //if (me.rendered && !me.getErrors().length) {
        if (me.rendered) {
            me.publishState('value', me.getValue());
        }
    },

    constructor: function(cfg) {
        if(!cfg.required) {            
            this.validateOnBlur = false;
            this.validateOnChange = false
        }

        this.callParent(arguments);
    }
})