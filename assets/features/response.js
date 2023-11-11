// Respon status
bot.action('me_status', ctx => ctx.answerCallbackQuery('Sistem sedang berjalan ['+waktu_singkat+']'));


// Respon jenis
bot.action('me_jenis', ctx => { 
  // Data akses
  let menu = 'jenis'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;
  
  // Pesan
  let msg = '🐈 Jenis Hewan\n\nJenis hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

  // Inline keyboard
  inline_Keyboard = [
    [button.text('🐟 Ikan', 'jenis_ikan'), button.text('🕊️ Burung', 'jenis_burung')],
    [button.text('🐇 Mamalia', 'jenis_mamalia'), button.text('🐊 Reptil', 'jenis_reptil')],
    [button.text('🐸 Amfibi', 'jenis_amfibi')]
  ];

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(inline_Keyboard) }) 
  & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});
  

// Respon ikan
bot.action('jenis_ikan', ctx => { 
  // Data akses
  let menu = 'jenis ikan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐟 Kelas Ikan (Pisces)\n\nHewan kelas ini seluruh anggota tubuhnya hidup di dalam air, baik itu di air tawar maupun air laut. Ikan hias merupakan hewan yang umum dipelihara oleh masyarakat di berbagai belahan dunia. Ikan hias diantaranya yaitu: ikan arwarna, ikan koi, ikan koki, ikan channa, ikan badut, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@hajatraJeT">@hajatraJeT</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=10RhIvoPLaw">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon burung
bot.action('jenis_burung', ctx => { 
  // Data akses
  let menu = 'jenis burung'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🕊️ Kelas Burung (Aves)\n\nHewan kelas ini seluruh anggota tubuhnya tertutup oleh bulu yang berasal dari epidermis. Selain itu, hewan kelas aves umumnya memiliki alat gerak berupa sayap untuk terbang. Contoh hewan kelas aves adalah burung Elang, burung Kakaktua, burung Kolibri, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=LYbXeEIugtk&t=8s">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon mamalia
bot.action('jenis_mamalia', ctx => { 
  // Data akses
  let menu = 'jenis mamalia'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐇 Kelas Mamalia\n\nHewan kelas ini memiliki kelenjar susu pada hewan betinanya. Contoh hewan kelas mamalia adalah kucing, sapi, kambing, beruang, monyet, harimau, anjing, kanguru, gajah, kelinci, badak, dan lain-lain.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=fs9OoKv9Jts">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon reptil
bot.action('jenis_reptil', ctx => { 
  // Data akses
  let menu = 'jenis reptil'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐊 Kelas Reptil\n\nHewan kelas ini bergerak dengan cara melata dan cenderung beradaptasi dengan kehidupan darat dan perairan. Contoh hewan kelas ini adalah kadal, tokek, buaya, kura-kura, ular, dan cecak.\n\n▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=vuQjs_ERFyU">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon amfibi
bot.action('jenis_amfibi', ctx => { 
  // Data akses
  let menu = 'jenis amfibi'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; } 

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '🐸 Kelas Amfibi\n\nHewan kelas ini dapat hidup di dua alam, yakni darat dan air tawar, tetapi tidak hidup di air laut. Contoh hewan vertebrata kelas amphibia adalah katak dan salamander.\n\n▶️ Sumber: <a href="https://www.youtube.com/@MooMooMath">@MooMooMath</a>\n---------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=AKN0Z1rIcMo">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Jenis']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon pakan ikan
bot.action('me_pakan', (ctx, next) => {
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nPakan ikan terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu cacing; ikan hidup; invertebrata akuatik, seperti daphnia atau artemia; larva serangga seperti bloodworm, jentik nyamuk, infusoria, rotifera, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet ikan. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/2459da6a-ae1d-41d4-a886-3faf001517e5';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});
  

// Respon pakan burung
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🕊️ Burung (Aves)\n------------------------------------------------------------\n\nPakan burung terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu biji-bijian, kroto (larva semut), jangkrik, ulat, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet burung. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/18e435c5-5db5-4cbe-86e9-d42bc12900ce';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon pakan mamalia
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐇 Mamalia\n------------------------------------------------------------\n\nPakan mamalia terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu rerumputan, buah-buahan, dedaunan, biji-bijian, umbi-umbian, daging-dagingan, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet kelinci, pelet anjing, pelet kucing, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/18c114cf-ff84-45d2-94c7-cfefe804c831';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});
  

// Respon pakan reptil
bot.action('me_pakan', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐊 Reptil\n------------------------------------------------------------\n\nPakan reptil terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu tikus, serangga, siput, cacing, dedaunan, buah-buahan, biji-bijian, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet kura-kura, pelet kadal, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/e97473f4-86d1-411c-9bed-d755289977a5';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon pakan amfibi
bot.action('me_pakan', (ctx, next) => { 
  // Data akses
  let menu = 'pakan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '------------------------------------------------------------\n🍗 Pakan: 🐸 Amfibi\n------------------------------------------------------------\n\nPakan amfibi terbagi menjadi 2 macam, yaitu alami dan buatan. Pakan alami merupakan pakan yang telah tersedia di alam. Contoh pakan alami, yaitu cacing, ikan, belatung, ulat, lalat, jangkrik, kumbang, belalang, laba-laba, siput, dan lain-lain. Pakan buatan merupakan pakan yang dibuat dengan formulasi tertentu, baik nabati maupun hewani berdasarkan pertimbangan pembuatnya. Pakan buatan biasanya dibuat di pabrik dan dijual secara komersial atau bisa juga membuatnya sendiri. Contoh pakan buatan, yaitu pelet salamander, pelet katak, dan lain-lain. Dalam hal pemberian pakan hewan, jenis pakan dan hewan apa yang anda pelihara itu tidak boleh sembarangan dan harus mengutamakan kecocokan agar nafsu makan hewan dapat bertambah.';

  // Foto Pakan
  let url_foto = 'https://github.com/devancakra/Bot-Telegram-Berbasis-JavaScript/assets/54527592/bca8464d-ddda-47bb-a2c4-bd539b80515d';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg,'parse_mode': 'HTML'}) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon habitat ikan
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nIkan dapat ditemukan hampir di semua perairan yang berukuran besar baik air tawar, air payau, maupun air asin (laut). Pada habitat aslinya, ikan dapat hidup bervariasi, mulai dari yang dekat permukaan hingga beberapa ribu meter di bawah permukaan.\n\n▶️ Sumber: <a href="https://www.youtube.com/@TankTested">@TankTested</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=ICRQfGjdS6o">Klik Disini</a></strong>';

  // Foto habitat ikan
  let url_foto = 'https://github.com/devancakra/Kuroku-Bot/assets/54527592/e1e07bb6-1fb8-43d4-bd86-f70f8795926d';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat burung
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🕊️ Burung (Aves)\n------------------------------------------------------------\n\nHabitat burung terbentang mulai dari tepi pantai hingga ke puncak gunung. Burung yang memiliki habitat khusus di tepi pantai tidak dapat hidup di pegunungan dan sebaliknya. Namun ada pula spesies burung-burung umum yang dapat dijumpai di beberapa habitat.\n\n▶️ Sumber: <a href="https://www.youtube.com/@cornell_lab">@cornell_lab</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=UmPXtsJeu5M&t=134s">Klik Disini</a></strong>';

  // Foto habitat burung
  let url_foto = 'https://github.com/devancakra/Kuroku-Bot/assets/54527592/eec0ea5f-00e0-4d99-9dc7-26f3b0dfd107';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat mamalia
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐇 Mamalia\n------------------------------------------------------------\n\nMamalia hidup pada habitat yang berbeda dan tersebar luas baik di gurun, Arktik, lautan, hutan, gunung, tundra, padang rumput, dan sabana. Mamalia pun lazim dibandingkan dengan reptil dan amfibi karena habitatnya tersebut.\n\n▶️ Sumber: <a href="https://www.youtube.com/@SLNacademy">@SLNacademy</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=9cfRj1TcscI">Klik Disini</a></strong>';

  // Foto habitat mamalia
  let url_foto = 'https://github.com/devancakra/Kuroku-Bot/assets/54527592/ef7b8b9e-a303-4f88-9671-3e0d56ffd402';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat reptil
bot.action('me_habitat', (ctx, next) => { 
  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐊 Reptil\n------------------------------------------------------------\n\nKeberadaan reptil bisa ditemukan hampir di seluruh bagian dunia, kecuali benua Antartika. Reptil hidup di daratan, daerah perairan, atau bisa juga keduanya. Karena itu, persebaran reptil bisa ditemukan di berbagai tempat yang umum dikunjungi ataupun tidak bisa dikunjung manusia.\n\n▶️ Sumber: <a href="https://www.youtube.com/@ARCTrust">@ARCTrust</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=iX93jNAFKtM">Klik Disini</a></strong>';

  // Foto habitat reptil
  let url_foto = 'https://github.com/devancakra/Kuroku-Bot/assets/54527592/f82c8298-4d4a-4940-91d0-2a0edf43106b';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'});

  // Fungsi untuk meneruskan chat pada action berikutnya
  next();
});


// Respon habitat amfibi
bot.action('me_habitat', ctx => { 
  // Data akses
  let menu = 'habitat'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '------------------------------------------------------------\n🌱 Habitat: 🐸 Amfibi\n------------------------------------------------------------\n\nHabitat utama amfibi adalah hutan primer, hutan sekunder, hutan rawa, sungai besar, sungai sedang, anak sungai, kolam dan danau. Umumnya amfibi dijumpai pada malam hari atau pada musim penghujan.\n\n▶️ Sumber: <a href="https://www.youtube.com/@NGScience">@NGScience</a>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=YM9ZytyxYBU">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Foto habitat amfibi
  let url_foto = 'https://github.com/devancakra/Kuroku-Bot/assets/54527592/8a76b349-ff1b-48e2-a2b6-b962d9f8e2f0';

  // Output yang dikirim oleh bot
  ctx.replyWithPhoto(url_foto, {'caption': msg, 'parse_mode': 'HTML'}) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Respon kesehatan
bot.action('me_kesehatan', ctx => { 
  // Data akses
  let menu = 'kesehatan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;
  
  // Pesan
  let msg = '💊 Kesehatan\n\nKesehatan hewan yang dimaksud ini berdasarkan pada kelas.\n\nSilakan pilih jenis hewan peliharaan anda dibawah ini untuk mendapatkan informasi lebih lanjut ⬇️⬇️⬇️⬇️⬇️';

  // Inline keyboard
  inline_Keyboard = [
    [button.text('🐟 Ikan', 'sehat_ikan'), button.text('🕊️ Burung', 'sehat_burung')],
    [button.text('🐇 Mamalia', 'sehat_mamalia'), button.text('🐊 Reptil', 'sehat_reptil')],
    [button.text('🐸 Amfibi', 'sehat_amfibi')]
  ];

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Utama']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(inline_Keyboard) }) 
  & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan ikan
bot.action('sehat_ikan', ctx => {
  // Data akses
  let menu = 'kesehatan ikan'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg = '------------------------------------------------------------\n💊 Kesehatan: 🐟 Ikan (Pisces)\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas ikan, antara lain :\n\n\n<b>• Menyesuaikan jenis dan habitat</b>\n\nJenis ikan sangat beragam, misalnya ikan air tawar, ikan air asin, dan ikan air payau. Ikan air tawar adalah ikan yang hidup di air tawar seperti di sungai, rawa, kolam, dan danau. Sedangkan ikan air asin adalah ikan yang hidup di air laut. Kemudian ikan air payau adalah ikan yang hidup di air laut dan air tawar. Dalam hal ini, ketidaksesuaian habitat juga akan berpengaruh terhadap psikis ikan, bahkan pada kondisi terburuk dapat mengakibatkan kematian pada ikan. Oleh karena itu, anda harus mengetahui terlebih dahulu jenis ikan apa yang anda pelihara dan bagaimana habitatnya. Anda juga harus membatasi jumlah ikan dan meningkatkan harmonisasi ikan, agar jumlah ikan tidak melebihi kapasitas dan mencegah adanya perkelahian antar jenis ikan hias yang memang tidak dapat hidup berdampingan.\n\n\n<b>• Memilih media yang tepat</b>\n\nMedia ini sangat beragam, umumnya masyarakat lebih menyukai akuarium. Sebaiknya pilihlah ukuran media yang sesuai dengan kebutuhan ikan hias di rumah. Kemudian anda dapat menambahkan beberapa komponen yang menyerupai habitat alami ikan yang anda pelihara, misalnya tanaman air. Pastikan komponen tambahan yang anda pakai tidak terkontaminasi dengan zat kimia. Anda juga dapat menambahkan filter dan pompa agar sirkulasi air tetap terjaga. Media yang anda gunakan untuk merawat ikan pastikan berada pada lokasi dengan pencahayaan yang cukup.\n\n\n<b>• Memantau kondisi air</b>\n\nJenis air di rumah beberapa memiliki sifat asam yang berbeda. Penting untuk memastikan kadar pH yang tepat agar ikan dapat hidup dengan baik. Anda bisa membeli alat untuk menguji pH air. Ikan hias biasanya dapat hidup sehat dengan tingkat pH yang berada di antara 6,8 hingga 7,5. Kadar pH tersebut membuat ikan hias dapat hidup dengan nyaman sehingga terhindar dari berbagai gangguan kesehatan. Selain kadar pH, jangan lupa untuk memastikan suhu air berada di suhu normal. Ikan hias dapat hidup nyaman dengan suhu di antara 22 – 27 derajat Celcius. Lalu pastikan air yang anda gunakan tidak terkontaminasi dengan zat kimia.\n\n\n<b>• Memberikan pakan</b>\n\nSebaiknya cari tahu jenis pakan apa yang dikonsumsi oleh ikan hias anda. Berikan pakan sesuai dengan jenis ikan. Selain itu, hindari memberikan pakan ikan terlalu banyak. Kondisi ini membuat media yang dipakai untuk merawat ikan menjadi lebih cepat kotor dan dapat memicu berbagai penyakit pada ikan, salah satunya infeksi jamur dan bakteri. Jangan jadikan ukuran media sebagai acuan banyaknya pakan yang diberikan, namun pastikan sesuai dengan jumlah ikan yang ada.\n\n\n<b>• Memberikan treatment</b>\n\nPerawatan ini meliputi pembersihan komponen, pompa, filter; penggantian air; dan pemberian obat atau suplemen untuk ikan yang mengalami gejala tidak normal atau terindikasi sakit. Hal ini perlu dilakukan secara berkala dan menyesuaikan kondisi yang ada.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@KGTropicals">@KGTropicals</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=9IkwXIMFXMY">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan burung
bot.action('sehat_burung', ctx => {
  // Data akses
  let menu = 'kesehatan burung'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🕊️ Burung\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas burung, antara lain :\n\n\n<b>• Tips 1</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 2</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 3</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 4</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 5</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@FlyingFids">@FlyingFids</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=IPG_Obzl2cw">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan mamalia
bot.action('sehat_mamalia', ctx => { 
  // Data akses
  let menu = 'kesehatan mamalia'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🐇 Mamalia\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas mamalia, antara lain :\n\n\n<b>• Tips 1</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 2</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 3</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 4</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 5</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@BRIGHTSIDEOFFICIAL">@BRIGHTSIDEOFFICIAL</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=kUBIPULlKMk">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan reptil
bot.action('sehat_reptil', ctx => { 
  // Data akses
  let menu = 'kesehatan reptil'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🐊 Reptil\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas reptil, antara lain :\n\n\n<b>• Tips 1</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 2</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 3</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 4</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 5</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@animalplanet">@animalplanet</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=VTyXeRS1hss&t=2s">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});


// Kesehatan amfibi
bot.action('sehat_amfibi', ctx => { 
  // Data akses
  let menu = 'kesehatan amfibi'; let user_id = ctx.from.id; let user = ctx.from.username; 
  let name = ctx.from.first_name; if (ctx.from.last_name) { name += ' ' + ctx.from.last_name; }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+user_id+'\n👤 Nama : '+name;
  pvmsg += '\n🚹 Username : @'+user+'\n⏰ Date : '+waktu_lengkap+'\n📁 Akses menu : '+menu;

  // Pesan
  let msg ='------------------------------------------------------------\n💊 Kesehatan: 🐸 Amfibi\n------------------------------------------------------------\n\nTips-tips yang dapat anda gunakan untuk menjaga kesehatan hewan kelas amfibi, antara lain :\n\n\n<b>• Tips 1</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 2</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 3</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 4</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>• Tips 5</b>\n\n⚠️ Sistem sedang dalam perbaikan.\n\n\n<b>▶️ Sumber: <a href="https://www.youtube.com/@monkeysee">@monkeysee</a></b>\n------------------------------------------------------------\nInformasi lebih lanjut dapat anda akses pada bagian ini: <strong><a href="https://www.youtube.com/watch?v=33wINBQS-I0">Klik Disini</a></strong>';

  // Custom keyboard
  custom_Keyboard = [
    ['↩️ Menu Kesehatan']
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg) & ctx.tg.sendMessage(admin_bot, pvmsg,{ reply_markup: markup.keyboard(custom_Keyboard).resize() });
});
