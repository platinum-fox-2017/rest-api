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
| /api/users           | GET          | get all the users info(admin only) |
| /api/users/:id           | GET          | get a single user info (admin and autheticated user) |
| /api/users          | POST         | create a user (admin only) |
| /api/users/:id          | DELETE         | Delete a user (admin only) |
| /api/users/:id          | PUT         | Update a user with new info (admin and autheticated user) |

STEP 1 : Membuat model CRUD

buatlah file-file model yang diperlukan untuk melakukan interaksi CRUD ke dalam database.
Gunakan sequelize sebagai ORM 

STEP 2 : Controller CRUD

Buatlah direktori controller didalam aplikasi express. susunlah file-file controller yang diperlukan
untuk mengakses model-model terkait

STEP 3 : Routing 

lakukan konfigurasi di rektori routes untuk merilis semua URL yang telah di buat  

