document.addEventListener('DOMContentLoaded', () => {
    const optOutButton = document.getElementById('opt-out-button');
    const acceptButton = document.getElementById('accept-button');
    const goBackButton = document.getElementById('go-back-button');
    const goBackButtonMobile = document.getElementById('go-back-button-mobile');
    const container = document.querySelector('.container');
    const mobileMessage = document.getElementById('mobile-message');

    let alle = true;

    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        container.style.display = 'none';
        mobileMessage.style.display = 'block';
	alle = false
    } else {
        optOutButton.addEventListener('mouseover', moveButton);
        optOutButton.addEventListener('click', showMessage);
        acceptButton.addEventListener('click', showAcceptMessage);
    }

    if (alle === true) {
        alle = false;
        alert('Oops! Due to annoying GDPR law, we MUST inform you that you can still opt-out. Just so you know, we\'re all about compliance and fairness here!');
    }

    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = optOutButton.getBoundingClientRect();

        // Calculate the new top and left positions within the container's bounds
        const newTop = Math.random() * (containerRect.height - buttonRect.height);
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);

        optOutButton.style.position = 'absolute';
        optOutButton.style.top = `${newTop}px`;
        optOutButton.style.left = `${newLeft}px`;
    }

    function showMessage() {
        alert('This button is temporarily out of service.');
    }

    function showAcceptMessage() {
        alert('Thank you for accepting, we are currently using all available data on you to hold indefinitely to serve you personalised adverts. You may opt out any time!');
    }

    goBackButton.addEventListener('click', () => {
        window.location.href = 'https://projects.izak.uk/';
    });

    goBackButtonMobile.addEventListener('click', () => {
        window.location.href = 'https://projects.izak.uk/';
    });
});
