var Presentation = function(options) {
  this.slides = options.slides || [];
  this.container_id = options.main_container || 'presentation';
  this.navigation_container_id = options.navigation_container || 'navigation-info';
  this.current_slide_id = 0;
  this.slides_size = this.slides.length - 1;
  this.id = options.id;

  if (!this.id) {
    alert('presentation id not set');
    return false;
  }

  this.draw = function() {
    var html = '';
    for(var i in this.slides) {
      html += '<image src="' + this.slides[i].src + '" height="300" class="slide slide-'+ this.id + '" id="slide-' + i + '-'+this.id+'">';
    }
    $("#" + this.container_id).html(html);
    this.show_slide();
  }

  this.next = function(){
    if (this.current_slide_id + 1 > this.slides_size)
      return false;
    this.current_slide_id += 1;
    this.show_slide();
  }

  this.prev = function(){
    if (this.current_slide_id - 1 < 0)
      return false;
    this.current_slide_id -= 1;
    this.show_slide();
  }

  this.current_slide = function(){
    return this.slides[this.current_slide_id];
  }

  this.current_navigation_info = function(){
    return 'page ' + (this.current_slide_id + 1) + ' of ' + (this.slides_size + 1);
  }

  this.show_slide = function(){
    $(".slide-" + this.id).hide();
    $("#slide-" + this.current_slide_id + '-' + this.id).show();
    $("#" + this.navigation_container_id).html(this.current_navigation_info());
  }
}
