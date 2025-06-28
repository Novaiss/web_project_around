// Seletores dos elementos de perfil
const profileName = document.querySelector('.profile__name');
const profileRole = document.querySelector('.profile__role');
const editBtn = document.querySelector('.profile__edit-btn');

// Seletores do popup/modal
const popup = document.getElementById('profile-popup');
const closeBtn = popup.querySelector('.popup__close-btn');
const form = popup.querySelector('.popup__form');
const inputName = form.elements['name'];
const inputRole = form.elements['role'];

function openPopup() {
  // Preenche os campos do popup com os valores atuais do perfil
  inputName.value = profileName.textContent;
  inputRole.value = profileRole.textContent;
  // Adiciona a classe para mostrar o popup
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(event) {
  event.preventDefault(); // Impede o reload da página

  // Atualiza os dados do perfil na página com os valores do formulário
  profileName.textContent = inputName.value;
  profileRole.textContent = inputRole.value;

  closePopup(); // Fecha o popup após salvar
}

// Abrir popup ao clicar no botão editar
editBtn.addEventListener('click', openPopup);

// Fechar popup ao clicar no botão X
closeBtn.addEventListener('click', closePopup);

// Salvar as alterações ao enviar o formulário
form.addEventListener('submit', handleFormSubmit);

// (Opcional) Fechar o popup ao clicar fora da caixa
popup.addEventListener('mousedown', function(event) {
  if (event.target === popup) {
    closePopup();
  }
});
