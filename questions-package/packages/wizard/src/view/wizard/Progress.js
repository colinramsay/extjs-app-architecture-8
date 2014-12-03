Ext.define('Wizard.view.wizard.Progress', {
    extend: 'Ext.Container',
    xtype: 'wizard-progress',
    defaultType: 'button',
    layout: {
        type: 'hbox'
    },
    baseCls: 'wizard-progress',
    config: {
        stepCount: null
    },
    defaultBindProperty: 'stepCount',


    

    applyStepCount: function(stepCount) {
        if(Ext.isNumber(stepCount)) {
            this.removeAll();

            this.add({ text: 'Start', stepIndex: -1 })
            
            for(var i = 0; i < stepCount; i++) {
                this.add({
                    text: i + 1, stepIndex: i, bind: { disabled: '{isDisabled}' },
                    viewModel: {
                        data: {
                            stepIndex: i
                        },
                        formulas: {
                            isDisabled: function(get) {

                                if(get('stepIndex') === 0) {
                                    return false;
                                }

                                return get('stepIndex') >= ( get('currentValidStepIndex'));
                            }
                        }
                    }
                });
            }   

            this.add({
                text: 'End', stepIndex: stepCount,
                viewModel: {
                    data: {
                        stepIndex: stepCount
                    },
                    formulas: {
                        dis: function(get) {
                            console.log(get('stepIndex'), get('stepCount'));
                            return get('currentValidStepIndex') !== get('stepCount') + 1;
                        }
                    }
                },
                bind: { disabled: '{dis}' }
            })
        }

        return stepCount;
    }
});