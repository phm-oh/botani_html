const plantsContainer = document.getElementById('plantsContainer');
const statusMessage = document.getElementById('statusMessage');
const responseInfo = document.getElementById('responseInfo');
const loadingSpinner = document.getElementById('loadingSpinner');

// ตัวแปรเก็บข้อมูลปัจจุบัน (เริ่มต้นใช้ข้อมูลจาก data.js)
// เราใช้ let เพื่อให้สามารถแก้ไขข้อมูลในหน่วยความจำได้
let currentPlants = {
    status: "success",
    message: "ดึงข้อมูลพรรณไม้สำเร็จ",
    data: [...plantsData], // คัดลอกข้อมูลจาก data.js
    total: plantsData.length,
    timestamp: new Date().toISOString()
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
    setTimeout(() => { statusMessage.innerHTML = ''; }, 3000);
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
        // ใช้ dummy image ถ้าไม่มีรูปจริง
        const imagePath = plant.imagePath || '';
        const imageHTML = imagePath ? 
            `<img src="${imagePath}" alt="${plant.commonName}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
             <div class="plant-image-placeholder" style="display: none;">🌿</div>` :
            `<div class="plant-image-placeholder">🌿</div>`;

        // แปลงวันที่เป็นไทย
        const dateObj = new Date(plant.recordDate);
        const thaiDate = isNaN(dateObj) ? plant.recordDate : dateObj.toLocaleDateString('th-TH', { 
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
                        <span class="detail-label">ประเภท:</span>
                        <span class="detail-value">${plant.category || '-'}</span>
                    </div>
                    <div class="plant-detail">
                        <span class="detail-label">สถานที่:</span>
                        <span class="detail-value">${plant.location}</span>
                    </div>
                    <div class="plant-detail">
                        <span class="detail-label">วันที่:</span>
                        <span class="detail-value">${thaiDate}</span>
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
    const plant = currentPlants.data.find(p => p.id === id);
    if (!plant) return;

    const imagePath = plant.imagePath || '';
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
            <p><span class="view-label">หมวดหมู่/ลักษณะวิสัย:</span> ${plant.category || '-'}</p>
        </div>
        <div class="view-section">
            <p class="view-label">ลักษณะเด่น:</p>
            <p style="color:#555; margin-top:5px; line-height:1.6;">${plant.characteristics}</p>
        </div>
        <div class="view-section">
            <p><span class="view-label">สถานที่พบ:</span> ${plant.location}</p>
            <p><span class="view-label">วันที่บันทึก:</span> ${thaiDate}</p>
        </div>
    `;
    
    document.getElementById('viewModalContent').innerHTML = content;
    openModal('viewModal');
}

// 2. Edit Logic
function openEditModal(id) {
    const plant = currentPlants.data.find(p => p.id === id);
    if (!plant) return;

    document.getElementById('editId').value = plant.id;
    document.getElementById('editCommonName').value = plant.commonName;
    document.getElementById('editScientificName').value = plant.scientificName;
    document.getElementById('editFamily').value = plant.family;
    document.getElementById('editCategory').value = plant.category || '';
    document.getElementById('editCharacteristics').value = plant.characteristics;
    document.getElementById('editLocation').value = plant.location;

    openModal('editModal');
}

function saveEditPlant() {
    const id = document.getElementById('editId').value;
    const plantIndex = currentPlants.data.findIndex(p => p.id === id);
    
    if (plantIndex !== -1) {
        // อัปเดตข้อมูลในตัวแปร
        currentPlants.data[plantIndex] = {
            ...currentPlants.data[plantIndex],
            commonName: document.getElementById('editCommonName').value,
            scientificName: document.getElementById('editScientificName').value,
            family: document.getElementById('editFamily').value,
            category: document.getElementById('editCategory').value,
            characteristics: document.getElementById('editCharacteristics').value,
            location: document.getElementById('editLocation').value
        };

        showStatus(`บันทึกข้อมูล ${currentPlants.data[plantIndex].commonName} เรียบร้อย!`);
        displayPlants(currentPlants.data);
        closeModal('editModal');
    }
}

// 3. Delete Logic
function openDeleteModal(id) {
    const plant = currentPlants.data.find(p => p.id === id);
    if (!plant) return;

    document.getElementById('deleteId').value = id;
    document.getElementById('deletePlantName').textContent = plant.commonName;
    openModal('deleteModal');
}

function confirmDeletePlant() {
    const id = document.getElementById('deleteId').value;
    currentPlants.data = currentPlants.data.filter(p => p.id !== id);
    
    showStatus(`ลบข้อมูลเรียบร้อย!`);
    showResponseInfo(currentPlants);
    displayPlants(currentPlants.data);
    closeModal('deleteModal');
}

// --- Data Loading Functions ---
function loadAllPlants() {
    showLoading();
    // จำลองการโหลดข้อมูล (ใช้ข้อมูลจาก data.js ที่โหลดมาแล้ว)
    setTimeout(() => {
        hideLoading();
        // รีเซ็ตข้อมูลกลับไปเป็นค่าเริ่มต้นจาก data.js
        currentPlants.data = [...plantsData]; 
        showStatus(`ดึงข้อมูลสำเร็จ! พบ ${currentPlants.data.length} รายการ`);
        showResponseInfo(currentPlants);
        displayPlants(currentPlants.data);
    }, 800);
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

// เริ่มต้นทำงานทันทีที่โหลดหน้าเว็บ
window.addEventListener('load', () => {
    loadAllPlants();
});