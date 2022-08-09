

// Production Base Url 

const BaseUrl = 'http://santhakumarthinn-001-site1.itempurl.com/';




//Home Page fruit List 

export const home_page_fruit_list = function () {
    return fetch(BaseUrl + 'api.php', {
        method: 'GET',
        // headers: {
        //     // 'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },

        // body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(responseJson => {
            return responseJson;
        })
        .catch(error => {
            return error;
        });
};





