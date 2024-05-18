let interactive = document.querySelector('.author-interactive');
let interactiveList = document.querySelectorAll('.authors-li');

interactiveList.forEach(function (element) {

    element.addEventListener('mousedown', function (event) {

        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;

        element.style.zIndex = 1000;
        element.style.position = 'absolute';

        moveAt(event.pageX, event.pageY);

        document.addEventListener('mousemove', onMouseMove);

        element.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        });

        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            let newX = event.pageX - shiftX;
            let newY = event.pageY - shiftY;

            if (newX >= interactive.offsetLeft && newX <= interactive.offsetLeft + interactive.offsetWidth && 
                newY >= interactive.offsetTop && newY <= interactive.offsetTop + interactive.offsetHeight) {
                moveAt(event.pageX, event.pageY);
            }
        }

    })

    element.ondragstart = function () {
        return false;
    }

})

