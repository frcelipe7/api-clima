document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dark-mode .button svg");

    const dark_mode_button = document.querySelector(".dark-mode .dark svg");
    const light_mode_button = document.querySelector(".dark-mode .light svg");

    dark_mode_button.addEventListener('click', () => {
        dark_mode_button.setAttribute('opacity-zero', '')

        dark_mode_button.addEventListener('animationend', () => {
            dark_mode_button.style.display = 'none';
            dark_mode_button.style.opacity = '0';
            dark_mode_button.removeAttribute('opacity-zero')

            light_mode_button.style.display = 'block'
            light_mode_button.setAttribute('opacity-one', '')
            light_mode_button.style.animationIterationCount = '1';
            light_mode_button.addEventListener('animationend', () => {
                light_mode_button.style.opacity = '1';
                light_mode_button.removeAttribute('opacity-one')
            })
        })
    })

    light_mode_button.addEventListener("click", () => {
        light_mode_button.setAttribute('opacity-zero', '')

        light_mode_button.addEventListener("animationend", () => {
            light_mode_button.style.display = 'none';
            light_mode_button.style.opacity = '0';
            light_mode_button.removeAttribute('opacity-zero')

            dark_mode_button.style.display = 'block'
            dark_mode_button.setAttribute('opacity-one', '')
            dark_mode_button.style.animationIterationCount = '1';
            dark_mode_button.addEventListener('animationend', () => {
                dark_mode_button.style.opacity = '1';
                dark_mode_button.removeAttribute('opacity-one')
            })
        })
    })

})















    // buttons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         button.style.animation = "opacity-zero .5s forwards";
    //         button.addEventListener("animationend", () => {
    //             button.style.display = 'none';
    //             button.style.animation = '';
    //             // verificar se é o botão dark
    //             // pra ativar o outro botão (botão light)
    //             if (button.dataset.mode == "to-dark") {
    //                 buttons.forEach(light_button => {
    //                     if (light_button.dataset.mode == "to-light") {
    //                         console.log('ligando')
    //                         light_button.style.display = 'block';
    //                         light_button.style.animation = "opacity-one .5s forwards";
    //                         light_button.addEventListener("animationend", () => {
    //                             light_button.style.animation = '';
    //                             light_button.style.opacity = '1';
    //                         });
    //                     }
    //                 })
    //             }
    //             // se não for o botão dark vai ser o botão light
    //             else {
    //                 buttons.forEach(dark_button => {
    //                     if (dark_button.dataset.mode == "to-dark") {
    //                         console.log('ligando')
    //                         dark_button.style.display = 'block';
    //                         dark_button.style.animation = "opacity-one .5s forwards";
    //                         dark_button.addEventListener("animationend", () => {
    //                             dark_button.style.animation = '';
    //                             dark_button.style.opacity = '1';
    //                         });
    //                     }
    //                 })
    //             }
    //         });
            
    //     })
    // });