Ext.define('Wizard.model.Questionnaire', {
    extend: 'Ext.data.Model',
    requires: ['Wizard.model.Step'],
    fields: [
        { name: 'title' },
        { name: 'introduction' },
        { name: 'conclusion' }
    ],
    hasMany: [{
        name: 'steps',
        model: 'Wizard.model.Step'
    }],

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/questionnaires'
    }
});