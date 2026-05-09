// Login formunu oluştur ve enjekte et
document.addEventListener('DOMContentLoaded', function () {
    const loginFormContainer = document.getElementById('loginForm');

    if (loginFormContainer) {
        const formHTML = `
      <div class="container mt-5" style="max-width: 400px;">
        <h2 class="text-center mb-4">Öğrenci Girişi</h2>
        <form action="login.php" method="POST">
          <div class="mb-3">
            <label for="username" class="form-label">Kullanıcı Adı (E-posta):</label>
            <input type="email" id="username" name="username" class="form-control" placeholder="b@s" required />
          </div>
          
          <div class="mb-3">
            <label for="password" class="form-label">Şifre (Öğrenci Numarası):</label>
            <input type="password" id="password" name="password" class="form-control" placeholder="b" required />
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Giriş Yap</button>
        </form>
      </div>
    `;

        loginFormContainer.innerHTML = formHTML;
    }
});
