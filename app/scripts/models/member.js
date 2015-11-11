var app = app || {};

app.Member = Backbone.Model.extend({
    defaults: {
        coverImage: 'images/placeholder.png',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});
