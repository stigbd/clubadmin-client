var app = app || {};

app.Club = Backbone.Collection.extend({
    model: app.Member,
    url: 'http://localhost:8080/ClubMemberService/member'
});
