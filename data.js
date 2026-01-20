// ข้อมูลพรรณไม้จากทะเบียนปี 2563, 2565, 2566, และ 2568
const plantsData = [
    // --- ปี 2563 ---
    {
        id: "7-41000-003-291/2",
        commonName: "รวงผึ้ง",
        scientificName: "Schoutenia glomerata King",
        family: "TILIACEAE",
        category: "ไม้ต้น",
        characteristics: "ดอกเป็นช่อกระจุกแน่น มีลักษณะคล้ายรังผึ้งสีเหลือง",
        location: "พื้นที่ศึกษาที่ 3 ลานโพศรี",
        imagePath: "img/รวงผึ้ง.jpg",
        recordDate: "2023-01-15"
    },
    {
        id: "7-41000-003-292/6",
        commonName: "พุดพิชญา",
        scientificName: "Wrightia antidysenterica R.Br",
        family: "APOCYNACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบเดี่ยวสีเขียว รูปใบหอก ดอกช่อกระจุกสีขาว ออกดอกตามซอกใบ",
        location: "พื้นที่ศึกษาที่ 13 หน้าอาคารเรียน 5",
        imagePath: "img/พุดพิชญา.png",
        recordDate: "2023-01-15"
    },
    {
        id: "7-41000-003-293/14",
        commonName: "ใบเงิน",
        scientificName: "Graptophyllum pictum (L.) Griff",
        family: "ACANTHACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบสีเขียว มีสีขาวหรือเหลืองอ่อนแทรกอยู่ตามใบและกลางใบ ขอบใบเป็นคลื่น",
        location: "พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
        imagePath: "img/ใบเงิน.jpg",
        recordDate: "2023-01-15"
    },
    {
        id: "7-41000-003-294/15",
        commonName: "ใบทอง",
        scientificName: "Graptophyllum pictum (L.) Griff",
        family: "ACANTHACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบสีเขียวแกมเหลือง มีสีเขียวแทรกอยู่ตามใบ รูปวงรี ขอบเป็นคลื่น",
        location: "พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
        imagePath: "img/ใบทอง.jpg",
        recordDate: "2023-01-15"
    },
    {
        id: "7-41000-003-295/13",
        commonName: "ใบนาก",
        scientificName: "Graptophyllum pictum (L.) Griff",
        family: "ACANTHACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบมีสีม่วงแกมเขียว มีรอยด่างสีขาว รูปวงรี ขอบเป็นคลื่น",
        location: "พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
        imagePath: "img/ใบนาก.jpg",
        recordDate: "2023-01-15"
    },
    {
        id: "7-41000-003-296/20",
        commonName: "หนวดปลาดุกแคระ",
        scientificName: "Ophiopogon japonicus (L.f.) Ker Gawl.",
        family: "LILIACEAE",
        category: "ไม้ล้มลุก",
        characteristics: "ทรงพุ่ม ใบรูปแถบ เรียวแหลม สีเขียวเข้มผิวมัน เรียงตัวแบบเวียน",
        location: "พื้นที่ศึกษาที่ 9 หน้าอาคารเรียน 4",
        imagePath: "img/หนวดปลาดุกแคระ.jpg",
        recordDate: "2023-01-15"
    },

    // --- ปี 2565 ---
    {
        id: "7-41000-003-302/6",
        commonName: "กล้วยไม้ดิน",
        scientificName: "Bromheadia finlaysoniana (Lindl.) Rchb.f",
        family: "ORCHIDACEAE",
        category: "กล้วยไม้",
        characteristics: "ลำต้นใต้ดินโผล่เหนือดิน ใบยาวมีเส้นใบเป็นรอยพับจีบ ดอกช่อแบบกระจะ รูปกล้วยไม้สีขาว",
        location: "พื้นที่ศึกษาที่ 4 หน้าศูนย์วิทยบริการ",
        imagePath: "img/กล้วยไม้ดิน.jpg",
        recordDate: "2024-01-20"
    },
    {
        id: "7-41000-003-303/2",
        commonName: "ไก่ฟ้ายักษ์",
        scientificName: "Aristolochia gigantea Mart.",
        family: "ARISTOLOCHIACEAE",
        category: "ไม้เลื้อย",
        characteristics: "ดอกมีขนาดใหญ่ ลักษณะคล้ายไก่ฟ้าเมื่อบานปลายกลีบจะมีสีแดงน้ำตาลเป็นลายตาข่าย",
        location: "พื้นที่ศึกษาที่ 7 หน้าอาคารเรียน 1",
        imagePath: "img/ไก่ฟ้ายักษ์.jpg",
        recordDate: "2024-01-20"
    },
    {
        id: "7-41000-003-304/2",
        commonName: "สร้อยสายเพชร",
        scientificName: "Clerodendrum wallichii Merr.",
        family: "LABIATAE",
        category: "ไม้พุ่ม",
        characteristics: "ดอกออกเป็นช่อที่ปลายยอดและกิ่งก้านห้อยลงมา ก้านดอกเล็กเรียวคล้ายเส้นด้าย กลีบรองดอกรูประฆังสีแดง กลีบดอกสีขาว 5 กลีบ",
        location: "พื้นที่ศึกษาที่ 7 หน้าอาคารเรียน 1",
        imagePath: "img/สร้อยสายเพชร.jpg",
        recordDate: "2024-01-20"
    },
    {
        id: "7-41000-003-305/14",
        commonName: "เดหลีเล็ก",
        scientificName: "Spathiphyllum floribundum N.E.Br.",
        family: "ARACEAE",
        category: "ไม้ล้มลุก",
        characteristics: "ดอกออกเป็นช่อบริเวณยอดต้น มีสีขาวทรงหัวใจ ช่อดอกทรงกระบอกภายในมีดอกย่อยสีเหลือง",
        location: "พื้นที่ศึกษาที่ 4 หน้าศูนย์วิทยบริการ",
        imagePath: "img/เดหลีเล็ก.jpg",
        recordDate: "2024-01-20"
    },
    {
        id: "7-41000-003-306/12",
        commonName: "เกล็ดทับทิม",
        scientificName: "Alternanthera sp.",
        family: "AMARANTHACEAE",
        category: "ไม้ล้มลุก",
        characteristics: "ใบเดี่ยว รูปรี ขอบเป็นคลื่น ใบมีสีแดงอมส้ม เมื่อปลูกในที่แดดไม่จัดใบจะมีสีเขียวอมน้ำตาล",
        location: "พื้นที่ศึกษาที่ 4 หน้าศูนย์วิทยบริการ",
        imagePath: "img/เกล็ดทับทิม.jpg",
        recordDate: "2024-01-20"
    },
    {
        id: "7-41000-003-307/9",
        commonName: "เกล็ดแก้ว",
        scientificName: "Alternanthera bettzickiana (Regel) G. Nicholson",
        family: "AMARANTHACEAE",
        category: "ไม้ล้มลุก",
        characteristics: "ใบผิวด้านบนสีเขียวเข้มอมเทาปนสีเขียวอ่อน มีด่างสีขาวเหลือง",
        location: "พื้นที่ศึกษาที่ 4 หน้าศูนย์วิทยบริการ",
        imagePath: "img/เกล็ดแก้ว.jpg",
        recordDate: "2024-01-20"
    },

    // --- ปี 2566 ---
    {
        id: "7-41000-003-308/3",
        commonName: "เจตมูลเพลิง",
        scientificName: "Plumbago indica L.",
        family: "PLUMBAGINACEAE",
        category: "ไม้ล้มลุก",
        characteristics: "ดอกเป็นช่อกระจะสีแดง ออกดอกที่ปลายยอด มีลักษณะรูปดอกเข็ม",
        location: "พื้นที่ศึกษาที่ 15 หน้าอาคารสวนพฤกษศาสตร์",
        imagePath: "img/เจตมูลเพลิง.jpg",
        recordDate: "2024-12-10"
    },
    {
        id: "7-41000-003-309/2",
        commonName: "หมวกจีน",
        scientificName: "Holmskioldia sanguinea Retz.",
        family: "LAMIACEAE",
        category: "ไม้ล้มลุก",
        characteristics: "ดอกเป็นช่อกระจะ สีส้มอมเหลือง ทรงกลม ออกดอกที่ปลายยอด โคนเชื่อมติดกันเป็นหลอด",
        location: "พื้นที่ศึกษาที่ 15 หน้าอาคารสวนพฤกษศาสตร์",
        imagePath: "img/หมวกจีน.jpg",
        recordDate: "2024-12-10"
    },
    {
        id: "7-41000-003-310",
        commonName: "กุหลาบพันปี",
        scientificName: "Rhododendron arboreum Sm.",
        family: "ERICACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ดอกเดี่ยว ออกดอกที่ปลายยอด กลีบดอก 5 กลีบ สีม่วงอมชมพู",
        location: "พื้นที่ศึกษาที่ 15 หน้าอาคารสวนพฤกษศาสตร์",
        imagePath: "img/กุหลาบพันปี.jpg",
        recordDate: "2024-12-10"
    },
    {
        id: "7-41000-003-311/10",
        commonName: "ละอองดาว",
        scientificName: "Hypoestes phyllostachya Baker",
        family: "ACANTHACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบเดี่ยว มีลายจุดสีม่วง เรียงตัวตรงข้ามสลับตั้งฉาก รูปรี ปลายใบเรียวแหลม",
        location: "พื้นที่ศึกษาที่ 15 หน้าอาคารสวนพฤกษศาสตร์",
        imagePath: "img/ละอองดาว.jpg",
        recordDate: "2024-12-10"
    },
    {
        id: "7-41000-003-312",
        commonName: "แดงทอดยอด",
        scientificName: "Ipomoea horsfalliae Hook.",
        family: "CONVOLVULACEAE",
        category: "ไม้เลื้อย",
        characteristics: "ช่อกระจะ ออกดอกที่ซอกใบ โคนเชื่อมติดกันปลายแยกเป็น 5 แฉก สีแดง รูปกรวย",
        location: "พื้นที่ศึกษาที่ 15 หน้าอาคารสวนพฤกษศาสตร์",
        imagePath: "img/แดงทอดยอด.jpg",
        recordDate: "2024-12-10"
    },

    // --- ปี 2568 ---
    {
        id: "7-41000-003-321",
        commonName: "แก้วพวงมณี",
        scientificName: "Clematis paniculata Thunb.",
        family: "RANUNCULACEAE",
        category: "ไม้เลื้อย",
        characteristics: "ใบสีเขียวเข้มมันวาว ดอกมีกลิ่นหอม",
        location: "หลังอาคาร 4",
        imagePath: "img/แก้วพวงมณี.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-322",
        commonName: "ไข่ดาว",
        scientificName: "Oncoba spinosa Forssk.",
        family: "SALICACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ดอกสีเหลืองกระจุกตรงกลางและกลีบดอกสีขาว คล้ายไข่ดาว",
        location: "หน้าอาคาร 8",
        imagePath: "img/ไข่ดาว.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-323",
        commonName: "ปีบยูนาน",
        scientificName: "Radermachera sp. 'Kunming'",
        family: "BIGNONIACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบประกอบแบบขนนกปลายคี่ แผ่นใบหนา และมีสีเขียวเข้มเป็นมัน",
        location: "หลังอาคาร 4",
        imagePath: "img/ปีบยูนาน.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-324",
        commonName: "พลูแอปเปิล",
        scientificName: "Epipremnum aureum (Linden & André) G. S. Bunting.",
        family: "ARACEAE",
        category: "ไม้เลื้อย",
        characteristics: "ใบปลายแหลม ผิวเป็นมันเงา เป็นสีเขียวผสมลายด่างขาวหรือเทา",
        location: "หลังอาคาร 4",
        imagePath: "img/พลูแอปเปิล.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-325",
        commonName: "พลูปีกนก",
        scientificName: "Monstera sp. 'Karstenianum'",
        family: "ARACEAE",
        category: "ไม้เลื้อย",
        characteristics: "ใบหนา และเห็นเส้นใบได้ชัดเจน ทำให้ดูเหมือนผิวใบย่น",
        location: "หลังอาคาร 4",
        imagePath: "img/พลูปีกนก.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-326",
        commonName: "ดอนญ่า",
        scientificName: "Mussaenda 'Queen Sirikit'",
        family: "RUBIACEAE",
        category: "ไม้พุ่ม",
        characteristics: "มีใบประดับสีชมพูอ่อนขลิบขอบสีแดง ดอกสีเหลือง",
        location: "หลังอาคาร 4",
        imagePath: "img/ดอนญ่า.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-327",
        commonName: "กระดุมไพลิน",
        scientificName: "Centratherum punctatum Cass.",
        family: "ASTERACEAE",
        category: "ไม้คลุมดิน",
        characteristics: "ลำต้นมีขนอ่อนนุ่ม ใบเรียงเวียน ขอบใบจักสองชั้น ดอกสีม่วง",
        location: "หน้าอาคาร 4",
        imagePath: "img/กระดุมไพลิน.jpg",
        recordDate: "2025-06-01"
    },
    {
        id: "7-41000-003-328",
        commonName: "พัดโบกเศรษฐี",
        scientificName: "Clerodendrum incisum Klotzsch var. macrosiphon",
        family: "LAMIACEAE",
        category: "ไม้พุ่ม",
        characteristics: "ใบสีเขียวอ่อนรูปรีแกมขอบขนาน ขอบใบหยักเป็นฟันเลื่อยห่าง",
        location: "หลังอาคาร 4",
        imagePath: "img/พัดโบกเศรษฐี.jpg",
        recordDate: "2025-06-01"
    }
];