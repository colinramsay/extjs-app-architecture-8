Ext.define('Questions.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Wizard.view.wizard.Wizard'
    ],

    alias: 'controller.main',

    listen: {
        controller: {
            'wizard': {
                'wizardcomplete': function(q) {
                    console.log(q);
                }
            }
        }
    },

    onClickButton: function () {
        this.wizard = Ext.create('Ext.Window', {
            header: false, modal: true, layout: 'fit',
            autoShow: true, resizable: false,
            width: 800, height: 600, 
            items: [{ xtype: 'wizard' }]
        });

        this.wizard.down('wizard').load(1);
    }
});
