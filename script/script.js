window.addEventListener('scroll', function() {
    const heroImg = document.querySelector('section div:nth-child(1) div img');
    const storeImg = document.getElementById('storeImg');
    const eifellTowerImg = document.getElementById('eiffelTowerImg');
    const featureContainer = document.getElementById('featureContainer');
    const bakingImg = document.getElementById('bakingImg');
    const ingredientsContainer = document.getElementById('ingredientsContainer');

    const scrollY = window.scrollY;

    const initialWidthHeroImg = 240; 
    const widthIncreaseRateHeroImg = 1.2;
    const windowHeight = window.innerHeight;
    const storeImgTop = storeImg.getBoundingClientRect().top;

    heroImg.style.width = `${initialWidthHeroImg + scrollY * widthIncreaseRateHeroImg}px`;

    if (featureContainer.getBoundingClientRect().bottom < 360) {
        const scrollY = window.scrollY;
        bakingImg.style.marginLeft = Math.min(0, 384 - scrollY * 0.2);
    } else {
        bakingImg.style.marginLeft = Math.max(500, 384 + scrollY * 0.05);
    }

    if (bakingImg.getBoundingClientRect().bottom < 636) {
        const scrollY = window.scrollY;

        ingredientsContainer.style.opacity = 1;

        const images = ingredientsContainer.querySelectorAll('div');

        if (bakingImg.getBoundingClientRect().bottom < 3500) {
            images[0].style.opacity = 2;
        }  
        
        if (bakingImg.getBoundingClientRect().bottom < 3400) {
            images[1].style.opacity = 1;
        } 
        
        if (bakingImg.getBoundingClientRect().bottom < 3300) {
            images[2].style.opacity = 1;
        }
    } 
     
    if (bakingImg.getBoundingClientRect().bottom > 90) {
        const images = ingredientsContainer.querySelectorAll('div');

        images.forEach(e => {
            e.style.opacity = 0;
        })
    }
    
    if (storeImgTop < 0) {
        eifellTowerImg.style.objectPosition = `center ${Math.max(0, Math.round(70 - ((windowHeight - storeImgTop) / windowHeight * 50)))}%`;
    } else {
        eifellTowerImg.style.objectPosition = 'center 70%';
    }
});
