const { delay } = require("../../helpers/delayHelpers.js");     // import file delay waktu
const HomePage = require("../../test/pageObjects/home.page.js");     // import file HomePage

describe('Mobile App Test Suite - Instagram', () => {
    it('Follow Accounts', async () => {
        // menunda selama 5 detik
        await delay(5000);

        // memanggil variabel button Search Instagram
        await HomePage.ButtonSearch();

        // menunda selama 5 detik
        await delay(5000);

        // memanggil variabel element search
        await HomePage.FindSearch();

        // menunda selama 5 detik
        await delay(5000);

        // memanggil variabel element Icon
        await HomePage.Icon();

        // menunda selama 5 detik
        await delay(5000);

        // memanggil variabel element Follow Account
        await HomePage.FollowAccount();

        // menunda selama 5 detik
        await delay(5000);
    });
});