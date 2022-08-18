import React from "react";

export const Success = ({ count, onClickSuccessBack }) => {
    return (
        <div class="success-block">
            <img src="/assets/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={onClickSuccessBack} className="send-invite-btn">
                Назад
            </button>
        </div>
    );
};
