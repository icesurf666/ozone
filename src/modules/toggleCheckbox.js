export default function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach((el) => {
        el.addEventListener('change', function() {
            if (this.checked === true) {
                this.nextElementSibling.classList.add('checked');
                // nextElementSibling получить первого соседа (первый чайлд)
                // без if else this.nextElementSibling.classList.toggle('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}