const initImage = document.querySelector('#init');
const TargetText = document.querySelectorAll('.text');
const TargetFilter = document.querySelectorAll('.filter');

window.addEventListener('load', () => {

    [...TargetText].forEach((elm) => {
        elm.addEventListener('mouseover', (e) => {
            [...TargetText].forEach((elm) => {
                let flag = (elm != e.currentTarget);
                if (flag === true) {
                    elm.classList.add('opacity-active');
                }
            });
            [...TargetFilter].forEach((elm) => {
                elm.classList.remove('active');
            });
            initImage.classList.remove('active');
            getElementActive(elm);
        });
    });

    [...TargetText].forEach((elm) => {
        elm.addEventListener('mouseout', (e) => {
            [...TargetText].forEach((elm) => {
                elm.classList.remove('opacity-active');
            });
            [...TargetFilter].forEach((elm) => {
                elm.classList.remove('active');
            });
            initImage.classList.add('active');
        });
    });

    function getElementActive(elm){
        let targetId = elm.getAttribute('data-id');
        let targetImage = document.getElementById(targetId);
        targetImage.classList.add('active');
    }

});
