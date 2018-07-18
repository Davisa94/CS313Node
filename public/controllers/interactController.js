// const interact = require('interactjs');
// import interact from 'interact.js';

  // target elements with the "draggable" class
  interact('.draggable')
    .draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: true,

      // call this function on every dragmove event
      onmove: dragMoveListener,
      // call this function on every dragend event
      onend: function (event) {
        var textEl = event.target.querySelector('p');

        textEl && (textEl.textContent =
          'moved a distance of '
          + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                       Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px');
      }
    });

    function dragMoveListener (event) {
      event.target.style.position = 'absolute';
      event.target.parentNode.appendChild(target);
      // var top = 0;
      // for(var node of event.target.parentNode.childNodes)
      // {
      //     if(node.style.zIndex >= top){
      //       top = node.style.zIndex;
      //     }
      // }
      // top += 1;
      var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;




      // translate the element
      // var maxZ = Math.max.apply(null,
      // $.map($('body > *'), function(e,n) {
      //   if ($(e).css('position') != 'static')
      //     return parseInt($(e).css('z-index')) || 1;
      // }));
      //   target.style.background = 'green';
      //   console.log(parseInt($(e).css(event.target.style.zIndex)));
      //   target.style.zIndex = maxZ + 1;
      //   console.log(event.target.style.zIndex);


      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);

      //Put on top:
      // target.style.position = "relative";
      target.style.position = 'relative';


    }

    // this is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
