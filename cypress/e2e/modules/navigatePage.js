export function navigatePage(){
  //ใช้ชื่อ fixture ให้ตรงกับไฟล์ที่ต้องการเรียกใช้ใน fixture
  cy.fixture('urlPage').then((url) => {

    // ใช้ข้อมูลจากไฟล์ Fixture
    cy.visit(url)
  })
}

