export default function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные не прогружены, ошибка: ' + response.status);
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
            goodsWrapper.innerHTML = '<div style="color:red; font-size: 30px">Упс, что-то пошло не так!</div>';
        });
}