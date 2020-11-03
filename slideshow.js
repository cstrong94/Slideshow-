 
//  DO NOT RUN BEFORE PROOFREADING
 
 
 let slideshow = {
            photolist: ['apple', 'orange', ' bannana', 'cherry', 'mangoes'],

            currentPhotoIndex: 0,

            nextPhoto: function(){
                if(this.currentPhotoIndex < this.photolist.length - 1){
                    this.currentPhotoIndex++;
                    console.log(this.photolist[this.currentPhotoIndex]);
                }else{
                    console.log('end of slideshow');
                    this.pause();
                }
            },

            prevPhoto: function(){
                if(this.currentPhotoIndex > 0){
                    this.currentPhotoIndex--;
                    console.log(this.photolist[this.currentPhotoIndex]);
                }else{
                    console.log('Start of slideshow!');
                    this.pause();
                }       
            },

            getCurrentPhoto: function() {
                return this.photolist[this.currentPhotoIndex]
            },

            playInterval: null,
            
            play: function() {
                let self = this;
                self.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
                },
            

            pause: function() {
                let self = this;
                clearInterval(self.playInterval);
            }
              

        }

        slideshow.play();

    