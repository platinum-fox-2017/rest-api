Demo app with basic REST API.

(part 1)

buat skeleton aplikasi dengan cara menjalankan perintah berikut di direktori 
project kamu:
```

    $ express .
    $ npm install

```
Defisinikan beberapa route API yang akan kita gunakan seperti pola berikut ,
khusus unutk route authentication, bisa kita custom sendir.

| Routes                | HTTP          |           Description       |
| --------------------- | ------------- | --------------------------- |
| /api/signup           | POST          | Sign up with new user info  |
| /api/signin           | POST          | Sign in while get an access token based ob credentials  |
| /api/users            | GET           | get all the users info(admin only) |
| /api/users/:id        | GET           | get a single user info (admin and autheticated user) |
| /api/users            | POST          | create a user (admin only) |
| /api/users/:id        | DELETE        | Delete a user (admin only) |
| /api/users/:id        | PUT           | Update a user with new info (admin and autheticated user) |

STEP 1 : Membuat model CRUD

buatlah file-file model yang diperlukan untuk melakukan interaksi CRUD ke dalam database.
Gunakan sequelize sebagai ORM 

STEP 2 : Controller CRUD

Buatlah direktori controller didalam aplikasi express. susunlah file-file controller yang diperlukan
untuk mengakses model-model terkait

STEP 3 : Routing 

lakukan konfigurasi di rektori routes untuk merilis semua URL yang telah di buat  

STEP 4 : Sign Up User 

lengkapi REST API yang telah dibuat dengan layanan sign up, sehingga pengguna layanan kita dapat
membuat user baru. Tambahkan validasi ketika payload atau parameter dikirim ke server-side 

STEP 5 : Sign in user dan authentication Token user

tambahkan fitur otentikasi token pada aplikasi REST API, buatlah layanan sign in
yang mengembalikan token unik yang dapat digunakan untuk mengakses berbagai routes API kita
gunakan library jsonwebtoken(JWT) agar kita bisa membuat token serta memverifikasi token tersebut. 
pastikan kita dapa passing token tersebut saat melakukan API call terhadap route lain

STEP 6 : Deploy to Heroku (optional)

Deploy aplikasi ke heroku agar kita dapat mengakses langsung API-nya dengan mudah dari manapun, sertakan URL-nya di README

https://agnynureza-rest-api.herokuapp.com/

