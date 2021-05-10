(() => {
    if (!localStorage.hasOwnProperty('sessionUser')) {
        document.location.href = 'login.html';
    }
})();