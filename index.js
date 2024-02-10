let cards;
const wishlistWrapper = document.querySelector('.wishlist-wrapper')
const url = 'https://wishes-awcq.onrender.com'

fetch(`${url}/all-wishes`).then((data) => data.json()).then((gifts) => {
    cards = gifts
    createCard()
    handleCheck()
    handleCancel()

    const preloader = document.querySelector('.preloader-container')
    preloader.style.display = 'none'
})





function createCard() {
    cards.forEach(card => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('wishlist-card')

        if (card.is_selected) {
            const reserved = document.createElement('div')
            reserved.classList.add('reserved')

            const reservedSpan = document.createElement('span')
            reservedSpan.innerText = 'Заброньовано'
            reserved.appendChild(reservedSpan)

            cardDiv.appendChild(reserved)

            cardDiv.classList.add('selected')
        }

        const cardDivBtn = document.createElement('div')
        cardDivBtn.classList.add('card-btn-wrap')
        cardDivBtn.innerHTML = `
            <svg id="check-${card.id}" class="card-btn check" width="33" height="33" viewBox="0 0 50 50" fill="none">
                 <path
                    d="M25 1C20.2533 1 15.6131 2.40758 11.6663 5.04473C7.71955 7.68188 4.64341 11.4302 2.8269 15.8156C1.0104 20.201 0.535119 25.0266 1.46116 29.6822C2.38721 34.3377 4.67299 38.6141 8.02945 41.9706C11.3859 45.327 15.6623 47.6128 20.3178 48.5388C24.9734 49.4649 29.799 48.9896 34.1844 47.1731C38.5698 45.3566 42.3181 42.2805 44.9553 38.3337C47.5924 34.3869 49 29.7468 49 25C48.9923 18.6372 46.4612 12.5372 41.962 8.038C37.4628 3.5388 31.3628 1.00775 25 1ZM38.368 17.032L25 30.392C23.5535 31.8385 22.7425 32.6495 21.296 34.096C21.2235 34.1715 21.1366 34.2316 21.0404 34.2728C20.9442 34.3141 20.8407 34.3355 20.736 34.336C20.6302 34.3356 20.5254 34.3142 20.4279 34.273C20.3304 34.2318 20.2421 34.1716 20.168 34.096L11.632 25.568C11.4824 25.4171 11.3986 25.2132 11.3991 25.0007C11.3995 24.7882 11.4841 24.5846 11.6343 24.4343C11.7846 24.2841 11.9882 24.1995 12.2007 24.199C12.4132 24.1986 12.6172 24.2824 12.768 24.432L16.6 28.2L20.736 32.4L37.232 15.904C37.3831 15.7541 37.5872 15.67 37.8 15.67C38.0128 15.67 38.217 15.7541 38.368 15.904C38.4422 15.978 38.501 16.0659 38.5412 16.1627C38.5813 16.2595 38.602 16.3632 38.602 16.468C38.602 16.5728 38.5813 16.6765 38.5412 16.7733C38.501 16.8701 38.4422 16.958 38.368 17.032Z"
                    fill="#FF9EBB" stroke="black" />
                 <path
                    d="M25 1C20.2533 1 15.6131 2.40758 11.6663 5.04473C7.71955 7.68188 4.64341 11.4302 2.8269 15.8156C1.0104 20.201 0.535119 25.0266 1.46116 29.6822C2.38721 34.3377 4.67299 38.6141 8.02945 41.9706C11.3859 45.327 15.6623 47.6128 20.3178 48.5388C24.9734 49.4649 29.799 48.9896 34.1844 47.1731C38.5698 45.3566 42.3181 42.2805 44.9553 38.3337C47.5924 34.3869 49 29.7468 49 25C48.9928 18.637 46.4619 12.5367 41.9626 8.03739C37.4633 3.53808 31.363 1.0072 25 1ZM25 47.4C20.5697 47.4 16.2389 46.0863 12.5552 43.6249C8.87158 41.1636 6.00051 37.6652 4.30511 33.5721C2.60971 29.479 2.16611 24.9752 3.03042 20.63C3.89473 16.2848 6.02812 12.2935 9.16082 9.16081C12.2935 6.02811 16.2848 3.89472 20.63 3.03041C24.9752 2.1661 29.4791 2.6097 33.5721 4.3051C37.6652 6.0005 41.1636 8.87157 43.6249 12.5552C46.0863 16.2389 47.4 20.5697 47.4 25C47.3934 30.9388 45.0312 36.6325 40.8319 40.8318C36.6325 45.0312 30.9388 47.3934 25 47.4Z"
                    fill="black" />
                <path
                    d="M20.2929 32.2929C19.9024 32.6834 19.9024 33.3166 20.2929 33.7071C20.6834 34.0976 21.3166 34.0976 21.7071 33.7071L20.2929 32.2929ZM37.2929 15.2929L20.2929 32.2929L21.7071 33.7071L38.7071 16.7071L37.2929 15.2929Z"
                    fill="black" />
                <path
                    d="M12.7071 24.2929C12.3166 23.9024 11.6834 23.9024 11.2929 24.2929C10.9024 24.6834 10.9024 25.3166 11.2929 25.7071L12.7071 24.2929ZM11.2929 25.7071L20.2929 34.7071L21.7071 33.2929L12.7071 24.2929L11.2929 25.7071Z"
                    fill="black" />
            </svg>
            <svg id="cancel-${card.id}" class="card-btn cancel" width="33" height="33" viewBox="0 0 48 48" fill="none">
                 <ellipse cx="24" cy="23.5" rx="23" ry="22.5" fill="#FF9EBB"/>
                 <path d="M24 0C19.2533 0 14.6131 1.40758 10.6663 4.04473C6.71955 6.68188 3.64341 10.4302 1.8269 14.8156C0.0103987 19.201 -0.464881 24.0266 0.461164 28.6822C1.38721 33.3377 3.67299 37.6141 7.02945 40.9706C10.3859 44.327 14.6623 46.6128 19.3178 47.5388C23.9734 48.4649 28.799 47.9896 33.1844 46.1731C37.5698 44.3566 41.3181 41.2805 43.9553 37.3337C46.5924 33.3869 48 28.7468 48 24C47.9931 17.6369 45.4623 11.5365 40.9629 7.03711C36.4635 2.53774 30.3631 0.00694821 24 0ZM24 45.75C19.6983 45.75 15.4931 44.4744 11.9164 42.0845C8.33959 39.6945 5.55184 36.2977 3.90563 32.3234C2.25943 28.3491 1.8287 23.9759 2.66793 19.7568C3.50716 15.5377 5.57865 11.6622 8.62044 8.62043C11.6622 5.57864 15.5377 3.50715 19.7568 2.66792C23.9759 1.82869 28.3491 2.25941 32.3234 3.90562C36.2977 5.55183 39.6946 8.33958 42.0845 11.9163C44.4744 15.4931 45.75 19.6983 45.75 24C45.7431 29.7663 43.4493 35.2945 39.3719 39.3719C35.2945 43.4493 29.7663 45.7431 24 45.75Z" fill="black"/>
                <path d="M34.545 13.4213C34.3341 13.2106 34.0481 13.0922 33.75 13.0922C33.4519 13.0922 33.1659 13.2106 32.955 13.4213L24 22.4062L15.0487 13.4062C14.8374 13.1949 14.5508 13.0762 14.2519 13.0762C13.953 13.0762 13.6663 13.1949 13.455 13.4062C13.2437 13.6176 13.1249 13.9042 13.1249 14.2031C13.1249 14.502 13.2437 14.7887 13.455 15L22.41 24L13.455 33C13.2442 33.2113 13.1259 33.4978 13.1262 33.7963C13.1266 34.0949 13.2455 34.381 13.4569 34.5919C13.6682 34.8027 13.9547 34.921 14.2532 34.9206C14.5517 34.9203 14.8379 34.8013 15.0487 34.59L24 25.5938L32.955 34.5938C33.1663 34.8051 33.453 34.9238 33.7519 34.9238C34.0508 34.9238 34.3374 34.8051 34.5487 34.5938C34.7601 34.3824 34.8788 34.0958 34.8788 33.7969C34.8788 33.498 34.7601 33.2113 34.5487 33L25.59 24L34.5487 15C34.7555 14.789 34.871 14.5052 34.8703 14.2099C34.8696 13.9145 34.7528 13.6312 34.545 13.4213Z" fill="black"/>
                <defs>
                    <clipPath id="clip0_13_7">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                 </defs>
            </svg>
        `

        const cardImg = document.createElement('img')
        cardImg.classList.add('card-img')
        cardImg.src = card.image_url

        const cardTitle = document.createElement('h2')
        cardTitle.classList.add('product-description')
        cardTitle.innerText = card.title

        const cardPrice = document.createElement('p')
        cardPrice.classList.add('price')
        cardPrice.innerText = '₴ ' + card.price

        cardDiv.appendChild(cardDivBtn)
        cardDiv.appendChild(cardImg)
        cardDiv.appendChild(cardTitle)
        cardDiv.appendChild(cardPrice)

        wishlistWrapper.appendChild(cardDiv)

        openModal(cardDiv, card)

    });
}


const handleCheck = () => {
    const checks = document.querySelectorAll('.check')


    checks.forEach((check) => {
        check.addEventListener('click', (event) => {
            reserve(event.target.id || event.target.parentNode.id)
        })
    })
}


function reserve(id) {
    const separatedId = id.slice(-1)

    fetch(`${url}/update-wish`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: separatedId,
            is_selected: true
        })
    }).then(
        (response) => {
            if (!response.ok) {
                Toastify({
                    text: "Цей подарунок вже заброньовано",
                    duration: 4000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    className: "custom-error"
                }).showToast();
                return;
            }
            fetch(`${url}/all-wishes`).then((data) => data.json()).then((gifts) => {
                wishlistWrapper.innerHTML = ''
                cards = gifts
                createCard()
                handleCheck()
                handleCancel()
                Toastify({
                    text: "Вітаю! Ви здійснили бажання",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    className: "custom-success"
                }).showToast();
            })
        },
    )
}


const handleCancel = () => {
    const cancels = document.querySelectorAll('.cancel')

    cancels.forEach((cancel) => {
        cancel.addEventListener('click', (event) => {
            cancelReservation(event.target.id || event.target.parentNode.id)
        })
    })
}



function cancelReservation(id) {
    const separatedId = id.slice(-1)

    fetch(`${url}/update-wish`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: separatedId,
            is_selected: false
        })
    }).then(() => {
        fetch(`${url}/all-wishes`).then((data) => data.json()).then((gifts) => {
            wishlistWrapper.innerHTML = ''
            cards = gifts
            createCard()
            handleCancel()
            handleCheck()
        })
    })
}



/* ----------------------  Modal  ----------------------------- */

const modalBtn = document.querySelector('.modal-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalImg = document.querySelector('.img-product-modal')
const link = document.querySelector('.link')
const giftName = document.querySelector('.gift-name')
const modalGiftPrice = document.querySelector('.modal-gift-price')
const modalComent = document.querySelector('.modal-coment')



modalBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('modal-showed')
})

// Opening of the modal

function openModal(cardDiv, card) {
    const tagNames = ['path', 'svg', 'ellipse']

    cardDiv.addEventListener('click', (event) => {

        if (!tagNames.includes(event.target.tagName.toLowerCase())) {
            fetch(`${url}/wish/${card.id}`).then((data) => data.json()).then((gift) => {
                modalImg.src = gift.image_url
                link.href = gift.product_url
                giftName.innerText = gift.title
                modalGiftPrice.innerText = '₴ ' + gift.price
                modalComent.innerText = gift.coment



                modalWrapper.classList.add('modal-showed')
            })
        }
    })
}