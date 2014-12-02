Ext.define('Wizard.model.Question', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name' },
        { name: 'required', type: 'boolean' },
        { name: 'questionText' },
        { name: 'type' },
        { name: 'answer' }
    ],

    validators: {
        answer: [
            'presence'
        ]
    },

    belongsTo: {
        model: 'Wizard.model.Step'
    }
});