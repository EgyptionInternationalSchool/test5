const pdfData = [
    { name: 'علي احمد حسن', url: 'D:/New folder (2)/pdf/علي احمد حسن.pdf' },
    { name: 'ايمان محمد', url: 'D:/New folder (2)/pdf/ايمان محمد.pdf' },
    { name: 'ردينه صلاح', url: 'D:/New folder (2)/pdf/ردينه صلاح.pdf' },
    { name: 'اياد محمد', url: 'D:/New folder (2)/pdf/اياد محمد.pdf' },
    { name: 'علي محمود', url: 'D:/New folder (2)/pdf/علي محمود.pdf' },
    { name: 'عمر خالد', url: 'https://drive.google.com/file/d/1tO5IKUYqW7S7UpI5mvKTJnVxpp78ItLA/view?usp=drive_link /عمر خالد.pdf' },
  ];

    function generateTableRows() {
      const tableBody = document.getElementById('table-body');
      tableBody.innerHTML = ''; // Clear any existing rows
      pdfData.forEach(pdf => {
        const row = document.createElement('tr');
        row.classList.add('data-row');
        row.innerHTML = `
          <td>${pdf.name}</td>
          <td><a href="${pdf.url}" target="_blank">View PDF</a></td>
        `;
        tableBody.appendChild(row);
      });
    }

    function searchTable() {
      const searchBar = document.getElementById('search-bar');
      const searchTerm = searchBar.value.toLowerCase();
      const table = document.getElementById('data-table');
      const rows = document.querySelectorAll('.data-row');
      const noResult = document.getElementById('no-result');
      let recordFound = false;

      rows.forEach(row => {
        const cell = row.getElementsByTagName('td')[0];
        if (cell.textContent.toLowerCase().includes(searchTerm)) {
          row.classList.remove('hidden');
          recordFound = true;
        } else {
          row.classList.add('hidden');
        }
      });
// here we check on value user enter if it empty condition will show if not result will show
      if(searchTerm === ''){
        table.style.display = 'none';
        noResult.style.display = 'block';
        noResult.textContent = 'Please Enter Value to Search'}
// recordFound mean user already enter value so table will show and <p> tag still hidden 
// note: recordFound => recordFound==true ----- same are true write this or this same result
      else if (recordFound) {
        table.style.display = 'table';
        noResult.style.display = 'none';
      } 
   // here we said to compiler if any above code not exist show message and keep table hidden   
      else {
        table.style.display = 'none';
        noResult.style.display = 'block';
        noResult.textContent = "File doesn't Exist"
      }
    }
// try now reload page first
//Go
    // Generate table rows on page load
    window.onload = generateTableRows;
