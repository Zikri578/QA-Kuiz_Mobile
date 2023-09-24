const HomePage = require("../../test/pageObjects/home.page.js");     // import file HomePage
const MessagePage = require("../../test/pageObjects/message.page.js");     // import file MessagePage
const { delay } = require("../../helpers/delayHelpers.js");     // import file delay waktu

describe('Mobile App Test Suite - Instagram', () => {
    it('Send Message Accounts', async () => {
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

        // memanggil variabel element Message Accounts
        await MessagePage.MessageAccount();

        // menunda selama 5 detik
        await delay(5000);

        // memanggil variabel element Message Account
        await MessagePage.Message();

        // menunda selama 5 detik
        await delay(5000);

        // memanggil variabel element Message Account
        await MessagePage.Send();

        // menunda selama 5 detik
        await delay(5000);
    });
});