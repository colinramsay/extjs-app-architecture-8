/**
 * @class Wizard.view.wizard.WizardController
 * @extends Ext.app.ViewController
 * Description
 */
Ext.define('Wizard.view.wizard.WizardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wizard',
    listen: {
        component: {
            '#next': { click: 'onNextClick' },
            '#prev': { click: 'onPrevClick' },
            '#restart': { click: 'onRestartClick' },
            '#finish': { click: 'onFinishClick' },
            'wizard-progress button': { click: 'onStepClick' }
        }
    },


    onNextClick: function() {
        var step = this.getView().getLayout().getActiveItem();

        if(!step.isValid || step.isValid()) {
            this.getViewModel().set('currentStepIndex', this.getViewModel().get('currentStepIndex') + 1);
            this.getViewModel().set('currentValidStepIndex', this.getViewModel().get('currentStepIndex'));
        } else if(!step.isValid()) {
            this.getViewModel().set('currentValidStepIndex', this.getViewModel().get('currentStepIndex'));
        }
    },


    onPrevClick: function() {
        this.getViewModel().set('currentStepIndex', this.getViewModel().get('currentStepIndex') - 1);
    },


    onRestartClick: function() {
        this.getViewModel().set('currentStepIndex', -1);
    },

    onFinishClick: function() {
        
    },

    onStepClick: function(btn) {
        this.getViewModel().set('currentStepIndex', btn.stepIndex);
    }
});