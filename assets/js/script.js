const getUser = () => fetch('https://random-data-api.com/api/users/random_user')
        .then(response => response.json())