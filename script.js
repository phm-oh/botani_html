const plantsContainer = document.getElementById('plantsContainer');
const statusMessage = document.getElementById('statusMessage');
const responseInfo = document.getElementById('responseInfo');
const loadingSpinner = document.getElementById('loadingSpinner');

// ข้อมูลตัวอย่าง - ปรับวันที่เป็นเดือนธันวาคม 2025 (ปีงบ 69 / ปีปฏิทิน 68)
// *หมายเหตุ: ใน JavaScript ใช้ปี ค.ศ. (2025) เมื่อแสดงผลด้วย toLocaleDateString('th-TH') จะเป็น 2568
let samplePlantsData = {
    status: "success",
    message: "ดึงข้อมูลพรรณไม้สำเร็จ",
    data: [
        { 
            id: "BGO001", 
            commonName: "ยางนา", 
            scientificName: "Dipterocarpus alatus", 
            family: "Dipterocarpaceae", 
            characteristics: "ไม้ยืนต้นขนาดใหญ่ ใบหนาเงาดี รากอากาศ ใช้เป็นไม้ประดับในบ้าน", 
            location: "สวนพฤกษศาสตร์โซน A", 
            category: "พืชพื้นบ้าน", 
            conservationStatus: "เสี่ยงต่อการสูญพันธุ์", 
            recordDate: "2025-12-01" 
        },
        { 
            id: "BGO002", 
            commonName: "มะขามป้อม", 
            scientificName: "Phyllanthus emblica", 
            family: "Phyllanthaceae", 
            characteristics: "ไม้ผลขนาดกลาง ผลกลมรสเปรี้ยวฝาด ใช้ทำยา วิตามินซีสูง", 
            location: "สวนพฤกษศาสตร์โซน B", 
            category: "พืชใช้ประโยชน์", 
            conservationStatus: "ปลอดภัย", 
            recordDate: "2025-12-05" 
        },
        { 
            id: "BGO003", 
            commonName: "ข้าวสารดอกใหญ่", 
            scientificName: "Raphistemma pulchellum", 
            family: "Apocynaceae", 
            characteristics: "ไม้เถาเลื้อย ดอกช่อสีขาวสวยงาม มีกลิ่นหอม", 
            location: "สวนพฤกษศาสตร์โซน C", 
            category: "พืชประดับ", 
            conservationStatus: "ปลอดภัย", 
            recordDate: "2025-12-10" 
        },
        { 
            id: "BGO004", 
            commonName: "จันทน์ผา", 
            scientificName: "Dracaena cochinchinensis", 
            family: "Asparagaceae", 
            characteristics: "ไม้พุ่มขนาดกลาง รูปทรงสวยงาม ชอบขึ้นตามภูเขาหินปูน", 
            location: "สวนพฤกษศาสตร์โซน D", 
            category: "พืชประดับ", 
            conservationStatus: "เสี่ยงต่อการสูญพันธุ์", 
            recordDate: "2025-12-12" 
        },
        { 
            id: "BGO005", 
            commonName: "พะยูง", 
            scientificName: "Dalbergia cochinchinensis", 
            family: "Fabaceae", 
            characteristics: "ไม้ยืนต้นขนาดใหญ่ เนื้อไม้สีแดงสวยงาม ราคาแพง", 
            location: "สวนพฤกษศาสตร์โซน E", 
            category: "พืชเศรษฐกิจ", 
            conservationStatus: "ใกล้สูญพันธุ์", 
            recordDate: "2025-12-20" 
        },
        { 
            id: "BGO006", 
            commonName: "กระดังงาไทย", 
            scientificName: "Cananga odorata", 
            family: "Annonaceae", 
            characteristics: "ไม้ยืนต้น ดอกสีเหลือง กลิ่นหอมแรง ใช้นำมันหอมระเหย", 
            location: "สวนพฤกษศาสตร์โซน F", 
            category: "พืชหอม", 
            conservationStatus: "ปลอดภัย", 
            recordDate: "2025-12-25" 
        }
    ],
    total: 6,
    timestamp: new Date().toISOString()
};

const plantImages = {
    "BGO001": "img/ยางนา.jpg",
    "BGO002": "img/มะขามป้อม.jfif", 
    "BGO003": "img/กบข้าวสาร.jpg",
    "BGO004": "img/หางไก่ป่า.jpg",
    "BGO005": "img/ชิงชี่.jpg",
    "BGO006": "img/กระดังงาใหญ่.jpg"
};

// --- Helper Functions ---
function showLoading() {
    loadingSpinner.style.display = 'block';
    plantsContainer.innerHTML = '';
    statusMessage.innerHTML = '';
    responseInfo.innerHTML = '';
}

function hideLoading() { loadingSpinner.style.display = 'none'; }

function showStatus(message, isError = false) {
    statusMessage.innerHTML = `<div class="status-message ${isError ? 'status-error' : 'status-success'}">${message}</div>`;
    // Auto hide status after 3 seconds
    setTimeout(() => { statusMessage.innerHTML = ''; }, 3000);
}

function getStatusColor(status) {
    switch(status) {
        case 'ปลอดภัย': return '#2e7d32'; // สีเขียวเข้มขึ้น
        case 'ใกล้สูญพันธุ์': return '#c62828'; // สีแดงเข้ม
        case 'เสี่ยงต่อการสูญพันธุ์': return '#f9a825'; // สีเหลืองเข้ม
        default: return '#666';
    }
}

function showResponseInfo(data) {
    responseInfo.innerHTML = `
        <div class="response-info">
            <strong>API Response:</strong><br>
            Status: ${data.status} | Total: ${data.data.length} | Timestamp: ${new Date().toLocaleTimeString('th-TH')}
        </div>
    `;
}

// --- Main Display Function ---
function displayPlants(plants) {
    if (!plants || plants.length === 0) {
        plantsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #666;">
                <h3>ไม่พบข้อมูลพรรณไม้</h3>
                <p>กรุณาโหลดข้อมูลใหม่</p>
            </div>
        `;
        return;
    }

    plantsContainer.innerHTML = plants.map((plant) => {
        const imagePath = plantImages[plant.id] || '';
        const imageHTML = imagePath ? 
            `<img src="${imagePath}" alt="${plant.commonName}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
             <div class="plant-image-placeholder" style="display: none;">🌿</div>` :
            `<div class="plant-image-placeholder">🌿</div>`;

        // แปลงวันที่ให้เป็นรูปแบบไทย (เช่น 1 ธ.ค. 2568)
        const dateObj = new Date(plant.recordDate);
        const thaiDate = dateObj.toLocaleDateString('th-TH', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return `
            <div class="plant-card">
                <div class="plant-image">${imageHTML}</div>
                <div class="plant-content">
                    <div class="plant-name">${plant.commonName}</div>
                    <div class="plant-scientific">${plant.scientificName}</div>
                    
                    <div class="plant-detail">
                        <span class="detail-label">ID:</span>
                        <span class="detail-value">${plant.id}</span>
                    </div>
                    <div class="plant-detail">
                        <span class="detail-label">ตำแหน่ง:</span>
                        <span class="detail-value">${plant.location}</span>
                    </div>
                    <div class="plant-detail">
                        <span class="detail-label">วันที่บันทึก:</span>
                        <span class="detail-value">${thaiDate}</span>
                    </div>
                    <div class="plant-detail">
                        <span class="detail-label">สถานะ:</span>
                        <span class="detail-value" style="color: ${getStatusColor(plant.conservationStatus)}; font-weight: bold;">
                            ${plant.conservationStatus}
                        </span>
                    </div>
                    
                    <div class="plant-actions">
                        <button class="btn btn-small" onclick="openViewModal('${plant.id}')">📖 ดู</button>
                        <button class="btn btn-warning btn-small" onclick="openEditModal('${plant.id}')">✏️ แก้ไข</button>
                        <button class="btn btn-danger btn-small" onclick="openDeleteModal('${plant.id}')">🗑️ ลบ</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// --- Modal Management Functions ---
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// 1. View Detail Logic
function openViewModal(id) {
    const plant = samplePlantsData.data.find(p => p.id === id);
    if (!plant) return;

    const imagePath = plantImages[plant.id] || '';
    const imageHTML = imagePath ? 
        `<img src="${imagePath}" class="view-image" onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">` :
        `<div class="view-image" style="display:flex;align-items:center;justify-content:center;font-size:3em;color:#aaa;">🌿</div>`;

    const thaiDate = new Date(plant.recordDate).toLocaleDateString('th-TH', { 
        year: 'numeric', month: 'long', day: 'numeric' 
    });

    const content = `
        ${imageHTML}
        <div class="view-section">
            <h2 style="color:#1b5e20;">${plant.commonName}</h2>
            <p style="font-style:italic;color:#666;">${plant.scientificName}</p>
        </div>
        <div class="view-section">
            <p><span class="view-label">รหัสพรรณไม้:</span> ${plant.id}</p>
            <p><span class="view-label">วงศ์ (Family):</span> ${plant.family}</p>
            <p><span class="view-label">หมวดหมู่:</span> ${plant.category || '-'}</p>
        </div>
        <div class="view-section">
            <p class="view-label">ลักษณะเด่น:</p>
            <p style="color:#555; margin-top:5px; line-height:1.6;">${plant.characteristics}</p>
        </div>
        <div class="view-section">
            <p><span class="view-label">สถานที่พบ:</span> ${plant.location}</p>
            <p><span class="view-label">สถานะ:</span> <span style="color:${getStatusColor(plant.conservationStatus)};font-weight:bold;">${plant.conservationStatus}</span></p>
            <p><span class="view-label">วันที่บันทึก:</span> ${thaiDate}</p>
        </div>
    `;
    
    document.getElementById('viewModalContent').innerHTML = content;
    openModal('viewModal');
}

// 2. Edit Logic
function openEditModal(id) {
    const plant = samplePlantsData.data.find(p => p.id === id);
    if (!plant) return;

    document.getElementById('editId').value = plant.id;
    document.getElementById('editCommonName').value = plant.commonName;
    document.getElementById('editScientificName').value = plant.scientificName;
    document.getElementById('editFamily').value = plant.family;
    document.getElementById('editCharacteristics').value = plant.characteristics;
    document.getElementById('editLocation').value = plant.location;
    document.getElementById('editStatus').value = plant.conservationStatus;

    openModal('editModal');
}

function saveEditPlant() {
    const id = document.getElementById('editId').value;
    const plantIndex = samplePlantsData.data.findIndex(p => p.id === id);
    
    if (plantIndex !== -1) {
        // อัพเดตข้อมูลในตัวแปร
        samplePlantsData.data[plantIndex] = {
            ...samplePlantsData.data[plantIndex],
            commonName: document.getElementById('editCommonName').value,
            scientificName: document.getElementById('editScientificName').value,
            family: document.getElementById('editFamily').value,
            characteristics: document.getElementById('editCharacteristics').value,
            location: document.getElementById('editLocation').value,
            conservationStatus: document.getElementById('editStatus').value
        };

        showStatus(`บันทึกข้อมูล ${samplePlantsData.data[plantIndex].commonName} เรียบร้อย!`);
        displayPlants(samplePlantsData.data);
        closeModal('editModal');
    }
}

// 3. Delete Logic
function openDeleteModal(id) {
    const plant = samplePlantsData.data.find(p => p.id === id);
    if (!plant) return;

    document.getElementById('deleteId').value = id;
    document.getElementById('deletePlantName').textContent = plant.commonName;
    openModal('deleteModal');
}

function confirmDeletePlant() {
    const id = document.getElementById('deleteId').value;
    // จำลองการลบ
    samplePlantsData.data = samplePlantsData.data.filter(p => p.id !== id);
    
    showStatus(`ลบข้อมูลเรียบร้อย!`);
    showResponseInfo(samplePlantsData);
    displayPlants(samplePlantsData.data);
    closeModal('deleteModal');
}

// --- Data Loading Functions ---
function loadAllPlants() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        showStatus(`ดึงข้อมูลสำเร็จ! พบ ${samplePlantsData.data.length} รายการ`);
        showResponseInfo(samplePlantsData);
        displayPlants(samplePlantsData.data);
    }, 1000);
}

function loadSampleData() {
    loadAllPlants(); 
}

function clearData() {
    plantsContainer.innerHTML = '';
    statusMessage.innerHTML = '';
    responseInfo.innerHTML = '';
    showStatus("ล้างข้อมูลหน้าจอเรียบร้อย", false);
}

// ปิด Modal เมื่อคลิกพื้นที่ว่างๆ
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
}

// เริ่มต้นทำงาน
window.addEventListener('load', () => {
    loadSampleData();
});