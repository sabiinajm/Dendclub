import { Rate } from "antd";

export const tableConfigs = [
    {
        pathMatch: "/Həkim-Dashboard",
        headers: [
            { label: "Xəstə", key: "name" },
            { label: "Cins", key: "gender" },
            { label: "Görüş növü", key: "type" },
            { label: "Xəstəlik", key: "disease" }
        ],
        data: [
            { id: 1, name: "Adil Əliyev", gender: "Kişi", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-03-05" },
            { id: 2, name: "Leyla Həsənli", gender: "Qadın", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-02-20" },
            { id: 3, name: "Dilarə Babayeva", gender: "Qadın", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-03-08" },
            { id: 4, name: "Davud Əliyev", gender: "Kişi", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-01-15" },
        ]
    },
    {
        pathMatch: "/Həkim-Dashboard/Xəstələr",
        headers: [
            { label: "Xəstə", key: "name" },
            { label: "Email", key: "mail" },
            { label: "Cins", key: "gender" },
            { label: "Görüş növü", key: "type" },
            { label: "Xəstəlik", key: "disease" }
        ],
        data: [
            { id: 1, name: "Adil Əliyev", mail: "adilaliyev@gmail.com", gender: "Kişi", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-03-05" },
            { id: 2, name: "Leyla Həsənli", mail: "adilaliyev@gmail.com", gender: "Qadın", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-02-20" },
            { id: 3, name: "Dilarə Babayeva", mail: "adilaliyev@gmail.com", gender: "Qadın", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-03-08" },
            { id: 4, name: "Davud Əliyev", mail: "adilaliyev@gmail.com", gender: "Kişi", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-01-15" },
        ]
    },
    {
        pathMatch: "/Həkim-Dashboard/Ödənişlər",
        headers: [
            { label: "Xəstə", key: "name" },
            { label: "Email", key: "mail" },
            { label: "Cins", key: "gender" },
            { label: "Məbləğ", key: "cost" },
            { label: "Görüş növü", key: "type" },
        ],
        data: [
            { id: 1, name: "Adil Əliyev", mail: "adilaliyev@gmail.com", gender: "Kişi", cost: "100 AZN", type: "Klinikada görüş", date: "2024-03-05" },
            { id: 2, name: "Leyla Həsənli", mail: "adilaliyev@gmail.com", gender: "Qadın", cost: "100 AZN", type: "Klinikada görüş", date: "2024-02-20" },
            { id: 3, name: "Dilarə Babayeva", mail: "adilaliyev@gmail.com", gender: "Qadın", cost: "100 AZN", type: "Video görüş", date: "2024-03-08" },
            { id: 4, name: "Davud Əliyev", mail: "adilaliyev@gmail.com", gender: "Kişi", cost: "100 AZN", type: "Video görüş", date: "2024-01-15" },
        ]
    },
    {
        pathMatch: "/Aptek-Dashboard",
        headers: [
            { label: "Müştəri", key: "customer" },
            { label: "Dərman adı", key: "medicineName" },
            { label: "Miqdarı", key: "quantity" },
            { label: "Məbləğ", key: "cost" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, customer: "Adil Əliyev", medicineName: "Alora 100 ml", quantity: "01", cost: "20 AZN", status: "Gözləyir", date: "2024-03-01" },
            { id: 2, customer: "Leyla Həsənli", medicineName: "Alora 100 ml", quantity: "02", cost: "20 AZN", status: "Tamamlanıb", date: "2024-02-15" },
            { id: 3, customer: "Jalə Heydərli", medicineName: "Alora 100 ml", quantity: "01", cost: "20 AZN", status: "Ləğv edilib", date: "2024-01-28" },
        ]
    },
    {
        pathMatch: "/Aptek-Dashboard/Sifarişlər",
        headers: [
            { label: "Sifariş nömrəsi", key: "customerId" },
            { label: "Müştəri", key: "customer" },
            { label: "Dərman adı", key: "medicineName" },
            { label: "Miqdarı", key: "quantity" },
            { label: "Məbləğ", key: "cost" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, customerId: "001123464", customer: "Adil Əliyev", medicineName: "Alora 100 ml", quantity: "01", cost: "20 AZN", status: "Gözləyir", date: "2024-03-01" },
            { id: 2, customerId: "001123464", customer: "Leyla Həsənli", medicineName: "Alora 100 ml", quantity: "02", cost: "20 AZN", status: "Tamamlanıb", date: "2024-02-15" },
            { id: 3, customerId: "001123464", customer: "Jalə Heydərli", medicineName: "Alora 100 ml", quantity: "01", cost: "20 AZN", status: "Ləğv edilib", date: "2024-01-28" },
        ]
    },
    {
        pathMatch: "/Aptek-Dashboard/Dərmanlar",
        headers: [
            { label: "Derman kodu", key: "medicineId" },
            { label: "Dərman adı", key: "medicineName" },
            { label: "Şəkli", key: "image" },
            { label: "Kateqoriya", key: "category" },
            { label: "Miqdarı", key: "quantity" },
            { label: "Məbləğ", key: "cost" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, medicineId: "001123464", medicineName: "Alora 100 ml", image: "/assets/images/derman.png", category: "Ağrı kəsici", quantity: "30", cost: "20 AZN", status: "Mövcuddur", date: "2024-03-01" },
            { id: 2, medicineId: "001123464", medicineName: "Alora 100 ml", image: "/assets/images/derman.png", category: "Antibiotik", quantity: "03", cost: "20 AZN", status: "Məhduddur", date: "2024-02-15" },
            { id: 3, medicineId: "001123464", medicineName: "Alora 100 ml", image: "/assets/images/derman.png", category: "Soğukdəymə", quantity: "10", cost: "20 AZN", status: "Tükənib", date: "2024-01-28" },
        ]
    },
    {
        pathMatch: "/Aptek-Dashboard/Müştərilər",
        headers: [
            { label: "Müştəri", key: "customer" },
            { label: "Əlaqə", key: "contact" },
            { label: "Cins", key: "gender" },
            { label: "Status", key: "status" },
        ],
        data: [
            { id: 1, customer: "Adil Əliyev", contact: "adilaliyev@gmail.com +994(50) 2323435", gender: "Kişi", status: "Mövcuddur", date: "2024-03-01" },
            { id: 2, customer: "Adil Əliyev", contact: "adilaliyev@gmail.com +994(50) 2323435", gender: "Kişi", status: "Məhduddur", date: "2024-02-15" },
            { id: 3, customer: "Adil Əliyev", contact: "adilaliyev@gmail.com +994(50) 2323435", gender: "Kişi", status: "Tükənib", date: "2024-01-28" },
        ]
    },
    {
        pathMatch: "/Klinika-Dashboard/Pasientlər",
        headers: [
            { label: "Pasient", key: "patient" },
            { label: "Doğum tarixi", key: "birthDate" },
            { label: "Həkiminin adı", key: "doctorName" },
            { label: "Status", key: "status" },
        ],
        data: [
            { id: 1, patient: "Adil Əliyev", birthDate: "03.11.2001", doctorName: "dr. Aynur", status: "Gözləyir", date: "2024-03-01" },
            { id: 2, patient: "Adil Əliyev", birthDate: "03.11.2001", doctorName: "dr. Aynur", status: "Gözləyir", date: "2024-02-15" },
            { id: 3, patient: "Adil Əliyev", birthDate: "03.11.2001", doctorName: "dr. Aynur", status: "Aktiv", date: "2024-01-28" },
        ]
    },
    {
        pathMatch: "/Klinika-Dashboard/Hesabatlar",
        headers: [
            { label: "Həkim", key: "doctor" },
            { label: "Aylıq qazancı", key: "monthlyIncome" },
            { label: "Xəstə sayı", key: "patientCount" },
            { label: "Maaşı", key: "wage" },
        ],
        data: [
            { id: 1, doctor: "Adil Əliyev", monthlyIncome: "2500 AZN", patientCount: "20", wage: "800", date: "2024-03-01" },
            { id: 2, doctor: "Adil Əliyev", monthlyIncome: "2500 AZN", patientCount: "20", wage: "800", date: "2024-02-15" },
            { id: 3, doctor: "Adil Əliyev", monthlyIncome: "2500 AZN", patientCount: "20", wage: "800", date: "2024-01-28" },
        ]
    },
    {
        pathMatch: "/Ümumi-Admin-Panel",
        headers: [
            { label: "Xəstə", key: "patient" },
            { label: "Həkim", key: "doctor" },
            { label: "Klinika", key: "hospital" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, patient: "Adil Əliyev", doctor: "Adil Əliyev", hospital: "Baku Medical Plaza", date: "2024-03-11", status: "Gözləyir" },
            { id: 2, patient: "Leyla Həsənli", doctor: "Adil Əliyev", hospital: "Baku Medical Plaza", date: "2024-03-11", status: "Tamamlanıb" },
            { id: 3, patient: "Dilarə Babayeva", doctor: "Adil Əliyev", hospital: "Medera", date: "2024-03-11", status: "Ləğv edilib" },
        ]
    },
    {
        pathMatch: "/Ümumi-Admin-Panel/Randevular",
        headers: [
            { label: "Xəstə", key: "patient" },
            { label: "Telefon", key: "phone" },
            { label: "Klinika", key: "hospital" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, patient: "Adil Əliyev", phone: "+994 50 123 45 67", hospital: "Baku Medical Plaza", date: "2024-03-11", status: "Gözləyir" },
            { id: 2, patient: "Leyla Həsənli", phone: "+994 50 123 45 67", hospital: "Baku Medical Plaza", date: "2024-03-11", status: "Tamamlanıb" },
            { id: 3, patient: "Dilarə Babayeva", phone: "+994 50 123 45 67", hospital: "Medera", date: "2024-03-11", status: "Ləğv edilib" },
        ]
    },
    {
        pathMatch: "/Ümumi-Admin-Panel/İstifadəçilər",
        headers: [
            { label: "İstifadəçi", key: "user" },
            { label: "Rolu", key: "role" },
            { label: "Telefon nömrəsi", key: "phone" },
            { label: "E-mail", key: "mail" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, user: "Adil Əliyev", role: "Həkim", phone: "+994 50 123 45 67", mail: "adil@hospital.com" , date: "2024-03-11", status: "Gözləyir" },
            { id: 2, user: "Leyla Həsənli", role: "Aptek sahibi", phone: "+994 50 123 45 67", mail: "adil@hospital.com" ,date: "2024-03-11", status: "Tamamlanıb" },
            { id: 3, user: "Dilarə Babayeva", role: "Xəstə", phone: "+994 50 123 45 67", mail: "adil@hospital.com" , date: "2024-03-11", status: "Ləğv edilib" },
        ]
    },
    {
        pathMatch: "/Ümumi-Admin-Panel/MaliyyeHesabatlari",
        headers: [
            { label: "İstifadəçi", key: "user" },
            { label: "Həkim", key: "doctor" },
            { label: "Gəlir məbləği", key: "cost" },
            { label: "Status", key: "status" }
        ],
        data: [
            { id: 1, user: "Adil Əliyev", doctor: "Adil Əliyev", cost: "50 AZN", mail: "adil@hospital.com" , date: "2024-03-11", status: "Gözləyir" },
            { id: 2, user: "Leyla Həsənli", doctor: "Adil Əliyev", cost: "50 AZN", mail: "adil@hospital.com" ,date: "2024-03-11", status: "Tamamlanıb" },
            { id: 3, user: "Dilarə Babayeva", doctor: "Adil Əliyev", cost: "Ödənişsiz", mail: "adil@hospital.com" , date: "2024-03-11", status: "Ləğv edilib" },
        ]
    },
    {
        pathMatch: "/Ümumi-Admin-Panel/HekimPerformansi",
        headers: [
            { label: "Həkim", key: "doctor" },
            { label: "Ümumi gəliri", key: "cost" },
            { label: "Ümumi xəstə sayı", key: "patientCount" },
            { label: "Məmnuniyyət Dərəcəsi", key: "satisfaction" },
            { label: "Doğru Diaqnoz Faizi", key: "correctDiagnosis" }
        ],
        data: [
            { id: 1, doctor: "Adil Əliyev", cost: "50 AZN", patientCount: "50" , satisfaction: <Rate/>, correctDiagnosis: "92% " },
            { id: 2, doctor: "Adil Əliyev", cost: "50 AZN", patientCount: "65" ,satisfaction: <Rate/>, correctDiagnosis: "92% " },
            { id: 3, doctor: "Adil Əliyev", cost: "100 AZN", patientCount: "45" , satisfaction: <Rate/>, correctDiagnosis: "92% " },
        ]
    }
];
