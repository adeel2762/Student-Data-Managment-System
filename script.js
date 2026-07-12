let studentsList = [];

const studentForm = document.getElementById('studentForm');
const tableBody = document.getElementById('studentTableBody');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const formTitle = document.getElementById('formTitle');
const editIndexField = document.getElementById('editIndex');
const noRecordsMsg = document.getElementById('noRecordsMsg');

function addStudent(formData) {
    const newStudent = {
        studentName: formData.get('studentName').trim(),
        fatherName: formData.get('fatherName').trim(),
        rollNumber: formData.get('rollNumber').trim(),
        email: formData.get('email').trim(),
        phone: formData.get('phone').trim(),
        gender: formData.get('gender'),
        course: formData.get('course'),
        age: formData.get('age')
    };

    studentsList.push(newStudent);
    render();
    resetForm();
}

function editStudent(index) {
    const student = studentsList[index];

    if (!student) return;

    document.getElementById('studentName').value = student.studentName;
    document.getElementById('fatherName').value = student.fatherName;
    document.getElementById('rollNumber').value = student.rollNumber;
    document.getElementById('email').value = student.email;
    document.getElementById('phone').value = student.phone;
    document.getElementById('course').value = student.course;
    document.getElementById('age').value = student.age;

    const genderRadio = document.querySelector(
        `input[name="gender"][value="${student.gender}"]`
    );
    if (genderRadio) {
        genderRadio.checked = true;
    }

    editIndexField.value = index;
    formTitle.textContent = 'Edit Student';
    submitBtn.textContent = 'Update Student';
    highlightEditingRow(index);
    studentForm.scrollIntoView({ behavior: 'smooth' });
}

function updateStudent(index, formData) {
    const updatedStudent = {
        studentName: formData.get('studentName').trim(),
        fatherName: formData.get('fatherName').trim(),
        rollNumber: formData.get('rollNumber').trim(),
        email: formData.get('email').trim(),
        phone: formData.get('phone').trim(),
        gender: formData.get('gender'),
        course: formData.get('course'),
        age: formData.get('age')
    };

    studentsList[index] = updatedStudent;
    render();
    resetForm();
}

function render() {
    tableBody.innerHTML = '';

    if (studentsList.length === 0) {
        noRecordsMsg.classList.remove('d-none');
    } else {
        noRecordsMsg.classList.add('d-none');
    }

    studentsList.forEach((student, index) => {
        const row = document.createElement('tr');
        row.setAttribute('data-index', index);

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.studentName}</td>
            <td>${student.fatherName}</td>
            <td>${student.rollNumber}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.gender}</td>
            <td>${student.course}</td>
            <td>${student.age}</td>
            <td>
                <button type="button" class="btn btn-sm btn-warning action-btn edit-btn" data-index="${index}">
                    Edit
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    attachEditButtonListeners();
}

function resetForm() {
    studentForm.reset();
    editIndexField.value = '';
    formTitle.textContent = 'Add New Student';
    submitBtn.textContent = 'Add Student';
    clearEditingHighlight();
}

function attachEditButtonListeners() {
    const editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-index'), 10);
            editStudent(index);
        });
    });
}

function highlightEditingRow(index) {
    clearEditingHighlight();
    const row = tableBody.querySelector(`tr[data-index="${index}"]`);
    if (row) {
        row.classList.add('table-row-editing');
    }
}

function clearEditingHighlight() {
    document.querySelectorAll('.table-row-editing').forEach((row) => {
        row.classList.remove('table-row-editing');
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(studentForm);

    if (!studentForm.checkValidity()) {
        studentForm.reportValidity();
        return;
    }

    const editIndex = editIndexField.value;

    if (editIndex === '') {
        addStudent(formData);
    } else {
        updateStudent(parseInt(editIndex, 10), formData);
    }
}

studentForm.addEventListener('submit', handleFormSubmit);
resetBtn.addEventListener('click', resetForm);

render();