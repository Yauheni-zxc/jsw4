const scheduleTbody = document.getElementById('schedule-tbody');

    const scheduleData = [
      {
        name: "Йога",
        time: "10:00 - 11:00",
        maxParticipants: 10,
        registeredParticipants: 5,
      },
      {
        name: "Фитнес",
        time: "12:00 - 13:00",
        maxParticipants: 15,
        registeredParticipants: 12,
      },
      {
        name: "Карате",
        time: "18:00 - 19:00",
        maxParticipants: 8,
        registeredParticipants: 3,
      },
    ];

    function renderSchedule() {
      scheduleTbody.innerHTML = '';
      scheduleData.forEach(lesson => {
        const row = scheduleTbody.insertRow();
        row.insertCell().textContent = lesson.name;
        row.insertCell().textContent = lesson.time;
        row.insertCell().textContent = lesson.maxParticipants;
        const registeredCell = row.insertCell();
        registeredCell.textContent = lesson.registeredParticipants;
        const actionsCell = row.insertCell();

        const registerButton = document.createElement('button');
        registerButton.classList.add('btn', 'btn-primary');
        registerButton.textContent = 'Записаться';
        registerButton.disabled = lesson.registeredParticipants >= lesson.maxParticipants;

        registerButton.addEventListener('click', () => {
          registerForLesson(lesson);
        });

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('btn', 'btn-danger');
        cancelButton.textContent = 'Отменить запись';
        cancelButton.disabled = lesson.registeredParticipants === 0;

        cancelButton.addEventListener('click', () => {
          cancelRegistration(lesson);
        });

        actionsCell.appendChild(registerButton);
        actionsCell.appendChild(cancelButton);
      });
    }

    function registerForLesson(lesson) {
      if (lesson.registeredParticipants < lesson.maxParticipants) {
        lesson.registeredParticipants++;
        renderSchedule();
      }
    }

    function cancelRegistration(lesson) {
      if (lesson.registeredParticipants > 0) {
        lesson.registeredParticipants--;
        renderSchedule();
      }
    }

    renderSchedule();