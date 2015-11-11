var app = app || {};

$(function() {
app.ClubView = Backbone.View.extend({
    el: '#club',

    initialize: function( initialClub ) {
        this.collection = new app.Club( initialClub);
        this.render();
    },

    // render library by rendering each member in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderMember( item );
        }, this );
    },

    // render a member by creating a MemberView and appending the
    // element it renders to the club's element
    renderMember: function( item ) {
        var memberView = new app.MemberView({
            model: item
        });
        this.$el.append( memberView.render().el );
    }
});
});
