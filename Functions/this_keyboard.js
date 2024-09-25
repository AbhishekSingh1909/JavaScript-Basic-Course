const video = { 
    title: 'a',
    tags: ['x', 'y', 'z'],
    showTags() { 
        //this.tags.forEach((tag)  { // arrow function belongs to current object
         //   console.log(this, tag)
        //},this);
        this.tags.forEach(function(tag)  { // regular function belongs to window or global object
            console.log(this, tag)
        },this);
    }
}

video.showTags()