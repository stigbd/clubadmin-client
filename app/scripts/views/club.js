var app = app || {};

$(function() {
  app.ClubView = Backbone.View.extend({
    el: '#club',

    initialize: function() {
      this.collection = new app.Club();
      this.collection.fetch({reset: true});
      this.render();

      this.listenTo( this.collection, 'add', this.renderMember );
      this.listenTo( this.collection, 'reset', this.render );
    },

    events:{
      'click #add':'addMember'
    },

    addMember: function( e ) {
      e.preventDefault();

      var formData = {};

      $( '#addMember div' ).children( 'input' ).each( function( i, el ) {
        if( $( el ).val() != '' )
        {
          formData[ el.id ] = $( el ).val();
        }
        // Clear input field value
        $( el ).val('');
      });

      this.collection.create( new app.Member( formData ) );
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
