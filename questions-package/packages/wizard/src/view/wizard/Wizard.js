Ext.define('Wizard.view.wizard.Wizard', {
    extend: 'Ext.Panel',
    xtype: 'wizard',
    requires: [
        'Wizard.form.field.Text', 'Wizard.view.wizard.WizardModel',
        'Wizard.view.wizard.Progress', 'Wizard.view.wizard.WizardController',
        'Wizard.view.wizard.Step'
    ],
    cls: 'wizard',
    viewModel: 'wizard',
    controller: 'wizard',
    layout: 'card',
    config: {
        questionnaire: null
    },
    bind: {
        questionnaire: '{questionnaire}',
        activeItem: '{activePane}'
    },
    header: {
        bind: '{currentStepIndex}'
    },

    initComponent: function() {     
        this.callParent();

        this.getViewModel().bind('{currentStepIndex}', function(v) {
            console.log('currentStepIndex: ' + v);
        });

        this.getViewModel().bind('{currentValidStepIndex}', function(v) {
            console.log('currentValidStepIndex: ' + v);
        });

        this.getViewModel().bind({ bindTo:'{questionnaire}', deep: true }, function(questionnaire) {
            console.log(questionnaire);
            this.add({ xtype: 'container', bind: { html: '{questionnaire.introduction}' } });

            questionnaire.steps().each(function(step, i) {
                this.getViewModel().set('step' + i, step);
                this.add({ xtype: 'wizard-step', bind: { step: '{step' + i + '}' } });

                this.getViewModel().bind('{step0}', function(s) {
                    console.log(s)
                });
            }, this);

            this.add({ xtype: 'container', bind: { html: '{questionnaire.conclusion}' } });

        }, this);
    },

    onCurrentStepValidityChanged: function() {
        console.log(arguments); 
    },


    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                { text: 'Restart', itemId: 'restart', bind: { disabled: '{isIntroduction}' } },
                { text: 'Previous', itemId: 'prev', bind: { disabled: '{isIntroduction}' } },
                { text: 'Next', itemId: 'next', bind: { disabled: '{isConclusion}' } },
                { text: 'Finish', itemId: 'finish', bind: { disabled: '{!isConclusion}' } }
            ]
        },
        {
            xtype: 'wizard-progress',
            dock: 'bottom', bind: '{stepCount}'
        }
    ]
});