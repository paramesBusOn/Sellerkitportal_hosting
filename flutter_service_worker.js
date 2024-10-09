'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5e42fdb35292ad9f9ae0b97deb509d9",
"assets/AssetManifest.bin.json": "cdb446955af588c3dd49709f3ab25c3f",
"assets/AssetManifest.json": "6b0a4a6acc8848ddd518b8bbf9816d81",
"assets/assets/data/australia.json": "66ae1c9b7bb3ffaff1c96b9cbb69b226",
"assets/assets/data/category.json": "9e565cd35ecee3504db0eb7192797a18",
"assets/assets/data/contact.json": "b2451913e60db2081dbac84838034dae",
"assets/assets/data/contact_leads.json": "e6aba394fda9e27b2afb02b43714b310",
"assets/assets/data/europe_map.json": "a60417bd4a4634670a81aeffc7992a7d",
"assets/assets/data/food_data.json": "161a425163aeea68af10e7c988c3f118",
"assets/assets/data/job.json": "3f495179c0c3712990e6c09462c3a516",
"assets/assets/data/message.json": "21dc8f7ee0924e2b0c4cce28287da231",
"assets/assets/data/popular_candidate.json": "f5fc893ced26806b310ea68dc6ec674b",
"assets/assets/data/product.json": "dfcacc9cd0b7b35c6177fd23aceecbd4",
"assets/assets/data/product_order.json": "81c119fe2efd6f76095548f0b5a7fad6",
"assets/assets/data/shopping_cart.json": "151d1f30f7c14c51a02b00a59ee85431",
"assets/assets/data/shopping_product.json": "0296efc30d1410cc0a393d04d0a8207e",
"assets/assets/data/visitors_by_channels_data.json": "5eac3c325717b8ee979c8bdd24caf210",
"assets/assets/data/world_map.json": "991a3a9fc41238af03cc0b72190a6483",
"assets/assets/images/avatar/avatar_1.png": "4acaaf739f3a23a54468ad7c2de2953f",
"assets/assets/images/avatar/avatar_10.png": "1d5a3ebb8a4696fac0bafd0360c582b9",
"assets/assets/images/avatar/avatar_11.png": "d1f26357b063aec8f9e6444128694fbc",
"assets/assets/images/avatar/avatar_12.png": "f243b81952d23c8ce05d03f4bcc38ea9",
"assets/assets/images/avatar/avatar_13.png": "c40f5f3a8d20a481b19a22d36fd80126",
"assets/assets/images/avatar/avatar_14.png": "94f559ceef8cf6ec46cfe93590054205",
"assets/assets/images/avatar/avatar_15.png": "d6edbda4e2a3fe3bc5d40f35975baa3f",
"assets/assets/images/avatar/avatar_16.png": "7d04b57aea9e19bc92c4633c4cfef893",
"assets/assets/images/avatar/avatar_17.png": "4ba452b9508c5edae92721dbaa84c1f6",
"assets/assets/images/avatar/avatar_18.png": "f525d6fd093f61062517de9de45ba690",
"assets/assets/images/avatar/avatar_19.png": "bd88f805aacde5ad3df55ccfd0e0b505",
"assets/assets/images/avatar/avatar_2.png": "98bcc325c40d0ee02d1a0e9f68e05656",
"assets/assets/images/avatar/avatar_20.png": "8128cae73e659092c8a0fdbdfc18a0ba",
"assets/assets/images/avatar/avatar_3.png": "64434cae5fec2edd20bcb561520dbd30",
"assets/assets/images/avatar/avatar_4.png": "780840ac4236fc75ef21f8cee7af4cc5",
"assets/assets/images/avatar/avatar_5.png": "51d2bd0aad7d584d58c479420049f87f",
"assets/assets/images/avatar/avatar_6.png": "75f446200f58dc94d8690b5b8e7df33b",
"assets/assets/images/avatar/avatar_7.png": "0fb3a7a254454f641db601d7b0b758b2",
"assets/assets/images/avatar/avatar_8.png": "5879a0fb4cd7caa4cb32df0a8fdd5e2c",
"assets/assets/images/avatar/avatar_9.png": "288b36699a3a88e5885541b757aa5263",
"assets/assets/images/brand/docx.png": "5aad439755141bed9fb5313b89d650b7",
"assets/assets/images/brand/google.png": "4b58cbd35f95d3d368b8461dc01f5955",
"assets/assets/images/brand/xls.png": "cff64f3104931f2f6c565568c3375ec8",
"assets/assets/images/brand/xlsx.png": "856cead260b1613565a92f45f7e489b9",
"assets/assets/images/dummy/analytics_dashboard.png": "90523ba20d64630019bab3da2dcf81df",
"assets/assets/images/dummy/argentina.png": "92d0e5ff4b528ee3453ce4dda4bc5550",
"assets/assets/images/dummy/auth_background.png": "b2a619bb1a6ee4a042caf769c4ab1106",
"assets/assets/images/dummy/canada.png": "27023df31f8a155f3c0cec28b49d940b",
"assets/assets/images/dummy/drink-1.jpg": "992070ceecf924e4cf4377a4cd28679f",
"assets/assets/images/dummy/drink-2.jpg": "d7ac117bed246b8ca6eba35c88a36a21",
"assets/assets/images/dummy/food-1.jpg": "346149c84993867e4c5e93b8067ab977",
"assets/assets/images/dummy/food-2.jpg": "d14d268de9e88adbf3b84b83a588a0de",
"assets/assets/images/dummy/germany.png": "cf8dbfc8d3582ea01fddc4c79df5689c",
"assets/assets/images/dummy/landscape_1.png": "f9c19e02624a906f7d8183c69c1a3ff9",
"assets/assets/images/dummy/landscape_10.png": "d2e0e323dea3b1b8536da8aae71fc23c",
"assets/assets/images/dummy/landscape_2.png": "44837650dd406ada963a4b7a8fa1c0f8",
"assets/assets/images/dummy/landscape_3.png": "b4d7ed8f50977f258a8e47177dadf663",
"assets/assets/images/dummy/landscape_4.png": "13e7b7d04e1fd29d8d6a42ab2e992d5a",
"assets/assets/images/dummy/landscape_5.png": "7c982dda38a8d50b78b3c9f4a28a0f16",
"assets/assets/images/dummy/landscape_6.png": "d18e2d6a5c762b81ebb14a37c8ca3e8e",
"assets/assets/images/dummy/landscape_7.png": "5b11081daaef5d6c6c7d527515e9dbc1",
"assets/assets/images/dummy/landscape_8.png": "5133bf116162bd0a33f25af0de5bfa74",
"assets/assets/images/dummy/landscape_9.png": "b805df97cccf42bcd51d0dfdfec62777",
"assets/assets/images/dummy/mac_1.png": "f915f489e18bc14325fc5b3fc24e3620",
"assets/assets/images/dummy/mac_2.png": "12dbd1f53f1bfaa43977f4965eeb482e",
"assets/assets/images/dummy/mac_3.png": "05e60d4e339fe5094b7a0a3d2ba41d40",
"assets/assets/images/dummy/mac_4.png": "d611e1b9bca4888ca5a153e1e98e786b",
"assets/assets/images/dummy/mac_5.png": "7947bed72ee0dfca1171676efd0ad692",
"assets/assets/images/dummy/malaysia.png": "c342db24920707032f5484adae89a4b6",
"assets/assets/images/dummy/mexico.png": "c9febb604a235ec2e61925b138ac1112",
"assets/assets/images/dummy/nft_1.jpg": "19e3c3e7468e133fe329041eef3d66a4",
"assets/assets/images/dummy/nft_2.jpg": "dea4a7791d38ae9d4316486d39565856",
"assets/assets/images/dummy/nft_3.jpg": "d70a468500acb042acb8e2c7e8c3d4f3",
"assets/assets/images/dummy/nft_4.jpg": "f8419ac9c215628acd3c3fab1ee303b5",
"assets/assets/images/dummy/nft_5.jpg": "a8f3c6a16c069d57b6dcbe4b43366eac",
"assets/assets/images/dummy/other-1.jpg": "c723d3a3671247c68fc882e750b63a1b",
"assets/assets/images/dummy/other-2.jpg": "2bf13f8e4ac2a6424725e5d0f4440a69",
"assets/assets/images/dummy/product_1.png": "b5cb34fd5564aad9fc79f56cfbd9d7f5",
"assets/assets/images/dummy/product_2.png": "fc24f84e8d14c712ffbde52d2813e987",
"assets/assets/images/dummy/product_3.png": "7a8765bf2a8b930a499fa459d7de0311",
"assets/assets/images/dummy/product_4.png": "b91796f45868ff7392091da5a6f843f8",
"assets/assets/images/dummy/product_5.png": "92997a0fe2e57d1db4cd3e4a614b8742",
"assets/assets/images/dummy/product_6.png": "d834bc867818f0c62836505bc481f2a2",
"assets/assets/images/dummy/profile_1.jpg": "db829a5cfce21c7933d7d41d77c86858",
"assets/assets/images/dummy/profile_2.jpg": "965ca40837d242ada87e7550af920c9c",
"assets/assets/images/dummy/profile_3.jpg": "3482cb05b55f3af7b50cfcc92f6815ab",
"assets/assets/images/dummy/profile_4.jpg": "967a1e9cc95d1454b7be49741f5df357",
"assets/assets/images/dummy/profile_5.jpg": "9c7a07d99c6112a6ee20d70f7a58e12e",
"assets/assets/images/dummy/russia.png": "15e025156dc3ba2647fe6522e327e800",
"assets/assets/images/dummy/united_states.png": "c5cd5a97e77943b11408f7d7a53c6414",
"assets/assets/images/food/food_1.jpg": "9d9bfcf9b3b86d0bc6e9786e67bf23b7",
"assets/assets/images/food/food_10.jpg": "dc2ddd775992ef7ef10cf15177b662b6",
"assets/assets/images/food/food_2.jpg": "e069bfe9946578bc4e3f6367decb7207",
"assets/assets/images/food/food_3.jpg": "a9991e2a292e62cce812dadab602f4f7",
"assets/assets/images/food/food_4.jpg": "19d12d2f0c14e11626cf9fb1d182dbda",
"assets/assets/images/food/food_5.jpg": "981fd853018b0856346f54ed543ded3f",
"assets/assets/images/food/food_6.jpg": "40d91c65277565535171199589687efb",
"assets/assets/images/food/food_7.jpg": "cf048484cbd188e38ac6e9ea74cf9d78",
"assets/assets/images/food/food_8.jpg": "8f38761390b2a06e7b7e1047e9759075",
"assets/assets/images/food/food_9.jpg": "6aac1b426e596223388147f2f018301d",
"assets/assets/images/logo/loginBack.png": "f2b3ab7ba339bebbfae6e6219856c04b",
"assets/assets/images/logo/logo-sm.png": "ab5bbf11699eb912c0ac83736deea4f8",
"assets/assets/images/logo/logo.png": "ca448f4d8fa0d60a0afeecb2ea72ee27",
"assets/assets/images/logo/LogoSkHeader.png": "9bcdf4b5b2ef61d63051aa8d87ab03b2",
"assets/assets/images/logo/Sellerkit-Logo.png": "5c36f58464f2fcec34306cdac1d1a0fe",
"assets/assets/images/logo/SellerSymbolW%2520(2).png": "fd773baec9e75fa3a0751af8466e0eb2",
"assets/assets/images/logo/SellerSymbolW.png": "17ebc37a98c865b1a46b29d738f8f114",
"assets/assets/images/logo/SKLogo.png": "6f7b1126fee94b3db345bf23e2ded9a3",
"assets/assets/images/logo/SKWLogo.png": "d202b0876df8a3011c493ba2bc9dde88",
"assets/assets/images/logo/SKWLogo2.png": "7b35fbdbed64a6bba7abddbfa23cbde0",
"assets/assets/images/products/bag/bag_1.jpg": "bff44e1414464aaf4722cec852c2b8e8",
"assets/assets/images/products/bag/bag_2.jpg": "dcb6a2cfed17ed368b03addb8e4b1ec9",
"assets/assets/images/products/bag/bag_3.jpg": "352abb3c4f56b091941a04f6ffc22225",
"assets/assets/images/products/bag/bag_4.jpg": "4c4aa6aa9264b6b9b427ca20cf4e9aaf",
"assets/assets/images/products/bag/bag_5.jpg": "caa8cd6126dc9caf47e1aa1b414d86ef",
"assets/assets/images/products/black_shoes/black_shoes_1.jpg": "55f662bd0703d49f48f674afcda105ad",
"assets/assets/images/products/black_shoes/black_shoes_2.jpg": "99802feddaad7a025c8899713d2d0060",
"assets/assets/images/products/black_shoes/black_shoes_3.jpg": "ec5d55d52fdd5c7fcdd725c8cfedc40c",
"assets/assets/images/products/black_shoes/black_shoes_4.jpg": "7d0386ae3e4751beff61964de03ca2d3",
"assets/assets/images/products/black_shoes/black_shoes_5.jpg": "69604cec169a54c15a6ed406b7e7d3b8",
"assets/assets/images/products/camera/camera_1.jpg": "ddf1a051da4c01b40b204f4bed859a9b",
"assets/assets/images/products/camera/camera_2.jpg": "4afed5f8102d7ff8d0d43d176c332e39",
"assets/assets/images/products/camera/camera_3.jpg": "eaf2eeeb461b34388b0341ecad83062a",
"assets/assets/images/products/camera/camera_4.jpg": "4b47dcbb7aab1c46c97e8ff072510b8b",
"assets/assets/images/products/camera/camera_5.jpg": "d489460d7b072884f6300e86de600386",
"assets/assets/images/products/face_cream/cream_1.jpg": "456e44e3312382a8b42dabd14c9b8ef5",
"assets/assets/images/products/face_cream/cream_2.jpg": "1b28ec914b5f5c4424a4c9f9e1be4491",
"assets/assets/images/products/face_cream/cream_3.jpg": "e76c22c570451ab9b2eb0a81beef9ea0",
"assets/assets/images/products/face_cream/cream_4.jpg": "f18631090e33feadee6c454a2b159a43",
"assets/assets/images/products/face_cream/cream_5.jpg": "03fb0603966069cc99acc92e958ce194",
"assets/assets/images/products/girl_sandal/sandal_1.jpg": "d00ad7048cd830a038af37f3b97adc85",
"assets/assets/images/products/girl_sandal/sandal_2.jpg": "cb35d40b2ec0185ecbb6f294dc8ac99b",
"assets/assets/images/products/girl_sandal/sandal_3.jpg": "cbf9c34c65c85643109f1f9bbfe75668",
"assets/assets/images/products/girl_sandal/sandal_4.jpg": "654d7bd8f414484fced75f9db5368287",
"assets/assets/images/products/girl_sandal/sandal_5.jpg": "e9ff2ceb631f24e3e0f1ce8ca5b14248",
"assets/assets/images/products/headphone/headphone_1.jpg": "4cf4ee4f93b7bba84b2da7ffb0d2a2cc",
"assets/assets/images/products/headphone/headphone_2.jpg": "d1ec2c7242c3b03804f2271da784d779",
"assets/assets/images/products/headphone/headphone_3.jpg": "4d3a574db3d6e5a7fb800e25951db23b",
"assets/assets/images/products/headphone/headphone_4.jpg": "59807e9d62b967fca3ad8e2ada737c3c",
"assets/assets/images/products/headphone/headphone_5.jpg": "536fa24caae8b675c9974546463abcb6",
"assets/assets/images/products/laptop/laptop_1.jpg": "cdef4de4bb207c9cdb2d576c4079dfe7",
"assets/assets/images/products/laptop/laptop_2.jpg": "20ecf759dbc868d58d0db0c62bae8b50",
"assets/assets/images/products/laptop/laptop_3.jpg": "87edf46b66419eccba38a2909abee56b",
"assets/assets/images/products/laptop/laptop_4.jpg": "e39fbadd548b763eb80e80ce74cc26ef",
"assets/assets/images/products/laptop/laptop_5.jpg": "de50e3bb703119e4fe42da682e53293f",
"assets/assets/images/products/offer_poster.jpg": "ead544f22f52c8f7386b96f44f4fccdd",
"assets/assets/images/products/perfume/perfume_1.jpg": "43077c463dc7d3e5bb96213958087bf8",
"assets/assets/images/products/perfume/perfume_2.jpg": "a1819b64f7c1a019b3cd462229b8fca1",
"assets/assets/images/products/perfume/perfume_3.jpg": "10f08a8472c06e39a14e851574406377",
"assets/assets/images/products/perfume/perfume_4.jpg": "23dea14cfa366b2cac1e442c6c1fe0c6",
"assets/assets/images/products/perfume/perfume_5.jpg": "72c22169b98a5a25528ccdb2eba6bc44",
"assets/assets/images/products/products_01.png": "95db1cc8b561aa7f817f879a69f99716",
"assets/assets/images/products/products_02.png": "55ccdd1363b6ff916db10c341e554e58",
"assets/assets/images/products/products_03.png": "2420ae09934a63ede4ed145d11a04ea6",
"assets/assets/images/products/products_04.png": "34034e9588a7fea8821df99aa907d291",
"assets/assets/images/products/smart_watch/smart_watch_1.jpg": "703f6ee6201dcaa3d4bf35b70a841163",
"assets/assets/images/products/smart_watch/smart_watch_2.jpg": "5ce31800ef23b296131dff28930e18ba",
"assets/assets/images/products/smart_watch/smart_watch_3.jpg": "524f157823661ad5a224f6d7254406e0",
"assets/assets/images/products/smart_watch/smart_watch_4.jpg": "21dbe9128a16f2c09f127ac4bb498c02",
"assets/assets/images/products/smart_watch/smart_watch_5.jpg": "f2c3b5197db86665e1b3c3fec5d92958",
"assets/assets/images/products/watch/watch_1.jpg": "6de400ba838c5023d768e1f223f4d1ee",
"assets/assets/images/products/watch/watch_2.jpg": "c5320545ab14eb6ada9e6db7a357cbe5",
"assets/assets/images/products/watch/watch_3.jpg": "de83dc2055a226544eb2b7beff34f461",
"assets/assets/images/products/watch/watch_4.jpg": "95a41176b7a12f9ad1cc17b2058b1e5c",
"assets/assets/images/products/watch/watch_5.jpg": "f4f93a392fb90d426592f1090b1eb1ff",
"assets/assets/lang/ar.json": "3df835eeed7b1ff68b79c9df9929015f",
"assets/assets/lang/ar.svg": "2f36a78f82a0bd21ecba6a92770a251b",
"assets/assets/lang/en.json": "879b874b4cb97bc8c2b99c9abc91b753",
"assets/assets/lang/en.svg": "29ec61878eea4825fd822b8cdf4fceaa",
"assets/assets/lang/es.json": "a80281efdce9f2b83f082964a55c3839",
"assets/assets/lang/es.svg": "ebd9bcf21fb645e3f1ad336fdc4b9f88",
"assets/assets/lang/fr.json": "d162208d847ec1ad2fce096e245bb6ee",
"assets/assets/lang/fr.svg": "deccc962ba42a22c7674ff96905c852e",
"assets/assets/lang/hi.json": "f0fa2ecabbbb1d5ccf26d17f241268be",
"assets/assets/lang/hi.svg": "7ff299bf914c980b81cf2bdac954f00c",
"assets/FontManifest.json": "4802b60ea36fe2d16c297f426dcb90b9",
"assets/fonts/MaterialIcons-Regular.otf": "be3060722057aea0f9b73246a47b766f",
"assets/NOTICES": "935f4306d1b77730f0ca5685f72a0198",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "29b7db0f0bf5b4927a3eac8bd8df2f33",
"assets/packages/metaballs/lib/metaballs_shader.frag": "2db6b9a1394da174e429ce75f1ac0773",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ceb6b5c0c2afec96a3c65a9c2677582f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/logo.png": "ca448f4d8fa0d60a0afeecb2ea72ee27",
"img/SKLogo.png": "6f7b1126fee94b3db345bf23e2ded9a3",
"index.html": "0dfdbe47771f585b0ac31e655d5b2380",
"/": "0dfdbe47771f585b0ac31e655d5b2380",
"main.dart.js": "cbbcbbee1147cd17c955b7a613f98d70",
"manifest.json": "0f78e5afa84a056d9b7694e2cfbe449c",
"version.json": "4e5dd9e4f62cbf2b985dc9e83e654561"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
