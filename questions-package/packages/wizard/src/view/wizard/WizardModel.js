/**
 * @class Wizard.view.wizard.WizardModel
 * @extends Ext.app.ViewModel
 * Description
 */
Ext.define('Wizard.view.wizard.WizardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.wizard',
    requires: ['Wizard.model.Questionnaire'],
    links: {
        questionnaire: {
            type: 'Wizard.model.Questionnaire',
            id: 1
        }
    },

    data: {
        currentStepIndex: -1
    },

    formulas: {
        currentStep: function(get) {
            var i = get('currentStepIndex');
            return get('step' + i);
        },

        stepCount: function(get) {
            return get('questionnaire').steps().count();
        },

        isIntroduction: function(get) {
            return get('currentStepIndex') === -1;
        },

        isConclusion: function(get) {
            return get('currentStepIndex') === get('stepCount');
        },

        activePane: function(get) {
            return get('currentStepIndex') + 1;
        }
    }
});