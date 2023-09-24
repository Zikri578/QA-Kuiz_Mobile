

class HomePage {
    // ===================== Klik Menu Search ===================== \\
    // mendefinisi sebuah properti dalam sebuah objek atau kelas yang bernama buttonSearch. 
    get buttonSearch() {
        // Mendapatkan element locator dari instagram menu search
        return $('//android.widget.FrameLayout[@content-desc="Search and explore"]/android.widget.ImageView');
    }

    // menjalankan tindakan mengklik pada elemen menu "Search" 
    async ButtonSearch() {
        await this.buttonSearch.click();
    }
    // ===================== Klik Menu Search ===================== \\


    // ===================== Klik Tombol Search ===================== \\
    // mendefinisi sebuah properti dalam sebuah objek atau kelas yang bernama buttonSearch. 
    get findSearch() {
        // Mendapatkan element locator dari instagram search
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText');
    }

    // menjalankan tindakan mengklik pada elemen "Search" 
    async FindSearch() {
        await this.findSearch.click();
        await this.findSearch.setValue('sanbercode');
    }
    // ===================== Klik Tombol Search ===================== \\


    // ===================== Klik account ===================== \\
    // mendefinisi sebuah properti dalam sebuah objek atau kelas yang bernama icon. 
    get icon() {
        // Mendapatkan element locator dari instagram icon
        return $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.TextView`);
    }

    // menjalankan tindakan mengklik pada elemen "Icon" 
    async Icon() {
        await this.icon.click();
    }
    // ===================== Klik account ===================== \\


    // ===================== Klik follow account ===================== \\
    // mendefinisi sebuah properti dalam sebuah objek atau kelas yang bernama followAccount. 
    get followAccount() {
        return $('//android.widget.Button[@content-desc="Follow SanberCode"]');
    }

    // menjalankan tindakan mengklik pada elemen "Follow Account" 
    async FollowAccount() {
        await this.followAccount.click();
    }
    // ===================== Klik follow account ===================== \\
}

module.exports = new HomePage();