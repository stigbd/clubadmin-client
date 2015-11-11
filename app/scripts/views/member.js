var app = app || {};

$(function() {
app.MemberView = Backbone.View.extend({
    tagName: 'div',
    className: 'memberContainer',
    template: _.template( $( '#memberTemplate' ).html() ),

    events: {
        'click .delete': 'deleteMember'
    },

    deleteMember: function() {
        //Delete model
        this.model.destroy();

        //Delete view
        this.remove();
    },

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    }
});
});
