class MessagePage {
    // ===================== Klik message account ===================== \\
    // mendefinisi sebuah properti dalam sebuah objek atau kelas yang bernama messageAccount. 
    get messageAccount() {
        return $('//android.widget.Button[@content-desc="Message"]');
    }
    // menjalankan tindakan mengklik pada elemen "Follow Account" 
    async MessageAccount() {
        await this.messageAccount.click();
    }

    // ===================== Klik message ===================== \\
    get message() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText');
    }
    async Message() {
        await this.message.click();
        await this.message.setValue('Hallo Admin, Apakah Kelas Cyber Security Sudah Dibuka? Terima Kasih');
    }
    // ===================== Klik message ===================== \\


    // ===================== Klik message ===================== \\
    get send() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button');
    }
    async Send() {
        await this.send.click();
        await driver.hideKeyboard()
    }
    // ===================== Klik message ===================== \\
}

module.exports = new MessagePage();
