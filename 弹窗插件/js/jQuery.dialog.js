;(function($){
  //定义构造函数
  var MyDialog=function(obj,opt){
    this.$element=obj,
    this.defaults={
      'headTxt' : 'b',
      'bodyTxt' : 'bb',
      'headBg' : 'white',
      'bodyBg' : 'white',
      'footBg' : 'white'

    },this.options=$.extend({},this.defaults,opt);
  }
 //定义构造方法
MyDialog.prototype={
  dialogTxt : function(){
  $('.dialogBack').css({display : 'block'});
    $('html').css({overflow : 'hidden'});
    $('#dialogMain').animate({top : 20 , opacity : 'show'},230);
    $('.btn').on('click',function(){
      $('#dialogMain').animate({top : -20 , opacity : 'hide'},250,function(){
        $('html').css({overflow : 'auto'});
        $('.dialogBack').css({display : 'none'});

      });
    });
    this.$element.children('.dialogHead').text(this.options.headTxt);
    this.$element.children('.dialogBody').text(this.options.bodyTxt);
    return this.$element;
  },
  dialogBgcolor : function(){
    $('dialogHead').css({background : this.options.headBg});
    $('dialogBody').css({background : this.options.bodyBg});
    $('dialogFoot').css({background : this.options.footBg});
    return this.$element;
  }
};

$.fn.dialogPlugin=function(options){
  var myDialog = new MyDialog($(this),options);
  return myDialog;
}
})(jQuery);
