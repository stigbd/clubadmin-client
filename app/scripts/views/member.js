var app = app || {};

$(function() {
app.MemberView = Backbone.View.extend({
    tagName: 'div',
    className: 'memberContainer',
    template: _.template( $( '#memberTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    }
});
});
