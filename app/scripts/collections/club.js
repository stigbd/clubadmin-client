var app = app || {};

app.Club = Backbone.Collection.extend({
    model: app.Member
});
