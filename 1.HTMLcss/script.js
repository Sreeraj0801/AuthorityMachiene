function toggleMobileNavigations() {
    var mobileNavigations = document.querySelector('.mobileNavigations');
    if (mobileNavigations.style.display === 'block') {
        mobileNavigations.style.display = 'none';
    } else {
        mobileNavigations.style.display = 'block';
    }}
    window.addEventListener('resize', function () {
        var mobileNavigations = document.querySelector('.mobileNavigations');
        var windowWidth = window.innerWidth;

        if (windowWidth > 768) {
            mobileNavigations.style.display = 'none'
        }
    });