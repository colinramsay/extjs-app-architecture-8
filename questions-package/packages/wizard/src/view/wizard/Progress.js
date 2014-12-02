Ext.define('Wizard.view.wizard.Progress', {
    extend: 'Ext.Container',
    xtype: 'wizard-progress',
    defaultType: 'button',
    layout: {
        type: 'hbox'
    },
    config: {
        stepCount: null
    },
    defaultBindProperty: 'stepCount',
    applyStepCount: function(stepCount) {
        if(Ext.isNumber(stepCount)) {
            this.removeAll();

            this.add({ text: 'Start', stepIndex: -1 })
            
            for(var i = 0; i < stepCount; i++) {
                this.add({ text: i + 1, stepIndex: i, bind: { disabled: '{step' + i + '.isValid}' } });
            }   

            this.add({ text: 'End', stepIndex: stepCount })
        }

        return stepCount;
    }
});