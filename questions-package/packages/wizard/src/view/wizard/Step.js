Ext.define('Wizard.view.wizard.Step', {
    extend: 'Ext.form.Panel',
    xtype: 'wizard-step',

    defaults: { labelSeparator: '', labelAlign: 'top', msgTarget: 'under' },

    config: {
        step: null
    },

    applyStep: function(step) {
        
        var items = [{ xtype: 'container', html: step.get('introduction') }];

        step.questions().each(function(q) {
            items.push({
                xtype: 'textfield', fieldLabel: q.get('questionText'), allowBlank: !q.get('required')
            });
        });
    
        this.add(items);
    }
});