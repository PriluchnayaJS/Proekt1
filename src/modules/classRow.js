const classRow = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach((img) => {
        let src = img.getAttribute('src');
        img.addEventListener('mouseenter', (e) => {

            e.target.src = e.target.dataset.img;

        });
        img.addEventListener('mouseleave', (e) => {

            e.target.src = src;
        });

    });

};

export default classRow;