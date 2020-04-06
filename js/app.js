 let searchInput = document.getElementById('search-input');
        let cancelBtn = document.querySelector('button');
        let borderHeight = document.querySelector('span');
        searchInput.addEventListener('focus', () => {
            document.querySelector('form').classList.add('shadow');
        });
        searchInput.addEventListener('blur', () => {
            document.querySelector('form').classList.remove('shadow');
        });
        searchInput.addEventListener('click', () => {
                cancelBtn.style.display = "block";
                borderHeight.style.display = 'block';
        });
        cancelBtn.addEventListener('click', () => {
            cancelBtn.style.display = "none";
                borderHeight.style.display = 'none';
        });