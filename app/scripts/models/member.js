var app = app || {};

app.Member = Backbone.Model.extend({
    defaults: {
        coverImage: 'images/placeholder.png',
        id: 'Unknown',
        firstName: 'Unknown',
        lastName: 'Unknown',
        sex: 'None'
    }
});
