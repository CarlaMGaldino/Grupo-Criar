

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.collapse').forEach(collapse => {
            collapse.classList.remove('show');
        });

        const targetId = button.getAttribute('aria-controls');
        const targetCollapse = document.getElementById(targetId);
        targetCollapse.classList.add('show');
    });
});
