<template>
    <nav>
        <div class="navbar-first">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="18" height="18"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M146.57267,56.10067c-0.7052,0.44147 -17.4924,9.75813 -17.4924,30.41533c0.7912,23.55827 21.18467,31.82 21.5344,31.82c-0.34973,0.44147 -3.0788,11.25453 -11.1628,22.58933c-6.4156,9.76387 -13.5364,19.608 -24.34947,19.608c-10.2856,0 -13.97787,-6.50733 -25.84587,-6.50733c-12.7452,0 -16.35147,6.50733 -26.1096,6.50733c-10.81307,0 -18.46133,-10.3716 -25.22667,-20.04373c-8.7892,-12.6592 -16.25973,-32.5252 -16.52347,-51.6c-0.17773,-10.10787 1.76013,-20.04373 6.67933,-28.4832c6.94307,-11.782 19.33853,-19.78 32.87493,-20.04373c10.3716,-0.34973 19.60227,7.1208 25.93187,7.1208c6.06587,0 17.4064,-7.1208 30.2376,-7.1208c5.5384,0.00573 20.30747,1.67413 29.45213,15.738zM86.00573,38.34453c-1.84613,-9.23067 3.2508,-18.46133 7.998,-24.34947c6.06587,-7.1208 15.64627,-11.954 23.908,-11.954c0.52747,9.23067 -2.81507,18.2836 -8.7892,24.87693c-5.36067,7.1208 -14.59133,12.48147 -23.1168,11.42653z"></path></g></g></svg>
            <p>Finder</p>
            <p>Fichier</p>
            <p>Édition</p>
            <p>Présentation</p>
            <p>Aller</p>
            <p>Fenêtre</p>
            <p>Aide</p>
        </div>
        <div class="navbar-last">
            <div>
                <p>100 %</p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAoklEQVRIie2VbQrCMAxAG5HeST3fnJ5Lj7LuGm8/1siQbMJIBTHvV0vavqUfWUpBEHgCZOAOjPhTgB7IlvjWQPjO1RKXGjw12M2zZm4FAfCWbq1/XBvoIRQRWYuZ4pbUpJ6y6Ly+0Dvj5fraPngI9vB34sfXL5eeuyneegZe6FaPKc1VxlsAXGrTrFx9wxqtdJY4V3n5MHkPA9Bh/Z2CIPhpJk/r3lVtQw8BAAAAAElFTkSuQmCC">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="16" height="16"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M107.4312,99.32427c19.36911,-23.68897 16.76075,-58.40478 -5.93065,-78.93355c-22.6914,-20.52877 -57.49418,-19.65859 -79.1313,1.97853c-21.63712,21.63712 -22.5073,56.4399 -1.97853,79.1313c20.52877,22.6914 55.24458,25.29976 78.93355,5.93065l57.1556,57.1556c2.24964,2.17277 5.82555,2.1417 8.03709,-0.06984c2.21154,-2.21154 2.24261,-5.78745 0.06984,-8.03709zM17.2,63.06667c0,-25.33146 20.53521,-45.86667 45.86667,-45.86667c25.33146,0 45.86667,20.53521 45.86667,45.86667c0,25.33146 -20.53521,45.86667 -45.86667,45.86667c-25.31967,-0.02844 -45.83823,-20.54699 -45.86667,-45.86667z"></path></g></g></svg>
            <p>Mar. 22 oct à  14:12:35</p>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 3px 16px;
    background-color: rgba(75, 3, 122, 0.219);
    backdrop-filter: blur(6px);
    color: rgb(241, 241, 241);
}
</style>

<style>
.navbar-first, .navbar-last {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}

.navbar-first {
    width: 35vw;
}

.navbar-last {
    width: 17vw;
}

.navbar-first p:first-of-type {
    font-weight: bold;
}

.navbar-last div {
    display: flex;
    justify-content: space-between;
    width: 4vw;
}

.navbar-last img {
    width: 20px;
    height: auto;
}
</style>