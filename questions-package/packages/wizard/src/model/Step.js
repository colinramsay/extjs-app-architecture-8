Ext.define('Wizard.model.Step', {
    extend: 'Ext.data.Model',
    requires: ['Wizard.model.Question'],
    fields: [
        { name: 'title' },
        { name: 'introduction' }
    ],

    hasMany: [{
        name: 'questions',
        model: 'Wizard.model.Question'
    }],

    belongsTo: {
        model: 'Wizard.model.Questionnaire'
    }
});